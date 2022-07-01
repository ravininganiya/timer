import React, { useEffect, useState } from "react";

const App = () => {
  const [timer, setTimer] = useState(0);
  const [isCount, setIsCount] = useState(false);
  let interval;
  useEffect(() => {
    if (isCount) {
      interval = setInterval(() => {
        setTimer((prev) => prev + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
    return undefined;
  }, [isCount]);
  console.log(isCount);

  const handleClick = () => {
    setIsCount(true);
  };
  return (
    <div>
      <h1>count timer {timer}</h1>
      <button onClick={() => handleClick()}>click</button>
      <button onClick={() => setIsCount(false)}>stop</button>
    </div>
  );
};
export default App;
