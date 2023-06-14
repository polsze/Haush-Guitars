import Header from "../components/Header";
import SectionFooter from "../components/SectionFooter";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Contact from "../pages/Contact";
import About from "../pages/About";
import Home from "../pages/Home";
import Instruments from "../pages/Instruments";
import Grasa from "../pages/Grasa";
import IndioMini from "../pages/IndioMini";
import Ubass from "../pages/Ubass";
import Signature from "../pages/Signature";
import SmoothScroll from "../components/SmoothScroll.js";




export default function Router() {
  const Layout = () => {
    return (

      <>
        <Header />
        <Outlet />
        <SectionFooter />
      </>
    );
  };

  const BrowserRoutes = () => {
    return (
      <div className="main-container">
        <BrowserRouter>
          <SmoothScroll>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/instrumentos" element={<Instruments />} />
                <Route path="/instrumentos/grasadepez" element={<Grasa />} />
                <Route path="/instrumentos/ismini" element={<IndioMini />} />
                <Route path="/instrumentos/ubass" element={<Ubass />} />
                <Route path="/instrumentos/baltasarcomotto" element={<Signature />} />
                <Route path="/contacto" element={<Contact />} />
                <Route path="/sobrenosotros" element={<About />} />
              </Route>
            </Routes>
          </SmoothScroll>
        </BrowserRouter>
      </div>
    );
  };

  return <BrowserRoutes />;
}