import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route index element={<Home />}/>
          <Route path='/projects' element={<Projects />} />
          <Route path='/contacts' element={<Home />} />
          <Route path='/about' element={<Home />} />
          <Route path='*' element={<Projects />} />
        </Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
