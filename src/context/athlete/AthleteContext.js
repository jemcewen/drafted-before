import axios from 'axios';
import { createContext, useReducer } from 'react';
import athleteReducer from './AthleteReducer';

const AthleteContext = createContext();

const ATHLETES_URL = process.env.REACT_APP_ATHLETES_URL;

export const AthleteProvider = ({ children }) => {
  const initialState = {
    athletes: [],
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
        loading: state.loading,
        searchAthletes,
        clearAthletes,
      }}
    >
      {children}
    </AthleteContext.Provider>
  );
};

export default AthleteContext;
