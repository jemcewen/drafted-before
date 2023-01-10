import defaultHeadshot from '../layout/assets/headshot.png';
import PropTypes from 'prop-types';
import DraftStats from './DraftStats';

function DraftAthlete({ athlete }) {
  const { headshot, fullName, position, team, pick } = athlete;

  return (
    <div className='card card-compact card-side shadow-md bg-base-100'>
      <div className='sm:flex md:flex-row items-center space-x-4 card-body bg-gray-800 hover:bg-gray-900 w-full'>
        <div className='flex-1'>
          <div className='avatar'>
            <div className=' shadow w-32 h-32'>
              {headshot ? (
                <img src={headshot.href} alt='headshot' />
              ) : (
                <img src={defaultHeadshot} alt='headshot' />
              )}
            </div>
          </div>
        </div>

        <div className='flex-1'>
          <h2 className='card-title'>{fullName}</h2>
          <p className='text-base-content text-opacity-40'>{position.name}</p>
        </div>

        <div className='flex-1'>
          <DraftStats pick={pick} team={team} />
        </div>
      </div>
    </div>
  );
}

DraftAthlete.propTypes = {
  athlete: PropTypes.object.isRequired,
};
export default DraftAthlete;
