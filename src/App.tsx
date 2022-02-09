import React from "react";
import PersistentDrawerLeft from "./components/Drawer";
import { Counter } from "./features/counter/Counter";

function App() {
  return (
    <>
      <PersistentDrawerLeft />
      <Counter />
    </>
  );
}

export default App;
