import { useEffect, useState } from 'react';
import axios from 'axios';
import Spinner from '../layout/Spinner';
import AthleteItem from './AthleteItem';

function AthleteResults() {
  const [athletes, setAthletes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    searchAthletes('tom');
  }, []);

  const searchAthletes = async (query) => {
    const athletesURL = '     ';

    const response = await axios.get(athletesURL);

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

  if (loading) {
    return <Spinner />;
  } else
    return (
      <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
        {athletes.map((athlete) => (
          <AthleteItem key={athlete.id} athlete={athlete} />
        ))}
      </div>
    );
}
export default AthleteResults;
