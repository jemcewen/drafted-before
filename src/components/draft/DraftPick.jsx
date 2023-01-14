import defaultHeadshot from '../layout/assets/headshot.png';
import PropTypes from 'prop-types';
import DraftStats from './DraftStats';

function DraftPick({ athlete }) {
  const { headshot, fullName, position, team, pick } = athlete;

  return (
    <div className='card card-compact card-side shadow-md bg-base-100'>
      <div className='sm:flex md:flex-row items-center  card-body bg-gray-100 hover:bg-gray-200 w-full'>
        <div className='flex-1'>
          <div className='avatar'>
            <div className=' shadow w-32 h-32'>
              {headshot ? (
                <img
                  src={headshot.href}
                  alt='headshot'
                  className='rounded-lg shadow-xl image-full bg-white'
                />
              ) : (
                <img
                  src={defaultHeadshot}
                  alt='headshot'
                  className='rounded-lg shadow-xl image-full bg-white'
                />
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

DraftPick.propTypes = {
  athlete: PropTypes.object.isRequired,
};
export default DraftPick;
