import AthleteResults from '../components/athlete/AthleteResults';
import AthleteSearch from '../components/athlete/AthleteSearch';
import Alert from '../components/layout/Alert';
function Home() {
  return (
    <>
      <Alert />
      <AthleteSearch />
      <AthleteResults />
    </>
  );
}
export default Home;
