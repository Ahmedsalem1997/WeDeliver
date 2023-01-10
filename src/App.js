import Wrapper from "./components/Wrapper/Wrapper";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home"

function App() {
  return (
    <BrowserRouter>
    <Wrapper>
      <Routes>
      <Route path="/" element={<Home />} />
      </Routes>
    </Wrapper>
    </BrowserRouter>
  )
}

export default App;
