import React from "react";
import "./App.css";
import { Bar } from "./components/Bar";
import { Grid } from "./components/Grid";
import { InfoModal } from "./components/InfoModal";
import { Keyboard } from "./components/Keyboard";
import { LogsModal } from "./components/LogsModal";

function App() {
  return (
    <div className="flex flex-col items-center">
      <Bar />
      <Grid />
      <Keyboard />
      <InfoModal />
      <LogsModal />
    </div>
  );
}

export default App;
