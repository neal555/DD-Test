import React from "react";
import "./App.css";
import { Bar } from "./components/Bar";
import { Grid } from "./components/Grid";
import { InfoModal } from "./components/InfoModal";

function App() {
  return (
    <div className="flex flex-col items-center">
      <Bar />
      <InfoModal />
      <Grid />
    </div>
  );
}

export default App;
