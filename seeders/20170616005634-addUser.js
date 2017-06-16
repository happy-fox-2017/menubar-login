
'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    return queryInterface.bulkInsert('Users', [{
      username: "vega",
      email: "vega@gmail.com",
      password: "pdvega",
      role: "admin",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      username: "adith",
      email: "adith@gmail.com",
      password: "anto123",
      role: "supervisor",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      username: "gani",
      email: "gani@gmail.com",
      password: "gani",
      role: "customer",
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.
      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
