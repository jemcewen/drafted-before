import { useState, useContext } from 'react';
import AthleteContext from '../../context/athlete/AthleteContext';
import AlertContext from '../../context/alert/AlertContext';
import { searchAthletes } from '../../context/athlete/AthleteActions';

function AthleteSearch() {
  const [text, setText] = useState('');
  const { athletes, dispatch } = useContext(AthleteContext);

  const { setAlert } = useContext(AlertContext);

  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (text === '') {
      setAlert('Please enter some text to search for a player', 'error');
    } else {
      dispatch({ type: 'SET_LOADING' });
      const athletes = await searchAthletes(text);
      dispatch({ type: 'SEARCH_ATHLETES', payload: athletes });
      setText('');
    }
  };

  return (
    <div className='grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8'>
      <div>
        <form onSubmit={handleSubmit}>
          <div className='form-control'>
            <div className='relative'>
              <input
                type='text'
                className='w-full pr-40 bg-gray-200 input input-lg text-black'
                placeholder='Search'
                value={text}
                onChange={handleChange}
              />
              <button
                type='submit'
                className='absolute top-0 right-0 rounded-l-none w-36 btn btn-lg'
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      {athletes.length > 0 && (
        <div>
          <button
            className='btn btn-ghost btn-lg'
            onClick={() => dispatch({ type: 'CLEAR_ATHLETES' })}
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );
}
export default AthleteSearch;
