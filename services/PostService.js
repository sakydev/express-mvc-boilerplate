const postRepository = require('../repositories/PostRepository')
const Post = require('../models/Post')

class PostService {
    async list(page, limit) {
        try {
            return await postRepository.list(page, limit)
        } catch (error) {
            console.log('Error listing posts:', error)

            throw error
        }
    }

    async create(content) {
        try {
            return await postRepository.store(content);
        } catch (error) {
            console.error('Error creating post:', error);

            throw error;
        }
    }

    async show(postId) {
        try {
            return await postRepository.show(postId);
        } catch (error) {
            console.error('Error fetching post:', error);

            throw error;
        }
    }
}

module.exports = new PostService()
