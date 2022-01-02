const express = require('express');
const controller = require('../controllers/certificateController');

const router = express.Router();

router.get('', (req, res) => {
    controller.certificate_list(req, res);
});

router.get('/create', (req, res) => {
    controller.certificate_create_get(req, res);
});

router.post('/create', (req, res) => {
    controller.certificate_create_post(req, res);
});

router.get('/verify', (req, res) => {
    controller.certificate_verify_form(req, res);
});

router.get('/verify/:id', (req, res) => {
    controller.certificate_verify(req, res);
});

module.exports = router