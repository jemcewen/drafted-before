import axios from 'axios';
import { createContext, useState } from 'react';

const AthleteContext = createContext();

const ATHLETES_URL = process.env.REACT_APP_ATHLETES_URL;

export const AthleteProvider = ({ children }) => {
  const [athletes, setAthletes] = useState([]);
  const [loading, setLoading] = useState(true);

  const searchAthletes = async (query) => {
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

    setAthletes(mapped);
    setLoading(false);
  };

  return (
    <AthleteContext.Provider value={{ athletes, loading, searchAthletes }}>
      {children}
    </AthleteContext.Provider>
  );
};

export default AthleteContext;
