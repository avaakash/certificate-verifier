const moongose = require('mongoose');
const Schema = moongose.Schema;

const certificateSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    event: {
        type: String,
    },
    organisation: {
        type: String,
        required: true
    }
});

const Certificate = new moongose.model('Certificate', certificateSchema);

module.exports = Certificate