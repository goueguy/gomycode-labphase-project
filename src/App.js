
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import LoginModal from "./components/LoginModal";
import RegisterModal from './components/RegisterModal';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}>
        <Route path="login" element={<LoginModal/>} />
        <Route path="register" element={<RegisterModal/>} />
      </Route>
      
    </Routes>
  );
}

export default App;
