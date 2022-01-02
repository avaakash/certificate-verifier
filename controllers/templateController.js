// template_create, template_list
const CertificateTemplate = require('../models/certificateTemplate');

const template_create_get = (req, res) => {
    res.render('template/createTemplate', {title: "Create Template"});
}

const template_create_post = (req, res) => {
    const template = new CertificateTemplate(req.body);

    template.save()
        .then((result) => {
            res.redirect('/');
        })
        .catch((err) => {
            console.log(err)
        });
}

const template_list = (req, res) => {
    CertificateTemplate.find()
        .then((result) => {
            res.render('template/listTemplates', {title: "List Templates", templates: result});
        })
        .catch((err) => {
            console.log(err)
        });
}

module.exports = {template_create_get, template_create_post, template_list};