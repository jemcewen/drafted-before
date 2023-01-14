import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import headshot from '../layout/assets/headshot.png';

function AthleteItem({ athlete: { fullName, id } }) {
  const headshotURL = `https://a.espncdn.com/i/headshots/nfl/players/full/${id}.png`;

  return (
    <div className='card card-compact card-side shadow-md bg-base-100'>
      <div className='flex-row items-center space-x-4 card-body'>
        <div className='avatar'>
          <div className='rounded-full shadow w-32 h-32'>
            <img
              src={headshotURL}
              alt='headshot'
              onError={(e) => {
                if (e.target.src !== headshot) {
                  e.target.src = headshot;
                }
              }}
              className='bg-gray-100'
            />
          </div>
        </div>
        <div>
          <h2 className='card-title'>{fullName}</h2>
          <Link className='text-base-content ' to={`/athlete/${id}`}>
            View draft
          </Link>
        </div>
      </div>
    </div>
  );
}

AthleteItem.propTypes = {
  athlete: PropTypes.object.isRequired,
};
export default AthleteItem;
