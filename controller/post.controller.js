const {Post} = require('../models/models');

class PostController {
    async createPost(req,res){
        const {title, content, userId} = req.body;
        const newPost = await Post.create({title, content, userId});
        return res.json(newPost);
    }
    async getPostsByUser(req,res){
        const userId = req.query.userId;
        const posts = await Post.findAll({where: {userId}});
        res.json(posts);
    }
    async getPost(req,res){
        const id = req.params.id;
        const post = await Post.findAll({where: {id}});
        return res.json(post);
    }
}

module.exports = new PostController();