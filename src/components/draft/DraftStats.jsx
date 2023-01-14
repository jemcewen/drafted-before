import PropTypes from 'prop-types';

function DraftStats({ pick, team }) {
  return (
    <div className='w-full rounded-lg shadow-md bg-base-100 stats'>
      {pick && (
        <div className='stat '>
          <div className='stat-title text-md'>Round</div>
          <div className='text-lg stat-value'>{pick.round}</div>
        </div>
      )}
      {pick && (
        <div className='stat'>
          <div className='stat-title text-md'>Pick</div>
          <div className='text-lg stat-value'>{pick.overall}</div>
        </div>
      )}
      {team && (
        <div className='stat'>
          <div className='stat-title text-md'>Team</div>
          <div className='text-lg stat-value'>{team.abbreviation}</div>
        </div>
      )}
    </div>
  );
}

DraftStats.propTypes = {
  pick: PropTypes.object.isRequired,
};

export default DraftStats;
