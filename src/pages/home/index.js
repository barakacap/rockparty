import './index.scss';
import { useEffect } from 'react';
import smoothscroll from "smoothscroll-polyfill";
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

import TopSection from './sections/top-section/TopSection'

import About from './sections/about/About'
import BackstageSection from './sections/backstage-section/'
import FactsSection from './sections/facts-section/'
import Roadmap from './sections/roadmap/'
import Footer from '../../components/footer/'

window.__forceSmoothScrollPolyfill__ = true;


import Header from '../../components/header/Header'
function App(){

  useEffect(() => {
    smoothscroll.polyfill();
  }, []);

  return (
    <div className="home">
      <Header/>
      <TopSection/>
      <About/>
      <BackstageSection/>
      <FactsSection/>
      <Roadmap/>
      <div className='verified-address'>
        <p className='ffam-lato fs-ms tc-white fw-black' >VERIFIED SMART CONTRACT ADDRESS: </p>

        <a href='https://etherscan.io/address/0x99FE12f25703811d31E1a7A9156d1E56e3F9fcCD' className='ffam-lato fs-ms tc-gold fw-black'>
        0x99FE12f25703811d31E1a7A9156d1E56e3F9fcCD
        </a>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
