const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const list = async (page, limit) => {
    const skip = (page - 1) * limit;

    return await prisma.posts.findMany({
        take: limit,
        skip: skip,
    });
}

const findById = async (postId) => {
    return await prisma.posts.findFirst({
        where: { id: postId }
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

const update = async (postId, content) => {
    return await prisma.posts.update({
        where: { id: postId },
        data: content
    })
}

const destroy = async (postId) => {
    return await prisma.posts.delete({
        where: { id: postId }
    })
}


module.exports = {
    list,
    findById,
    store,
    update,
    destroy
}

