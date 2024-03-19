const postRepository = require('../repositories/PostRepository')
const Post = require('../models/Post')

class PostService {
    create = (content, callback) => {
        const {title, description, author} = content.body
        const postContent = new Post(title,description, author, Date.now())

        postRepository.store(postContent, callback)
    }

    show = (postId, callback) => {
        postRepository.show(postId, callback)
    }
}

module.exports = new PostService()