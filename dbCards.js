//This is a schema

import mongoose from "mongoose";

//Outlines the structure of how the database is going to be build
const cardSchema = mongoose.Schema({
  name: String,
  imgUrl: String,
});
export default mongoose.model("cards", cardSchema);
