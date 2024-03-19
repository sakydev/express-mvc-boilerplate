const postRepository = require('../repositories/PostRepository')
const Post = require('../models/Post')

class PostService {
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
