const routes = require('express').Router();
const { Router } = require('express');
const multer = require('multer');
const multerConfig = require('./config/multer');

const Post = require('./models/Post');

//LISTAR AS IMAGENS

routes.get('/posts', async (req,res)=>{
    const post = await Post.find();

    return res.json(post);
});



//ENVIAR AS IMAGENS PRO BANO DE DADOS

routes.post('/posts', multer(multerConfig).single('file'), async (req,res)=>{

    const{ originalname: name,size,key, location: url = ''} = req.file

    const post = await Post.create({
        name,
        size,
        key,
        url
    });

    //console.log(req.file);

    return res.json(post)
});


//DELETAR IMAGENS DO BANCO

routes.delete('/posts/:id' , async (req, res) => {
    const post = await Post.findById(req.params.id);
    await post.remove();
    return res.send();
})

module.exports = routes;