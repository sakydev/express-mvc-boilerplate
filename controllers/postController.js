const {request, response} = require("express");
const postService = require('../services/PostService')

const list = (request, response) => {
    response.send({
        "content": "list"
    })
}

const show = (request, response) => {
    postService.show(request.params.postId, (post) => {
        if (typeof post == 'undefined') {
            response.status(404).send()
        } else {
            response.send({
                "content": post
            })
        }
    })
}

const update = (request, response) => {
    response.send({
        "content": "update"
    })
}

const store = (request, response) => {
    postService.create(request, (postId) => {
        response.status(201).send({
            "content": {
                "id": postId
            }
        })
    })
}

const destroy = (request, response) => {
    response.send({
        "content": "delete"
    })
}

module.exports = {
    list,
    show,
    update,
    store,
    destroy
}