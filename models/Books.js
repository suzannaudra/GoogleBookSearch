var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var BookSchema = new Schema({
    title: { type: String, required: true },
    subtitle: { type: String },
    authors: { type: [String], required: true },
    description: { type: String, required: true },
    thumbnail: { type: String, required: true },
  });


// This creates our model from the above schema, using mongoose's model method
var Books = mongoose.model("Books", BookSchema);

// Export the Article model
module.exports = Books;
