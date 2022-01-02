const express = require('express');
const controller = require('../controllers/templateController');

const router = express.Router();

router.get('/', (req, res) => {
    controller.template_list(req, res);
});

router.get('/create', (req, res) => {
    controller.template_create_get(req, res);
});

router.post('/create', (req, res) => {
    controller.template_create_post(req, res);
});

module.exports = router;