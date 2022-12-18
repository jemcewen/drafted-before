import { useState } from 'react';
import DraftPick from './DraftPick';
import PropTypes from 'prop-types';

function DraftList({ draftAthletes, position }) {
  const [filter, setFilter] = useState(false);

  const handleChange = () => {
    setFilter(!filter);
  };

  return (
    <div className='rounded-lg shadow-lg card bg-base-100'>
      <div className='card-body'>
        <div className='flex items-center justify-between'>
          <h2 className='text-3xl my-4 font-bold card-title'>Draft Order</h2>
          <div>
            <div class='form-control w-36'>
              <label class='cursor-pointer label'>
                <span class='label-text'>Filter Position</span>
                <input
                  type='checkbox'
                  class='toggle'
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
          : draftAthletes?.map((athlete) => (
              <DraftPick key={athlete.id} athlete={athlete} />
            ))}
      </div>
    </div>
  );
}

DraftList.propTypes = {
  draftAthletes: PropTypes.array.isRequired,
  position: PropTypes.string.isRequired,
};
export default DraftList;
