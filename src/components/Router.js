import Header from '../components/Header';
import SectionImg from '../components/SectionImg';
import SectionArtists from '../components/SectionArtists';
import SectionAbout from '../components/SectionAbout';
import SectionRepairs from '../components/SectionRepairs';
import SectionFooter from '../components/SectionFooter';
import {BrowserRouter, Routes, Route, Outlet} from 'react-router-dom';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Instruments from '../pages/Instruments';
import Grasa from '../pages/Grasa';
import IndioMini from '../pages/IndioMini';
import Ubass from '../pages/Ubass';
import Signature from '../pages/Signature';
import SmoothScroll from '../components/SmoothScroll.js';


export default function Router() {

    const Layout = () => {
    return (
      <>
        <Header/>
        <Outlet/>
        <SectionFooter/>
      </>
    );
  }

  const BrowserRoutes = () => {
    return (
      <div className='main-container'>
        <BrowserRouter>
        <SmoothScroll>
        <Routes>
            <Route path="/" element={<Layout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/instruments" element={<Instruments/>}/>
            <Route path="/instruments/grasadepez" element={<Grasa/>}/>
            <Route path="/instruments/ismini" element={<IndioMini/>}/>
            <Route path="/instruments/ubass" element={<Ubass/>}/>
            <Route path="/instruments/signature" element={<Signature/>}/>
            <Route path="/contact" element={<Contact/>}/>
            </Route>
          </Routes>
          </SmoothScroll>
        </BrowserRouter>
      </div>
    );
  }

  return (
    <BrowserRoutes/>
  );
}