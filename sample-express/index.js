import express from "express";
import { routeHello, routeAPINames } from "./routes.js";

const server = express();
const port = 3000;

server.get("/hello", function (req, res) {
  res.send("Hello World!");
});

server.get("/api/names", async (req, res) => {
  let response;
  try {
    response = await routeAPINames(req, res);
  } catch (error) {
    console.log(error);
  }
  res.send(response);
});

server.listen(port, function () {
  console.log("Listening on port " + port);
});
