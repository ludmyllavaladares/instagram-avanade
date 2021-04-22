const { Usuario, sequelize } = require('../models/');

const usuariosController = {
    index: async (req, res) => {
        let usuarios =  await Usuario.findAll();
        
        return res.render('usuarios', { listaUsuarios: usuarios });
    }, 
    registro: (req, res) => {
        return res.render('registro');
    },
    login: (req, res) => {
        return res.render('login');
    },
    create: async (req, res) => {
        const user = req.body
        let novoUsuario = await Usuario.create({
            nome: user.nome,
            email: user.email,
            senha: user.senha
        })
        return res.redirect('/usuarios/login');
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