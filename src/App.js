import auth0 from "auth0-js";
let l = console.log;

let domain = "dev-1738jh7v.us.auth0.com";
let clientID = "KM5kLRxqPLM5Htrl7kCp2JqbKGFVUwBn";
let redirectUri = "http://localhost:3001";
// let clientsecret = x_ZysnFsKI_h6na2Vlf1DOddD27v63Q2nXvG9BwA44ydCGysu9I7qocVPEEiPYqn

var webAuth = new auth0.WebAuth({
  clientID,
  domain,
  redirectUri,
  responseType: "token id_token",
});

const email = "sebrotracofe-9659@yopmail.com";

const fun = () => {
  webAuth.passwordlessStart(
    // ^ This send the magic link.
    {
      connection: "email",
      send: "code",
      // send: "link",
      email,
    },
    function (err, res) {
      // handle errors or continue
    }
  );

  setTimeout(() => {
    webAuth.passwordlessLogin(
      {
        connection: "email",
        email,
        verificationCode: String(prompt("Enter otp")),
      },
      function (err, res) {
        // handle errors or continue
        l({ err, res });
      }
    );
  }, 8000);
};

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <button
        onClick={() => {
          fun();
        }}
      >
        Send magic link
      </button>
    </div>
  );
}
