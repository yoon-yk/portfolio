var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var endorsementSchema = new Schema({
    name : String,
    title: String,
    relationship : String,
    content: String,
    regdate: { type: Date, default: Date.now}
});

module.exports = mongoose.model('endorsement', endorsementSchema);