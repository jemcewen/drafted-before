import spinner from './assets/spinner.gif';

function Spinner() {
  return (
    <div className='w-100'>
      <img
        src={spinner}
        width={200}
        className='text-center mx-auto'
        alt='Loading...'
      />
    </div>
  );
}
export default Spinner;
