import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function AthleteItem({ athlete: { name, id } }) {
  const headshotURL = `https://a.espncdn.com/i/headshots/nfl/players/full/${id}.png`;

  return (
    <div className='card card-compact card-side shadow-md bg-base-100'>
      <div className='flex-row items-center space-x-4 card-body'>
        <div className='avatar'>
          <div className='rounded-full shadow w-32 h-32'>
            <img src={headshotURL} alt='headshot' />
          </div>
        </div>
        <div>
          <h2 className='card-title'>{name}</h2>
          <Link
            className='text-base-content text-opacity-40'
            to={`/athletes/${id}`}
          >
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
