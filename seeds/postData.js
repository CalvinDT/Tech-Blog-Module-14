const { Post } = require('../models');

const postdata =
[
  {
    "postTitle": "Cold Day",
    "postContent": "This is weather is freezing",
    "userId": 1
  },
  {
    "postTitle": "Traffic",
    "postContent": "Atlanta Traffic is the worst",
    "userId": 2
  },
  {
    "postTitle": "Did you hear?",
    "postContent": "You are a wonderful person",
    "userId": 3
  }
];

const seedPost = () => Post.bulkCreate(postdata);

module.exports = seedPost;