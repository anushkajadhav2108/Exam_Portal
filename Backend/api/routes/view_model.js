const mongoose = require('mongoose');

const examCardSchema = new mongoose.Schema({
    courseName: {
        type: String,
        required: true
    },
    topicName: {
        type: String,
        required: true
    },
    examType: {
        type: String,
        required: true
    },
    totalQuestions: {
        type: Number,
        required: true
    },
    startDate: {
        type: Date,
        required: true
    }
});

module.exports = mongoose.model('ExamCard', examCardSchema);
