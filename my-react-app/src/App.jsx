import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './scenes/navbar';
import Home from './scenes/Home';
import './App.css'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
