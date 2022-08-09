/* eslint-disable  */
const { connect, disconnect} = require("mongoose");
require("dotenv/config");

const mongoURL = process.env.MONGO_URL;


class Database {
  constructor() {
    this._connect();
  }

  _connect() {
    connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true })
      .then(() => {
        console.log("Database connection successful");
      })
      .catch((err) => {
        console.error("Database connection error", err);
      });
  }
  _disconnect() {
    disconnect()
      .then(() => {
        console.log("Database disconnection successful");
      })
      .catch((err) => {
        console.error("Database disconnection error", err.message);
      });
  }
}

export default new Database();


