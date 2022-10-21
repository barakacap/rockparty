import './App.scss';
import { useEffect } from 'react';
import smoothscroll from "smoothscroll-polyfill";
import "react-toastify/dist/ReactToastify.css";

import Home from './pages/home'
import News from './pages/news'

// import TopSection from './sections/top-section-old/TopSection'
import { Routes, Route, Link } from "react-router-dom";

// import Backstage from './pages/backstage'
// import Mint from './pages/mint'

window.__forceSmoothScrollPolyfill__ = true;
function App(){

  useEffect(() => {
    smoothscroll.polyfill();
  }, []);

  return (
    <div className="App">
      {/* <TopSection/> */}
     <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/news" element={<News/>} />

        {/* <Route path="/mint" element={<Mint/>} />
        <Route path="/backstage" element={<Backstage/>} /> */}
      </Routes>
    </div>
  );
}

export default App;
