import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Accordian from './components/Accordion/index.jsx';
import RandomColor from './components/random-color-generator/index.jsx';
import Home from './home.jsx';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/acordian" element={<Accordian />} />
          <Route path="/randomcolor" element={<RandomColor />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
