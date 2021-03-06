const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/wikistack', {
  logging: false,
});

const Page = db.define('page', {
  Title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Slug: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Content: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  Status: {
    type: Sequelize.ENUM('open', 'closed'),
    defaultValue: 'open',
  },
});

const User = db.define('user', {
  Name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  Email: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
});

module.exports = {
  db,
  Page,
  User,
};
