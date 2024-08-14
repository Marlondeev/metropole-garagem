import express from "express";
import bodyParser from "body-parser";
import vehiclesRouter from "./routes/vehicles";

const app = express();

app.use(bodyParser.json());
app.use("/vehicles", vehiclesRouter);

app.listen(3001, () => {
  console.log("API is running on port 3001");
});
