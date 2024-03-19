const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const show = async (postId) => {
    return await prisma.posts.findFirst({
        where: {
            id: postId
        }
    });
}

const store = async (content) => {
    try {
        const { title, description, author, created_at } = content;
        return await prisma.posts.create({
            data: {
                title,
                description,
                author,
                created_at
            }
        });

    } catch (error) {
        console.error('Error creating post:', error);

        throw error; // Rethrow the error to propagate it to the caller
    }
}


module.exports = {
    show,
    store
}

