import Wrapper from "./context/Wrapper/Wrapper";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import DriveToOwn from "./pages/DriveToOwn";
import SingleVehicle from "./pages/SingleVehicle";
import ScrollToTop from "./components/ScrollToTop";
import NotFound from "./pages/NotFound";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Wrapper>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/about" element={<About />} />
          <Route path="/single-vehicle/:id" element={<SingleVehicle />} />
          <Route path="/drive-to-own" element={<DriveToOwn />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Wrapper>
    </Router>
  );
}

export default App;
