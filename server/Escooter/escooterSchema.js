const mongoose = require("mongoose");


const EscooterSchema = mongoose.Schema(
  {
    latitude: {
      type: String,
      required: true,
    }, 
    longitude: {
      type: String,
      require: true,
      unique: true,
    },
    Brand: {
      type: String,
      require: true,
    }
  },
  {
    timeTamps: true,
  }
);

module.exports = mongoose.model("Escooter",EscooterSchema);
