const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => { res.render('index', {title: 'Keith Misael Tovar'})});

router.get('/about', (req, res) => {res.render('about', {title: 'About'})});

router.get('/resume', (req, res) => {res.render('resume', {title: 'Resume'})});

router.get('/contact', (req, res) => {res.render('contact', {title: 'Contact'})});

router.get('/projects',(req, res) => {res.render('projects', {title: 'Projects'})});

module.exports = router;
