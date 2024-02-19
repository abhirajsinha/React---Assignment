import React from "react";
import SideBar from "./components/SideBar";
import Form from "./components/Form";

function App() {
  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <SideBar />
      <Form />
    </div>
  );
}

export default App;
