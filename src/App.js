import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Accordian from './components/Accordion';
import RandomColor from './components/radom-color-generator';
import Home from './home';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename='react-projects/'>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/acordian' element={<Accordian />} />
          <Route path='/randomColor' element={<RandomColor />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
