const { request } = require('express');
const { Post } = require('../models/');

const postsController = {
    index: async (request, response) => {
        let posts =  await Post.findAll({
            include: ['usuario', 'comentarios', 'curtiu']
        });
        
        return response.render('index', { listaPosts: posts });
    }, 
    create: async (req, res) => {
        const { texto, usuarios_id } = req.body
        let novoPost = await Post.create({
            texto,
            usuarios_id
        })
        return res.json(novoPost)
    },
    show: async (req, res) => {
        idUsuario = req.params.id
        let mostrarPosts = await Post.findAll({
            where: {usuarios_id: idUsuario}
        })
        return res.json(mostrarPosts)
    },
    update: async (req, res) => {
        let { id } = req.params;
        let { texto, usuarios_id } = req.body;
        let alteracaoPost = await Post.update({
            texto,
            usuarios_id
        }, {
            where: { id }
        })
        return res.json(alteracaoPost)
    },
    delete: async (req, res) => {
        let { id } = req.params;
        let deletarPosts = await Post.destroy({
            where: { id }
        })
        return res.json(deletarPosts)
    }

}

module.exports = postsController;