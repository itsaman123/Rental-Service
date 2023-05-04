const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  sdate: { 
    type: String, 
    required: true,
    default:Date.now()
},
  stime: { 
    type: Date, 
    required: true 
},
  edate: { 
    type: Date, 
    required: true
 },
  etime: { 
    type: Date, 
    required: true 
},
  file: { 
    type: String, 
    required: true },
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
