import * as http from "http";
import app from "./app";
import { mongoConfig } from "./config";

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const port = Number(process.env.PORT) || 3000;
app.set("port", port);

const server = http.createServer(app);

const mongoOptions = {
  useNewUrlParser: true
};
mongoose.set("useFindAndModify", false);
mongoose
  .connect(mongoUri, mongoOptions)
  .then(() => {
    console.log("Succesfully connected with MongoDB.");
    server.listen(port, () => {
      let addr = server.address();
      let bind =
        typeof addr === "string" ? `pipe ${addr}` : `port ${addr.port}`;
      console.log(`Listening on ${bind}`);
    });
  })
  .catch(err => {
    console.log("Not able to connect with MongoDB:", err);
  });
