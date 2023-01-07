const { User } = require('../models');

const userdata =
[
  {
    "username": "Calvin",
    "password": "password"
  },
  {
    "username": "Anita",
    "password": "password"
  },
  {
    "username": "Alberta",
    "password": "password"
  }
];

const seedUser = () => User.bulkCreate(userdata, {
  individualHooks: true,
  returning: true,
});

module.exports = seedUser;