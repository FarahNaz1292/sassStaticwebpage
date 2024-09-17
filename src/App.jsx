import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.scss";
import Herosection from "./Components/Herosection";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Herosection></Herosection>}></Route>
      </Routes>
    </>
  );
}

export default App;
