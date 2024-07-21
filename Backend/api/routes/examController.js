const view_model = require("./view_model");
const examCardSchema = require("./view_model");
const mongoose= require("mongoose");

// Function to get an exam
exports.getExam = (req, res, next) => {
    view_model.find({})
    .select("courseName topicName examType totalQuestions startDate")
    .exec()
    .then(result => {
        const response ={
            count: result.length,
            exam: result.map(result => {
                return{
                    courseName: result.courseName,
                    topicName: result.topicName,
                    examType: result.examType,
                    totalQuestions:result.totalQuestions,
                    startDate:result.startDate,
                    _id: result._id,
                    request:{
                        type:"GET",
                        url: "http://localhost:3000/e/"+result._id
                    }
                };

            })
        };
        res.status(200).json(response)
    })
   .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    })
};

exports.addExam = (req, res, next) => {
    const exam = new view_model({
        _id:  new mongoose.Types.ObjectId(),
        courseName: req.body.courseName,
        topicName:req.body.topicName,
        examType: req.body.examType,
        totalQuestions: req.body.totalQuestions,
        startDate: req.body.startDate,
    });
    exam
    .save()
    .then(doc => {
        console.log(doc);
        res.status(201).json({
        msg: 'Created product successfully...',
        createdProduct: {
            courseName: doc.courseName,
            topicName:doc.totalQuestions,
            examType:doc.examType,
            totalQuestions:doc.totalQuestions,
            startDate:doc.startDate,
            _id:doc._id,
            request:{
                type:'GET',
                url: "http://localhost:3000/e/" +doc._id
            }
        } //product
      });             
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error: err
        });
    });                                                                           
};


exports.ExamId = (req, res, next) =>{
    const id = req.params.id;
    view_model.findById(id)
    .select('courseName topicName examType totalQuestions startDate')
    .exec()
    .then(result => {
        console.log("From database",result);
        if(result){
        res.status(200).json({
            product: result,
            request:{
                type: 'GET',
                description: 'Get all products',
                url: "http://localhost:3000/e" 
            }
        });
        }else{
        res.status(404).json({msg: 'No valid entry found for provided ID'});
        }
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: err});
    });
};
