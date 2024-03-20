const { body, validationResult } = require('express-validator');

const createPostRequest = [
    body('title')
        .notEmpty().withMessage('Title is required')
        .isLength({ min: 3, max: 100 }).withMessage('Title must be between 3 and 100 characters long'),

    body('author')
        .notEmpty().withMessage('Author is required')
        .isLength({ min: 3, max: 50 }).withMessage('Author must be between 3 and 50 characters long'),

    body('description')
        .optional({ nullable: true })
        .isLength({ min: 3, max: 255 }).withMessage('Description must be between 3 and 255 characters long')
];

const handleValidationErrors = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    next();
};

module.exports = {
    createPostRequest,
    handleValidationErrors
};
