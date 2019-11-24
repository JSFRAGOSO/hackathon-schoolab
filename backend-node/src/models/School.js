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
    district:{
        type:String,
        required:true
    },
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
    lab_informatica:{
        type:Boolean,
        default:false
    },
    lab_ciencia:{
        type:Boolean,
        default:false
    },
    quadra_esportes:{
        type:Boolean,
        default:false
    },
    biblioteca:{
        type:Boolean,
        default:false
    },
    parque_infantil:{
        type:Boolean,
        default:false
    },
    bercario:{
        type:Boolean,
        default:false
    },
    banheiro_pne:{
        type:Boolean,
        default:false
    },
    dependencia_pne:{
        type:Boolean,
        default:false
    },
    banheiro_chuveiro:{
        type:Boolean,
        default:false
    },
    refeitorio:{
        type:Boolean,
        default:false
    },
    auditorio:{
        type:Boolean,
        default:false
    },
    alojamento_aluno:{
        type:Boolean,
        default:false
    },
    lavanderia:{
        type:Boolean,
        default:false
    },
    internet:{
        type:Boolean,
        default:false
    },
    alimentacao:{
        type:Boolean,
        default:false
    },
    atividade_complementar:{
        type:Boolean,
        default:false
    },
    educacao_indigena:{
        type:Boolean,
        default:false
    },
    final_semana:{
        type:Boolean,
        default:false
    }
},{
    timestamps:true   
}
);

module.exports = model('School', SchoolSchema);