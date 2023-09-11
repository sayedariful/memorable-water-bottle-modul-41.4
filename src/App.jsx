import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Bottles from "./components/Bottles/Bottles";

function App() {
  return (
    <div>
      <Header></Header>
      <Bottles></Bottles>
    </div>
  );
}

export default App;
