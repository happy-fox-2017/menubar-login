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
      username: 'Fikri',
      email: 'fikri@yahoo.com',
      password: '12345',
      role: 'admin',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: 'Jumadi',
      email: 'jumadi@gmail.com',
      password: '12345',
      role: 'Manager',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      username: 'Fajar',
      email: 'fajar@gmail.com',
      password: '12345',
      role: 'Staff',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
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
