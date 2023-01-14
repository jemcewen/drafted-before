import { useState, useRef } from 'react';
import Pagination from '../layout/Pagination';
import DraftPick from './DraftPick';
import PropTypes from 'prop-types';

function DraftList({ draftAthletes, position, year }) {
  const [filter, setFilter] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [athletesPerPage] = useState(12);

  const myRef = useRef(null);
  const indexOfLastAthlete = currentPage * athletesPerPage;
  const indexOfFirstAthlete = indexOfLastAthlete - athletesPerPage;
  const currentAthletes = draftAthletes.slice(
    indexOfFirstAthlete,
    indexOfLastAthlete
  );

  const nextPage = () => {
    setTimeout(() => {
      myRef.current.scrollIntoView({ behavior: 'smooth' });
    }, 0);

    setCurrentPage((prev) => prev + 1);
  };
  const previousPage = () => {
    setTimeout(() => {
      myRef.current.scrollIntoView({ behavior: 'smooth' });
    }, 0);
    setCurrentPage((prev) => prev - 1);
  };

  const handleChange = () => {
    setFilter(!filter);
  };

  return (
    <>
      <div className='rounded-lg shadow-lg card bg-base-100'>
        <div className='card-body' ref={myRef}>
          <div className='flex items-center justify-between'>
            <h2 className='text-3xl my-4 font-bold card-title'>{year} Draft</h2>
            <div>
              <div className='form-control w-36'>
                <label className='cursor-pointer label'>
                  <span className='label-text'>Filter Position</span>
                  <input
                    type='checkbox'
                    className='toggle'
                    checked={filter}
                    onChange={handleChange}
                  />
                </label>
              </div>
            </div>
          </div>
          {filter
            ? draftAthletes
                ?.filter((athlete) => {
                  return athlete.position.name === position;
                })
                .map((athlete) => (
                  <DraftPick key={athlete.id} athlete={athlete} />
                ))
            : currentAthletes?.map((athlete) => (
                <DraftPick key={athlete.id} athlete={athlete} />
              ))}
        </div>
      </div>
      {!filter && (
        <div className='mt-6'>
          <Pagination
            athletesPerPage={athletesPerPage}
            totalAthletes={draftAthletes.length}
            indexOfFirstAthlete={indexOfFirstAthlete}
            indexOfLastAthlete={indexOfLastAthlete}
            nextPage={nextPage}
            previousPage={previousPage}
          />
        </div>
      )}
    </>
  );
}

DraftList.propTypes = {
  draftAthletes: PropTypes.array.isRequired,
  position: PropTypes.string.isRequired,
};
export default DraftList;
