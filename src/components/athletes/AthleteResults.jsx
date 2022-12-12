import { useEffect, useContext } from 'react';
import Spinner from '../layout/Spinner';
import AthleteItem from './AthleteItem';
import AthleteContext from '../../context/AthleteContext';

function AthleteResults() {
  const { athletes, loading, searchAthletes } = useContext(AthleteContext);

  useEffect(() => {
    searchAthletes('tom');
  }, []);

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
