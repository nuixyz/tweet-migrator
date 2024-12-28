import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <button onClick={() => setCount(count + 1)}>Click me</button>
        </p>
        <p>Count: {count}</p>
      </header>
    </div>
  );
}

export default App;
