const express = require('express');
const router = express.Router();

const postController = require('../controllers/postController')

// router.get('/', postController.list)
router.get('/:postId', postController.show)
router.post('/', postController.store)
// router.patch('/:postId', postController.update)
// router.delete('/:postId', postController.destroy)

module.exports = router;
