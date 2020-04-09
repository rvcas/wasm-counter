import React, {useState, useEffect} from "react";
import {render} from "react-dom";
import {add, fib} from '../wasm/lib.wasm';

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(currentCount => add(currentCount, 1));
    }, 1000);

    return () => clearInterval(interval);
  }, [setCount]);

  useEffect(() => {
    if (count >= 46) {
      setCount(0);
    }
  }, [count, setCount])


  return (
    <div>
      fib({count}) = {fib(count)}
    </div>
  );
}

render(
  <Counter />,
  document.getElementById("root"),
);
