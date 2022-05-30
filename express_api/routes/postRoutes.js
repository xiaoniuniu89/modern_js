const express = require('express')
const router = express.Router()
const Post = require('../models/postModels')
const path = require('path');
const { response } = require('express');



router.get('/', async (request, response) => {
    try {
        const posts = await Post.find()
        response.json(posts)
    } catch (err) {
        response.json({message: err})
    }

})

router.get('/create', (request, response) => {
    response.sendFile(path.join(__dirname + '/../views/post_create.html'))
})

router.post('/create', async (request, response) => {
    const post = new Post(request.body);
    try{
        savedPost = await post.save()
        response.json(savedPost)
    } catch(err) {
        response.json({message: err})
    }
    
    
})

router.get('/:id', async (request, response) => {
    const id = request.params.id
    try{
        const post = await Post.findById(id)
        response.json(post)
    } catch(err) {
        response.json({message: err})
    }

})

router.delete('/:id', async (request, response) => {
    try{
        const id = request.params.id
        const remPost = await Post.findByIdAndDelete(id)
        response.json(remPost)

    } catch(err){
        response.json({message: err})
    }
})

router.patch('/:id', async (request, response) => {
    try{
        const post = await Post.findByIdAndUpdate(request.params.id, {title: request.body.title})
        response.json(post)
    } catch(err) {
        response.json({message: err})
    }
    
})



module.exports = router