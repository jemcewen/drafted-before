import { useContext, useEffect, useState } from 'react';
import Spinner from '../layout/Spinner';
import Pagination from '../layout/Pagination';
import AthleteItem from './AthleteItem';
import AthleteContext from '../../context/athlete/AthleteContext';

function AthleteResults() {
  const { athletes, loading } = useContext(AthleteContext);

  // Reset page to 1 when athletes change
  useEffect(() => {
    setCurrentPage(1);
  }, [athletes]);

  const [currentPage, setCurrentPage] = useState(1);
  const [athletesPerPage] = useState(12);

  const indexOfLastAthlete = currentPage * athletesPerPage;
  const indexOfFirstAthlete = indexOfLastAthlete - athletesPerPage;
  const currentAthletes = athletes.slice(
    indexOfFirstAthlete,
    indexOfLastAthlete
  );

  const nextPage = () => setCurrentPage((prev) => prev + 1);
  const previousPage = () => setCurrentPage((prev) => prev - 1);

  if (loading) {
    return <Spinner />;
  } else if (athletes.length) {
    return (
      <>
        <div className='grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2'>
          {currentAthletes?.map((athlete) => (
            <AthleteItem key={athlete.id} athlete={athlete} />
          ))}
        </div>

        <div className='mt-6'>
          <Pagination
            athletesPerPage={athletesPerPage}
            totalAthletes={athletes.length}
            indexOfFirstAthlete={indexOfFirstAthlete}
            indexOfLastAthlete={indexOfLastAthlete}
            nextPage={nextPage}
            previousPage={previousPage}
          />
        </div>
      </>
    );
  }
}
export default AthleteResults;
