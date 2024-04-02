import React from "react";
import counterStore from "../../stores/counter-store";
import { observer } from "mobx-react-lite";

export const Counter = observer(() => {
  const { counter, increment, decrement } = counterStore;
  return (
    <div>
      <button onClick={() => increment(1)}>+</button>
      <span>{counter}</span>
      <button onClick={() => decrement(1)}>-</button>
    </div>
  );
});
