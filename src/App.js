let l = console.log;

const history = (path) => window.history.pushState("", "", path);

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>

      <div>
        <button
          onClick={() => {
            history("/ama1");
          }}
        >
          Click me to go to /ama1
        </button>
        <br />
        <button
          onClick={() => {
            history("/");
          }}
        >
          Click me to go to /
        </button>
      </div>
    </div>
  );
}
