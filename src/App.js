import "./App.css";
import { useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Backpack from "./components/Backpack";
import VendingMachine from "./components/VendingMachine";

import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  const [mySnacks, setMySnacks] = useState([]);
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar snacksNum={mySnacks.length} />
        <Routes>
          <Route
            exact
            path="/vend"
            element={<VendingMachine onSelect={setMySnacks} />}
          />
          <Route
            exact
            path="/backpack"
            element={<Backpack mySnacks={mySnacks} eatSnack={setMySnacks} />}
          />
          <Route path="*" element={<Navigate to="/vend" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
