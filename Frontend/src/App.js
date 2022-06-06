
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Login from './containers/Login';
import Register from './containers/Register';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path='register' element={<Register />} />
        </Routes>
      </div>

    </BrowserRouter>
  );
}

export default App;
