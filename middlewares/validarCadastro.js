const { Usuario } = require('../models')

module.exports = async (req, res, next) => {
    let {email, nome, senha} = req.body
    let user = await Usuario.findAll({ where: {email} } )
    if(user.length){
        res.status(400).json({ erro: "Email já cadastrado" })
    }else{
        if(!nome){
            res.status(400).json({ erro: "Nome não cadastrado" })
        }else{
            if(!senha){
                res.status(400).json({ erro: "Senha não cadastrado" })
            }else{
                if(!email){
                    res.status(400).json({ erro: "Email não cadastrado" })
                }else{
                    next();
                }
            }
        }
    }
        
}

