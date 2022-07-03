var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var endorsementSchema = new Schema({ // Model Schema 
    name : { type : String, required: true},
    title: { type : String, required: true},
    content: { type : String, required : true},
    regdate: { type: Date, default: Date.now}
});

module.exports = mongoose.model('endorsement', endorsementSchema); // Export Model 