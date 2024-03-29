import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Athlete from './pages/Athlete';
import Error from './pages/Error';
import { AthleteProvider } from './context/athlete/AthleteContext';
import { AlertProvider } from './context/alert/AlertContext';

function App() {
  return (
    <AthleteProvider>
      <AlertProvider>
        <Router>
          <div className='flex flex-col justify-between min-h-screen bg-cover bg-gray-100'>
            <NavBar />
            <main className='container mx-auto px-3 pb-12 '>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/athlete/:id' element={<Athlete />} />
                <Route path='/error' element={<Error />} />
                <Route path='/*' element={<Error />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </AlertProvider>
    </AthleteProvider>
  );
}

export default App;
