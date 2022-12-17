import DraftPick from './DraftPick';
import PropTypes from 'prop-types';

function DraftList({ draftAthletes }) {
  return (
    <div className='rounded-lg shadow-lg card bg-base-100'>
      <div className='card-body'>
        <h2 className='text-3xl my-4 font-bold card-title'>Draft Order</h2>
        {draftAthletes?.map((athlete) => (
          <DraftPick key={athlete.id} athlete={athlete} />
        ))}
      </div>
    </div>
  );
}

DraftList.propTypes = {
  draftAthletes: PropTypes.array.isRequired,
};
export default DraftList;
