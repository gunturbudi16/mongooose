const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const useRouter = require("./routes/user");
const addressRouter = require("./routes/adress");

const db = require("./confiq/db");
const { PORT } = require("./confiq/variableEnv");

const app = express();
const port = PORT || 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

if (db) {
  console.log("server connected to d");
} else {
  console.log({ message: "error connect", error });
}
db.then(() => {
  console.log("connect");
}).catch(error => {
  console.log("error cuyy", error);
});

app.use("/user", useRouter);
app.use("/address", addressRouter);

app.listen(port, () => {
  console.log(`Example Listening in ${port}`);
});
