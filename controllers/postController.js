const postService = require('../services/PostService')

const show = async (request, response) => {
    const postId = parseInt(request.params.postId);
    try {
        const post = await postService.show(postId);
        if (!post) {
            response.status(404).send();
        } else {
            console.log('sending response');
            response.send({
                "content": post
            });
        }
    } catch (error) {
        console.error('Error fetching post:', error);
        response.status(500).send({ error: 'Internal Server Error' });
    }
}

const store = async (request, response) => {
    try {
        const postId = await postService.create(request.body);
        response.status(201).send({
            "content": {
                "id": postId
            }
        });
    } catch (error) {
        console.error('Error creating post:', error);
        response.status(500).send({ error: 'Internal Server Error' });
    }
}

module.exports = {
    show,
    store
}
