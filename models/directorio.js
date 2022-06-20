"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const direcSchema = Schema({
  id: Number,
  nombre: String,
  edad: Number,
});

mongoose.model("Directorio", direcSchema);
