import {BrowserRouter, Route, Routes} from "react-router-dom";
import Accordian from "./components/1. Accordion/index.jsx";
import RandomColor from "./components/2. random-color-generator/index.jsx";
import Home from "./home.jsx";
import StarRating from "./components/3. star-rating/star-rating.jsx";
import Imageslider from "./components/4. image-slider/Imageslider.jsx";
import LoadMoreBtn from "./components/5. load-more-btn/loadmorebtn.jsx";
import Treeview from "./components/6. tree-view-menu/treeview.jsx";
import QrCode from "./components/7. qr-code-generator/qr.jsx";
import Darktheme from "./components/8. darktheme/darktheme.jsx";
import ScrollBar from "./components/9. scroll indicator/index.jsx";

function App() {
  return (
    <div>
      <BrowserRouter basename="/react-projects">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/acordian" element={<Accordian />} />
          <Route path="/randomcolor" element={<RandomColor />} />
          <Route path="/starrating" element={<StarRating />} />
          <Route path="/imageslider" element={<Imageslider />} />
          <Route path="/loadmoreBtn" element={<LoadMoreBtn />} />
          <Route path="/treeview/*" element={<Treeview />} />
          <Route path="/qrcode" element={<QrCode />} />
          <Route path="/darktheme" element={<Darktheme />} />
          <Route path="/scrollindicator" element={<ScrollBar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
