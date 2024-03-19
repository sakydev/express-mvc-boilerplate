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
    const { title, description, author, created_at } = content;
    return await prisma.posts.create({
        data: {
            title,
            description,
            author,
            created_at
        }
    });
}


module.exports = {
    show,
    store
}

