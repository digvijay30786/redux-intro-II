import "./styles.css";
import React, { useState } from "react";
import { Store } from "./store/store.js";
import {
  addCount,
  removeCount,
  reset,
  add,
  sub,
  Multiply,
  divide
} from "./store/action.js";
export default function App() {
  const [v, setv] = useState(0);
  const [change, setChange] = useState(0);
  const handleChange = (e) => {
    setChange(e.target.value);
  };
  return (
    <div className="App">
      <h1>Final value:{Store.getState().count}</h1>

      <button
        onClick={() => {
          Store.dispatch(addCount(1));
          setv((prev) => prev + 1);
        }}
      >
        Increment
      </button>

      <button
        onClick={() => {
          if (v > 0) {
            Store.dispatch(removeCount(1));
            setv((prev) => prev - 1);
          }
        }}
      >
        Decrement
      </button>

      <button
        onClick={() => {
          Store.dispatch(reset());
          setv((prev) => 0);
        }}
      >
        Reset
      </button>

      <div className="inputValue">
        <label htmlfor="value">Value </label>
        <input
          type="number"
          onChange={handleChange}
          placeholder="Enter Valid Value"
        />
        <button
          onClick={() => {
            Store.dispatch(add(change));
            setv((prev) => prev + 1);
          }}
        >
          Add
        </button>

        <button
          onClick={() => {
            Store.dispatch(sub(change));
            setv((prev) => prev + 1);
          }}
        >
          Sub
        </button>

        <button
          onClick={() => {
            Store.dispatch(Multiply(change));
            setv((prev) => prev + 1);
          }}
        >
          Multiply
        </button>

        <button
          onClick={() => {
            Store.dispatch(divide(change));
            setv((prev) => prev + 1);
          }}
        >
          Divide
        </button>
      </div>
    </div>
  );
}
