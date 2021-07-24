import {
  Link,
  BrowserRouter,
  Switch,
  Redirect,
  Route,
  useHistory,
} from "react-router-dom";
import { forwardRef } from "react";

const s = "cars";

const Place = () => <div>I am place component.</div>;
const Eifel = () => <div>I am eifel tower.</div>;

const FancyLinkS = (props) => {
  const history = useHistory();
  return (
    <div onClick={() => history.push(props.href)}>Go to /{props.children}</div>
  );
};

const FancyLink = (props, ref) => {
  const history = useHistory();
  // FYI: Giving ref={ref}  in below span seems unnecessary to me coz it work withou it too.
  return (
    <div onClick={() => history.push(props.href)} ref={ref}>
      Go to /{props.children}
    </div>
  );
};

const FancyLinkF = forwardRef(FancyLink); // This is how its guided in react-router-dom documentation.

export default function App() {
  return (
    <BrowserRouter>
      I am cars. <br />
      <Link to="/" component={FancyLinkS} children={<span>Home</span>} />
      <Link
        to="/"
        component={FancyLinkF}
        children={
          <span>
            Home with forwarded ref. IDK what is it good for though :D
          </span>
        }
      />
      <a href="/">
        Go to /Home with anchor tag ::FYI::CAUSES UNNECESSARY PAGE RELOAD
        THOUGH. <br />
      </a>
      <Link to="/p" children="Go to /p" /> <br />
      <Link to="/paris/tower" children="Go to /paris/tower" /> <br />
      <Switch>
        <Redirect from="/p" to="/place" />
        <Redirect from="/paris/tower" to="/eifel" />
        <Route path="/place" component={Place} />
        <Route path="/eifel" component={Eifel} />
      </Switch>
    </BrowserRouter>
  );
}
