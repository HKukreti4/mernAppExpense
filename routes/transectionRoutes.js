const express = require("express");
const {
  addTransection,
  getAllTransections,
  editTransections,
  deleteTransections,
} = require("../controllers/transectionCtrl");

const routes = express.Router();

//routes
routes.post("/add-transaction", addTransection);
routes.post("/get-transaction", getAllTransections);
routes.post("/edit-transaction", editTransections);
routes.post("/delete-transaction", deleteTransections);
module.exports = routes;
