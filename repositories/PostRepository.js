const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('database.sqlite');

const show = (postId, callback) => {
    db.get(
        'SELECT * FROM posts WHERE id = ?',
        [postId],
        function(err, row) {
            if (err) {
                throw err;
            }

            callback(row)
        }
    );
}

const store = (content, callback) => {
    const { title, description, author, created_at } = content;
    db.run(
        'INSERT INTO posts (title, description, author, created_at) VALUES (?, ?, ?, ?)',
        [title, description, author, created_at],
        function (err) {
            if (err) {
                throw err;
            }
            callback(this.lastID);
        }
    );
}

module.exports = {
    show,
    store
}