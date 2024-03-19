const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.get('/', (request, response) => {
    response.send({
        "Status": "OK"
    })
})

postsRoutes = require('./routes/posts')

app.use('/posts', postsRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});