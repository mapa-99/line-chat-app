import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Chat from "./containers/Chat";
import InitForm from "./containers/InitForm";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/form" element={<InitForm />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
