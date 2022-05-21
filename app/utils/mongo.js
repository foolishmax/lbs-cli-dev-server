"use strict";

const Mongodb = require("@pick-star/cli-mongodb");
const { mongodbDBName, mongodbUrl } = require("../../config/db.js");

function mongo() {
  return new Mongodb(mongodbUrl, mongodbDBName);
}

module.exports = mongo;
