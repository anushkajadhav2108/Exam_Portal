const express = require('express');
const router = express.Router();
const examController = require("../routes/examController")

router.get('/getExam',examController.getExam);
router.post('/exam',examController.addExam);
router.get('/:id',examController.ExamId);
module.exports = router;