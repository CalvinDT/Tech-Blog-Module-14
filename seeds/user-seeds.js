const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'Calvin',
    email: 'ct2233@hotmail.com',
    password: 'password123'
  },
  {
    username: 'Anita',
    email: 'anita@abd.com',
    password: 'password123'
  },
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;
