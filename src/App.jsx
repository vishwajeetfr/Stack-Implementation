import React, { useState } from "react";
import "./App.css";

function App() {
  const [dataIn, setData] = useState("");
  const [arr, setArr] = useState([]);

  const handleChange = (e) => {
    setData(e.target.value);
  };

  const handleClick = () => {
    if (isNaN(dataIn) || dataIn === "") {
      alert("Write a number!");
    } else {
      setArr([{ id: arr.length + 1, data: parseInt(dataIn, 10) || 0 }, ...arr]);
      setData("");
    }
  };

  const handleClick2 = () => {
    setArr(arr.slice(0, arr.length - 1));
  };

  return (
    <div>
      <h1 className="title">STACK VIRTUALIZATION</h1>
      <div>
        <input
          className="inputTop"
          type="text"
          value={dataIn}
          onChange={handleChange}
        />
        <br />
        <button className="btn" onClick={handleClick}>
          PUSH
        </button>
        <br />
        <br />
        <button className="btn" onClick={handleClick2}>
          POP
        </button>
      </div>
      <div className="square-container">
        {arr.map((a, index) => (
          <div key={a.id} className="square">
            {a.data}
            <br />
            {index === 0 ? "TOP" : ""}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
