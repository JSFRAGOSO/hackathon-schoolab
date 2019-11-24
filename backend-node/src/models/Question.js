const {Schema,model} = require('mongoose');

const QuestionSchema = new Schema({
    description:{
        type:String,
        required:true
    }
    ,order:Number
},{
    timestamps:true   
}
);

module.exports = model('Question', QuestionSchema);