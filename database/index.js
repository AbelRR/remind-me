const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/twilio");

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("we're connected!")
});

var AppointmentSchema = new mongoose.Schema({
  name:String,
  phoneNumber: String,
  notification: Number,
  timeZone: String,
  time: {type: Date, index: true}
});


