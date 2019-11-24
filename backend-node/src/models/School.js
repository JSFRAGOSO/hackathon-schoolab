const {Schema,model} = require('mongoose');

const SchoolSchema = new Schema({
    name:{
        type:String,
        required:true
    }
    ,thumbmail:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    district:String,
    street:String,
    number:Number,
    
    morning:{
        type:Boolean,
        default:false
    },
    evening:{
        type:Boolean,
        default:false
    },
    night:{
        type:Boolean,
        default:false
    },
    extra_curricular:{
        type:Boolean,
        default:false
    },
    kitchen:{
        type:Boolean,
        default:false
    },
    quadra:{
        type:Boolean,
        default:false
    },
    laboratorio:{
        type:Boolean,
        default:false
    },
    biblioteca:{
        type:Boolean,
        default:false
    },
    labciencia:{
        type:Boolean,
        default:false
    },
    likes:[{
        type:Schema.Types.ObjectId,
        ref:'User'
    }],
},{
    timestamps:true   
}
);

module.exports = model('School', SchoolSchema);