const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const newschema = new Schema({
  firstname: {
    type: String,
    require: true
  },
  lastname: {
    type: String,
    require: false
  },
  email: {
    type: String,
    require: false
  },
  feedback: {
    type: String,
    require: true
  }

});

const NewSchema = mongoose.model('feedbackenglish', newschema);
module.exports = {NewSchema};