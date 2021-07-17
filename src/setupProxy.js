const axios = require("axios");
// NOTE: All below setup only works in development only, src: https://create-react-app.dev/docs/proxying-api-requests-in-development/

function proxy(app) {
  app.get(/^\/$/, (req, res) => res.redirect("/list")); //~by kent c dodds to map `/` route to `/list`.
  app.get("/ama1", async (req, res) => {
    const { data } = await axios({
      method: "get",
      url: "https://loveapi.ml/numbersapi/1/trivia",
    });

    // console.log("Data from api::", data);

    res.send(data);
  });
  app.get("/ama2", (req, res) => res.send("Cool2"));
  app.get("/ama3", (req, res) => res.send("Cool3"));
}

module.exports = proxy;
