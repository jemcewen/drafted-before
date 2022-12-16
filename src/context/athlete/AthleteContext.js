import axios from 'axios';
import { createContext, useReducer } from 'react';
import athleteReducer from './AthleteReducer';

const AthleteContext = createContext();

const ATHLETES_URL = process.env.REACT_APP_ATHLETES_URL;
const ATHLETE_URL =
  'https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/athletes';
const DRAFT_URL =
  'https://sports.core.api.espn.com/v2/sports/football/leagues/nfl/seasons';

export const AthleteProvider = ({ children }) => {
  const initialState = {
    athletes: [],
    athlete: {},
    draftAthletes: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(athleteReducer, initialState);

  const searchAthletes = async (query) => {
    setLoading();

    const response = await axios.get(ATHLETES_URL);

    const athletes = await response.data.items;

    const filtered = athletes.filter(
      (athlete) =>
        athlete.fullName.toUpperCase().indexOf(query.toUpperCase()) !== -1
    );

    const mapped = filtered.map((athlete) => {
      return {
        id: athlete.id,
        name: athlete.fullName,
      };
    });

    dispatch({
      type: 'SEARCH_USERS',
      payload: mapped,
    });
  };

  const getAthlete = async (id) => {
    setLoading();

    const response = await axios.get(`${ATHLETE_URL}/${id}`);

    if (response.status === 404) {
      window.location = '/notfound';
    } else {
      const athlete = await response.data;
      dispatch({
        type: 'GET_ATHLETE',
        payload: athlete,
      });
      return athlete.draft;
    }
  };

  const getDraftAthletes = async (year, selection) => {
    setLoading();

    const response = await axios.get(`${DRAFT_URL}/${year}/draft/rounds`);

    const allRounds = response.data.items;

    let allPicks = [];

    for (let round of allRounds) {
      allPicks = allPicks.concat(round.picks);
    }

    const picks = allPicks.filter((pick) => pick.overall < selection);

    const playersArray = [];
    for (let pick of picks) {
      const response = await axios.get(pick.athlete['$ref']);

      // const { id, fullName, headshot } = response.data;
      // const toAdd = { id, fullName, headshot };
      // playersArray.push(toAdd);
      console.log(response.data);
      playersArray.push(response.data);
    }

    dispatch({
      type: 'GET_DRAFT_ATHLETES',
      payload: playersArray,
    });

    return playersArray;
  };

  const setLoading = () => {
    dispatch({
      type: 'SET_LOADING',
    });
  };

  const clearAthletes = () => {
    dispatch({
      type: 'CLEAR_ATHLETES',
    });
  };

  return (
    <AthleteContext.Provider
      value={{
        athletes: state.athletes,
        athlete: state.athlete,
        loading: state.loading,
        draftAthletes: state.draftAthletes,
        searchAthletes,
        getAthlete,
        getDraftAthletes,
        clearAthletes,
      }}
    >
      {children}
    </AthleteContext.Provider>
  );
};

export default AthleteContext;
