const db = require('./db');
const config = require('../config');

async function getMultiple(){
  const rows = await db.query(
    "SELECT * FROM posts"
  );
  //console.log(rows);
  return {
    rows
  }
}

async function create(post){
  const result = await db.query(
    `INSERT INTO posts
    (idposts, post_name, post_date, post_subject, post_body)
    VALUES
    (?, ?, ?, ?, ?)`,
    [
      post.id, post.name,
      post.date, post.subject,
      post.body
    ]
  );

  let message = 'Error in creating post';

  if (result.affectedRows) {
    message = 'News post created successfully';
  }

  return {message};
}

async function update(id, post){
  const result = await db.query(
    `UPDATE posts
    SET post_name=?, post_date=?, post_subject=?,
    post_body=?
    WHERE idposts=?`,
    [
      post.name,
      post.date, post.subject,
      post.body, id
    ]
  );

  let message = 'Error in updating news post';

  if (result.affectedRows) {
    message = 'News post updated successfully';
  }

  return {message};
}

async function remove(id){
  const result = await db.query(
    `DELETE FROM posts WHERE idposts=?`,
    [id]
  );

  let message = 'Error in deleting news post';

  if (result.affectedRows) {
    message = 'News post deleted successfully';
  }

  return {message};
}

module.exports = {
  getMultiple,
  create,
  update,
  remove
}
