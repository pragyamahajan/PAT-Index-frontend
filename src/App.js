import './App.css';
import Login from './Login';
import Register from './register';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="Register" element={<Register/>}/>
        </Routes>
      </BrowserRouter>
  );
}
export default App;
