import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import defaultHeadshot from '../components/layout/assets/headshot.png';
import Spinner from '../components/layout/Spinner';
import DraftList from '../components/draft/DraftList';
import DraftStats from '../components/draft/DraftStats';
import AthleteContext from '../context/athlete/AthleteContext';
import { getAthleteAndDraft } from '../context/athlete/AthleteActions';

function Athlete() {
  const params = useParams();

  const { athlete, draftAthletes, loading, dispatch } =
    useContext(AthleteContext);

  const { fullName, headshot, position, active } = athlete;

  const selection = draftAthletes.length - 1;

  useEffect(() => {
    dispatch({ type: 'SET_LOADING' });

    const getAthleteData = async () => {
      const athleteData = await getAthleteAndDraft(params.id);
      console.log(athleteData);
      dispatch({ type: 'GET_ATHLETE_AND_DRAFT', payload: athleteData });
    };

    getAthleteData();
  }, []);

  if (loading) {
    return <Spinner />;
  }
  return (
    <>
      <div className='w-full mx-auto lg:w-10/12'>
        <div className='mb-4'>
          <Link to='/' className='btn btn-ghost'>
            Back to Search
          </Link>
        </div>
        <div className='grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8'>
          <div className='mb-6 md:mb-0'>
            <div className='rounded-lg shadow-xl image-full bg-white'>
              {headshot ? (
                <figure>
                  <img src={headshot.href} alt={fullName} />
                </figure>
              ) : (
                <img src={defaultHeadshot} alt={fullName} />
              )}
            </div>
          </div>
          <div className='col-span-2'>
            <div className='mb-6'>
              <h1 className='text-3xl card-title'>
                {fullName}
                {athlete.draft && (
                  <div className='ml-2 mr-1 w-16 badge badge-info'>
                    {athlete.draft.year}
                  </div>
                )}
                {active ? (
                  <div className='mr-1 w-16 badge badge-success'>Active</div>
                ) : (
                  <div className='ml-2 mr-1 w-24 badge badge-error'>
                    Not Active
                  </div>
                )}
              </h1>
              {position && (
                <h2 className='text-2xl mt-2'>{position.displayName}</h2>
              )}

              <div className=' mt-6'>
                {athlete.draft ? (
                  <DraftStats
                    pick={draftAthletes[selection].pick}
                    team={draftAthletes[selection].team}
                  />
                ) : (
                  <h2 className='text-xl'>Undrafted</h2>
                )}
              </div>
            </div>
          </div>
        </div>
        {athlete.draft && (
          <DraftList
            draftAthletes={draftAthletes}
            position={position.name}
            year={athlete.draft.year}
          />
        )}
      </div>
    </>
  );
}
export default Athlete;
