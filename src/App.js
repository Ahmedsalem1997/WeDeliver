import Wrapper from "./context/Wrapper/Wrapper";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import DriveToOwn from "./pages/DriveToOwn";
import { VehiclesProvider } from "./context/vehicles/VehiclesContext";

function App() {
  return (
    <BrowserRouter>
      <Wrapper>
        <VehiclesProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/DriveToOwn" element={<DriveToOwn />} />
          </Routes>
        </VehiclesProvider>
      </Wrapper>
    </BrowserRouter>
  )
}

export default App;
