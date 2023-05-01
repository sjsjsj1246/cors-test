const express = require("express");
const cors = require("cors");
const app = express();
const port = 8080;

app.get("/", (req, res) => res.send("Hello World!"));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.get("/cors-test", (req, res) => res.send("Hello World!"));
app.delete("/cors-test", (req, res) => res.send("Hello World!"));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
