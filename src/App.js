import logo from './logo.svg';
import './App.css';
import NotFound from "./Routes/NotFound";
import Details from "./Routes/Details";
import Home from "./Routes/Home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
