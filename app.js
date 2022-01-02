// Loading required libraries
const express = require('express');
const config = require('./config');
const mongoose = require('mongoose');
const multer = require('multer');
const certificateTemplateRoutes = require('./routes/certificateTemplateRoutes');
const certificateRoutes = require('./routes/certificateRoutes');

const app = express();

// Setting up multer to storing images
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now())
    }
});

const upload = multer({ storage: storage });

// Connecting to mongoDb and starting server
mongoose.connect(config.dbURI)
    .then((result) => {
        app.listen(config.port, config.host)
        console.log("Listening on port " + config.port);
    })
    .catch((err) => console.log(err));

// Setting up the initial middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));

// Setting up view engine as ejs
app.set('view engine', 'ejs');


// URL routes
app.get('/', (req, res) => {
    res.render('index', { title: "Home" });
});

app.use('/template', certificateTemplateRoutes);

app.use('/certificate', certificateRoutes);
