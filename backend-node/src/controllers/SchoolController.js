const School = require('../models/School');

module.exports = {
    async index(req,res){
        
        const school = await School.find();
        return res.json(school);
    },
    async store(req,res){
        const {
            name,
            thumbmail,
            type,
            state,
            city,
            district,
            morning,
            evening,
            night,
            extra_curricular,
            kitchen,
            quadra,
            laboratorio,
            biblioteca,
            labciencia
        } = req.body;

        var school = await School.findOne({name});

        if(school){
            return res.json({"erro":`Escola ${name} já cadastrada`});    
        }

        school = await School.create({
            name,
            thumbmail,
            type,
            state,
            city,
            district,
            morning,
            evening,
            night,
            lab_informatica,
            lab_ciencia,
            quadra_esportes,
            biblioteca,
            parque_infantil,
            bercario,
            banheiro_pne,
            dependencia_pne,
            banheiro_chuveiro,
            refeitorio,
            auditorio,
            alojamento_aluno,
            lavanderia,
            internet,
            alimentacao,
            atividade_complementar,
            educacao_indigena,
            final_semana
        })
        
        return res.json(school);
    }
}