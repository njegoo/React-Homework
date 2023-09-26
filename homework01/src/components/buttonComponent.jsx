// import React from 'react';
import '../css/buttonComponent.css'
export function ButtonComponent() {
  const handleClick = () => {
    alert("Button clicked!");
  };

  return (
    <>
      <h2 id="buttonHeading">Button Component</h2>
      <button onClick={handleClick}>Click me</button>
    </>
  );
}