'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Users',[
      {
        username: "fajar",
        email: "fajar@gmail.com",
        password: 12345,
        role : "boss",
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        username: "zaki",
        email: "basit@gmail.com",
        password: 12345,
        role : "manager",
        createdAt : new Date(),
        updatedAt : new Date()
      },{
        username: "basit",
        email: "fajar@gmail.com",
        password: 12345,
        role : "manager",
        createdAt : new Date(),
        updatedAt : new Date()
      },
    ])
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {})
  }
};
