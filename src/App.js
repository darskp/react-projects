import {BrowserRouter, Route, Routes} from "react-router-dom";
import Accordian from "./components/Accordion/index.jsx";
import RandomColor from "./components/random-color-generator/index.jsx";
import Home from "./home.jsx";
import StarRating from "./components/star-rating/star-rating.jsx";

function App() {
  return (
    <div>
      <BrowserRouter basename="/react-projects">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/acordian" element={<Accordian />} />
          <Route path="/randomcolor" element={<RandomColor />} />
          <Route path="/starrating" element={<StarRating />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
