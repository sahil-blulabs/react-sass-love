let l = console.log;

const history = (path) => window.history.pushState("", "", path);

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>

      <div>
        <button
          onClick={() => {
            window.location.href = "/ama1";
          }}
        >
          Click me to go to /ama1
        </button>
      </div>
    </div>
  );
}
