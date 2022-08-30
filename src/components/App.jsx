import React, { useState } from "react";

function App() {
  const [currentTime, getTime] = useState(new Date().toLocaleTimeString());

  function uptadeClock() {
    return getTime(new Date().toLocaleTimeString());
  }

  setInterval(uptadeClock, 1000);

  return (
    <div className="container">
      <h1>{currentTime}</h1>
      <button onClick={uptadeClock}>Get Time</button>
    </div>
  );
}

export default App;
