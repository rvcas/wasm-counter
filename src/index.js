import React, {useState, useEffect} from "react";
import {render} from "react-dom";
import {add} from '../wasm/add.wasm';

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(currentCount => add(currentCount, 1));
    }, 1000);

    return () => clearInterval(interval);
  }, [setCount]);


  return (
    <div>
      {count}
    </div>
  );
}

render(
  <Counter />,
  document.getElementById("root"),
);
