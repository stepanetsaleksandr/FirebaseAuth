import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Reset from "./components/Auth/Reset";
import Dashboard from "./components/Auth/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/reset' element={<Reset />} />
        <Route exact path='/dashboard' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
