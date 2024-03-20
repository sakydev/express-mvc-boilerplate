const postRepository = require('../repositories/PostRepository')
const Post = require('../models/Post')

class PostService {
    async list(page, limit) {
        return await postRepository.list(page, limit)
    }

    async create(content) {
        return await postRepository.store(content);
    }

    async findById(postId) {
        return await postRepository.findById(postId);
    }

    async destroy(postId) {
        return await postRepository.destroy(postId)
    }
}

module.exports = new PostService()
