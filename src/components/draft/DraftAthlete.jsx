import defaultHeadshot from '../layout/assets/headshot.png';
import PropTypes from 'prop-types';

function DraftAthlete({ athlete, pick }) {
  const { fullName, headshot, position } = athlete;

  return (
    <div className='card card-compact card-side shadow-md bg-base-100'>
      <div className='flex-row items-center space-x-4 card-body bg-gray-800 hover:bg-gray-900'>
        <div className='avatar'>
          <div className=' shadow w-32 h-32'>
            {headshot ? (
              <img src={headshot.href} alt='headshot' />
            ) : (
              <img src={defaultHeadshot} alt='headshot' />
            )}
          </div>
        </div>

        <div>
          <h2 className='card-title'>{fullName}</h2>
          <p className='text-base-content text-opacity-40'>{position.name}</p>
        </div>
      </div>
    </div>
    // <div className='flex mb-2 rounded-md bg-gray-800 hover:bg-gray-900'>
    //   <div className='avatar flex-1'>
    //     <div className='shadow'>
    //       {headshot ? (
    //         <img src={headshot.href} alt='headshot' />
    //       ) : (
    //         <img src={defaultHeadshot} alt='headshot' />
    //       )}
    //     </div>
    //   </div>
    //   <h2 className='flex-1 text-3xl'>
    //     {pick}. {fullName}
    //   </h2>

    //   <h3 className='flex-1 mb-2 text-2xl'>{position.name}</h3>
    // </div>

    // <div className='card mb-2 rounded-md bg-gray-800 hover:bg-gray-900'>
    //   <div className='card-body items-center text-center'>
    //     <h2 className='card-title'>{fullName}</h2>

    //     <h3 className='mb-2 text-xl font-semibold'>{pick}</h3>
    //     <figure>
    //       {headshot ? (
    //         <img src={headshot.href} alt='headshot' />
    //       ) : (
    //         <img src={defaultHeadshot} alt='headshot' />
    //       )}
    //     </figure>
    //   </div>
    // </div>
  );
}

DraftAthlete.propTypes = {
  athlete: PropTypes.object.isRequired,
  pick: PropTypes.number.isRequired,
};
export default DraftAthlete;
