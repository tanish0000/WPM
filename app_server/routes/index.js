var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');
var ctrlNotes = require('../controllers/notes');
var ctrlPrev = require('../controllers/prev');
var ctrlLab = require('../controllers/lab');
var ctrlSyll = require('../controllers/syllabus');

router.get('/', ctrlMain.home);
router.get('/syllabus', ctrlSyll.syll);
router.get('/notes', ctrlNotes.note);
router.get('/prevques', ctrlPrev.ques);
router.get('/wpmlab', ctrlLab.wpmlab);

module.exports = router;
