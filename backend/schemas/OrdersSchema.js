const { Schema } = require("mongoose");

const OrdersSchema = new Schema({
  name: String,
  price: Number,
  percent: Number,
  mode: String,
});

module.exports = { OrdersSchema };
