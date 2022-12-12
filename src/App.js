import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import { AthleteProvider } from './context/AthleteContext';

function App() {
  return (
    <AthleteProvider>
      <Router>
        <div className='flex flex-col justify-between h-screen'>
          <NavBar />
          <main className='container mx-auto px-3 pb-12'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/error' element={<Error />} />
              <Route path='/*' element={<Error />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AthleteProvider>
  );
}

export default App;
