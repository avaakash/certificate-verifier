const moongose = require('mongoose');
const Schema = moongose.Schema;

const certificateTemplateSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    organisation: {
        type: String,
        required: true
    },
    template: {
        data: Buffer,
        contentType: String,
    }
});

const CertificateTemplate = new moongose.model('CertificateTemplate', certificateTemplateSchema);

module.exports = CertificateTemplate