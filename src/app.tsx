import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h1>Vite + React + Typescript + ESLint + husky + lint-staged</h1>
      </div>
      <div className="card">
        <button onClick={() => setCount(count => count + 1)} type="button">
          count is
          {" "}
          {count}
        </button>
      </div>
    </>
  );
}

export default App;
