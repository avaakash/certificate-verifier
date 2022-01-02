// certificate_create_get, certificate_create_post, certificate_list, certificate_verify
const Certificate = require('../models/certificate');
const CertificateTemplate = require('../models/certificateTemplate');


const certificate_create_get = (req, res) => {
    CertificateTemplate.find()
        .then((result) => {
            console.log(result);
            res.render('certificate/createCertificate', {title: "Create Certificate", templates: result});
        })
        .catch((err) => {
            console.log(err)
        });
}


const certificate_create_post = (req, res) => {
    CertificateTemplate.findById(req.body.template)
        .then((result) => {
            console.log(req.body.name, req.body.event, result.organisation);
            const certificate = new Certificate({
                name: req.body.name,
                event: req.body.event,
                organisation: result.organisation
            });

            certificate.save()
                .then((result) => {
                    res.redirect('/certificate');
                })
                .catch((err) => {
                    console.log(err)
                });
        })
        .catch((err) => {
            console.log(err)
        });
}
    

const certificate_list = (req, res) => {
    Certificate.find()
        .then((result) => {
            res.render('certificate/listCertificates', {title: "List Certificates", certificates: result});
        })
        .catch((err) => {
            console.log(err)
        });
}

const certificate_verify_form = (req, res) => {
    res.render('certificate/verifyCertificate', {title: "Verify Certificate"});
}

const certificate_verify = (req, res) => {
    Certificate.findById(req.params.id)
        .then((result) => {
            res.render('certificate/verifiedCertificate', {title: "Certificate Verified", certificate: result});
        })
        .catch((err) => {
            res.render('certificate/unverifiedCertificate', {title: "Certificate Unverified"});
        });
}

module.exports = {certificate_create_get, certificate_create_post, certificate_list, certificate_verify_form, certificate_verify};