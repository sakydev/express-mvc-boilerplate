const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const show = async (postId) => {
    console.log('running query')
    return await prisma.posts.findFirst({
        where: {
            id: postId
        }
    });
}

const store = async (content) => {
    try {
        const { title, description, author, created_at } = content;
        const newPost = await prisma.posts.create({
            data: {
                title,
                description,
                author,
                created_at
            }
        });

        // Log or handle the result if needed
        console.log('New post created:', newPost);

        return newPost; // Return the newly created post
    } catch (error) {
        // Handle any errors that occur during the creation of the post
        console.error('Error creating post:', error);
        throw error; // Rethrow the error to propagate it to the caller
    }
}


module.exports = {
    show,
    store
}

