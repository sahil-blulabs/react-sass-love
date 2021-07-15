function proxy(app) {
  // app.get(/^\/$/, (req, res) => res.redirect("/list"));//~by kent c dodds to map `/` route to `/list`.
  app.get("/ama1", (req, res) => res.send("Cool1"));
  app.get("/ama2", (req, res) => res.send("Cool2"));
  app.get("/ama3", (req, res) => res.send("Cool3"));
}

module.exports = proxy;
