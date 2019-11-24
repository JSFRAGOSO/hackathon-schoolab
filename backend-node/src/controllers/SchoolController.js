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
            extra_curricular,
            kitchen,
            quadra,
            laboratorio,
            biblioteca,
            labciencia
        })
        
        return res.json(school);
    }
}