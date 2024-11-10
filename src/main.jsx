import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.querySelector(".app"));
root.render(
  <>
    <Heading title="One" description="This is some text" />
    <Heading name="Chintu" />
  </>
);

function Heading(props) {
  console.log(props);

  const style = {
    color: "red",
    fontWeight: "normal",
  };
  return (
    <div>
      <h1 style={style}>Hello, byte!</h1>
      <h3 style={{ color: "green" }}>
        Today's date is {new Date().toLocaleDateString()}
      </h3>
    </div>
  );
}
