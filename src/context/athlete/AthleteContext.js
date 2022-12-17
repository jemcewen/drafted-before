import axios from 'axios';
import { createContext, useReducer } from 'react';
import athleteReducer from './AthleteReducer';

const AthleteContext = createContext();

export const AthleteProvider = ({ children }) => {
  const initialState = {
    athletes: [],
    athlete: {},
    draftAthletes: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(athleteReducer, initialState);

  return (
    <AthleteContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </AthleteContext.Provider>
  );
};

export default AthleteContext;
