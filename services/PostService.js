const postRepository = require('../repositories/PostRepository')
const Post = require('../models/Post')

class PostService {
    async create(content) {
        const { title, description, author } = content;
        const postContent = { title, description, author };
        try {
            const newPost = await postRepository.store(postContent);
            return newPost.id;
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
