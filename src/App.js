import Wrapper from "./components/Wrapper/Wrapper";
import { Routes, Route, BrowserRouter } from "react-router-dom";
// import Home from "./pages/Home";
import DriveToOwn from "./pages/DriveToOwn";

function App() {
  return (
    <BrowserRouter>
    <Wrapper>
      <Routes>
      <Route path="/" element={<DriveToOwn />} />
      </Routes>
    </Wrapper>
    </BrowserRouter>
  )
}

export default App;
