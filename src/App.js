
import Home from "./pages/Home";
import { Routes, Route, Link } from "react-router-dom";
import LoginModal from "./components/LoginModal";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}> 
        <Route path="#login" element={<LoginModal/>} />
      </Route>
      
    </Routes>
  );
}

export default App;
