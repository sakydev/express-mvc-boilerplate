const express = require('express');
const router = express.Router();

const postController = require('../controllers/postController')
const { createPostRequest, handleValidationErrors } = require('../validations/createPostRequest');

router.get('/', postController.list)
router.get('/:postId', postController.show)
router.post('/', createPostRequest, handleValidationErrors, postController.store)
router.patch('/:postId', postController.update)
router.delete('/:postId', postController.destroy)

module.exports = router;
