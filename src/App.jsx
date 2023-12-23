import { Route, Routes } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/NavBar";

import { ComprasPage } from "./pages/ComprasPage";
import { CarritoPage } from "./pages/CarritoPage";


function App() {
  return (
    <>
      <NavBar></NavBar>
      <div className="container">
        <Routes>         
        <Route path="/" element={<ComprasPage></ComprasPage>}></Route>
        <Route path="/carrito" element={<CarritoPage></CarritoPage>}></Route>
      </Routes>
      </div>
      
    </>
  );
}

export default App;
