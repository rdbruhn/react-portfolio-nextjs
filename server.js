const express = require("express");
const next = require("next");
const compression = require("compression");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();
    server.use(compression());
    server.get("/post/:id", (req, res) => {
      const actualPage = "/post";
      const queryParams = { title: req.params.id };
      app.render(req, res, actualPage, queryParams);
    });

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(process.env.PORT || 5000, err => {
      if (err) throw err;
      console.log(`> Ready on http://localhost:${process.env.PORT || 5000}`);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
