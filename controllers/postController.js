const postService = require('../services/PostService')
const statusCode = require('http-status-codes');

const show = async (request, response) => {
    const postId = parseInt(request.params.postId);
    try {
        const post = await postService.show(postId);
        if (!post) {
            response.status(statusCode.NOT_FOUND).send();
        } else {
            response.send({
                "content": post
            });
        }
    } catch (error) {
        console.error('Error fetching post:', error);

        response.status(statusCode.INTERNAL_SERVER_ERROR).send({ error: 'Internal Server Error' });
    }
}

const store = async (request, response) => {
    try {
        const createdPost = await postService.create(request.body);
        response.status(statusCode.CREATED).send({
            "content": createdPost
        });
    } catch (error) {
        console.error('Error creating post:', error);

        response.status(statusCode.INTERNAL_SERVER_ERROR).send({ error: 'Internal Server Error' });
    }
}

module.exports = {
    show,
    store
}
