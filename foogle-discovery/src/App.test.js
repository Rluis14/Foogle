import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import ImageGrid from './components/ImageGrid';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <MainContent />
        <ImageGrid />
      </div>
    </Router>
  );
}

export default App;