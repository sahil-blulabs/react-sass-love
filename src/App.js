import logo from "./logo.svg";
import { BrowserRouter, Redirect, Switch, useHistory, useLocation, withRouter } from "react-router-dom";
import "./App.css";
let l = console.log;

function Child() {
  const history = useHistory();
  const location = useLocation(); //always prefer location.pathname instead of history.location.pathname using above `useHistory` hook.
  l({ history });
  return (
    <div className="App">
      <div>Hello world.</div>
      <div>You are @ : {location.pathname}</div>
      <button onClick={() => history.push("/1")}>Go to /1</button>
      <button onClick={() => history.push("/2/0/0")}>Go to /2</button>
      <button onClick={() => history.push("/3")}>Go to /3</button>
      <button onClick={() => history.push("/4//0/1")}>Go to /4</button>
      <button onClick={() => history.goBack()}>Go back</button>
      <button onClick={() => history.goForward()}>Go forward</button>
      <button onClick={() => history.go(-2)}>Go back twice :: history.go(-2)</button>
      <button onClick={() => history.go(2)}>Go forward twice :: history.go(2)</button>
      <button onClick={() => history.go(0)}>history.go(0)</button>
      <div>FYI: What about a history.go(0)? It actually refreshes the page itself and history is kept as it is.</div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Child />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
