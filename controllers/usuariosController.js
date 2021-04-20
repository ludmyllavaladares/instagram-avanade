const { Usuario, sequelize } = require('../models/');

const usuariosController = {
    index: async (req, res) => {
        let usuarios =  await Usuario.findAll();
        
        return res.render('usuarios', { listaUsuarios: usuarios });
    }, 
    create: async (req, res) => {
        const user = req.body
        let novoUsuario = await Usuario.create({
            nome: user.nome,
            email: user.email,
            senha: user.senha
        })
        return res.json(novoUsuario)
    },

    update: async (req, res) => {
        let { id } = req.params;
        let { nome, email, senha } = req.body;
        let alteracaoUsuario = await Usuario.update({
            nome,
            email,
            senha
        }, {
            where: { id }
        })
        return res.json(alteracaoUsuario)
    },
    delete: async (req, res) => {
            let { id } = req.params;
        let deletarUsuario = await Usuario.destroy({
            where: { id }
        })
        return res.json(deletarUsuario)
    }

}

module.exports = usuariosController;