// importing modules
const express = require("express");
const app = express();
const path = require("path");
const cors = require("cors");
const connectDb = require("./config/config");
const userRoutes = require("./routes/userRoute");
const transectionRoute = require("./routes/transectionRoutes");
const dotenv = require("dotenv");
const dirpath = path.join(__dirname, "client/build");
//cors issue resolving
dotenv.config();
app.use(express.json());
app.use(cors());

//database connection
connectDb();
//  routes
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/transactions", transectionRoute);

//stactic files

app.use(express.static(dirpath));
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
} else {
  app.use(express.static("client/"));
}

app.get("/", (req, resp) => {
  resp.render(`${dirpath}/index.html`);
});
// creating server
app.listen(process.env.PORT || 5000, () => {
  console.log("server created sucessfully");
});
