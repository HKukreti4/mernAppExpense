const moment = require("moment");
const transactionModel = require("../models/transactionModel");

const getAllTransections = async (req, res) => {
  try {
    const { frequency, selectedDate, type } = req.body;
    const transections = await transactionModel.find({
      ...(frequency !== "custom"
        ? {
            date: {
              $gt: moment().subtract(Number(frequency), "d").toDate(),
            },
          }
        : {
            date: {
              $gte: selectedDate[0],
              $lte: selectedDate[1],
            },
          }),
      ...(type !== "all" && { type }),
      userid: req.body.userid,
    });
    res.status(200).json(transections);
  } catch (error) {
    res.status(500).json(error);
  }
};
const addTransection = async (req, res) => {
  try {
    let newTransections = new transactionModel(req.body);
    await newTransections.save();
    res.status(201).send("transaction created");
  } catch (error) {
    res.status(500).json(error);
  }
};
const editTransections = async (req, res) => {
  try {
    await transactionModel.findOneAndUpdate(
      {
        _id: req.body.transactionId,
      },
      req.body.payload
    );
    res.status(201).send("transaction updated sucessfully");
  } catch (error) {
    res.status(500).json(error);
  }
};
const deleteTransections = async (req, res) => {
  try {
    await transactionModel.findOneAndDelete({
      _id: req.body.transactionId,
    });
    res.status(201).send("transaction deleted sucessfully");
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getAllTransections,
  addTransection,
  editTransections,
  deleteTransections,
};
