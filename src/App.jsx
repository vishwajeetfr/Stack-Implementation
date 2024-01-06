import React, { useState } from "react";
import "./App.css";

function App() {
  const [dataIn, setData] = useState("");
  const [arr, setArr] = useState([]);

  const handleChange = (e) => {
    console.log(e.target.value);
    setData(e.target.value);
  };

  const handleClick = () => {
    if (isNaN(dataIn) || dataIn === "") {
      alert("Write a number!");
    } else {
      setArr([...arr, { id: arr.length + 1, data: parseInt(dataIn, 10) || 0 }]);
      setData("");
    }
  };

  const handleClick2 = () => {
    setArr(arr.slice(0, arr.length - 1));
  };

  return (
    <div>
      <h1 className="title">Vishwajeet Implements STACK</h1>
      <div className="square-container">
        {arr.map((a) => (
          <div key={a.id} className="square">
            {a.data}
            <br />
            {a.id === arr.length ? "TOP" : ""}
          </div>
        ))}
      </div>
      <br />
      <br />
      <input type="text" value={dataIn} onChange={handleChange} />
      <br />
      <button onClick={handleClick}>PUSH</button>
      <br />
      <br />
      <br />
      <button onClick={handleClick2}>POP</button>
    </div>
  );
}

export default App;
