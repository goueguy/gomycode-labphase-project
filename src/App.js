
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import LoginModal from "./components/LoginModal";
import RegisterModal from './components/RegisterModal';
import ResetPasswordModal from './components/ResetPasswordModal';
function App() {
  return (
    <Routes>
        <Route path="/" element={<Home/>}>
        <Route path="login" element={<LoginModal/>} />
        <Route path="register" element={<RegisterModal/>} />
        <Route path="password-reset" element={<ResetPasswordModal/>} />
      </Route>
      
    </Routes>
  );
}

export default App;
