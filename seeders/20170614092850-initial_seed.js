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
      username : 'admin',
      email : 'mimin@mail.com',
      password : 'admin',
      role : 'admin',
      createdAt : new Date(),
      updatedAt : new Date()
    },{
      username : 'pengguna',
      email : 'pengguna@mail.com',
      password : 'pengguna',
      role : 'user',
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      username : 'tamu',
      email : 'tamu@mail.com',
      password : 'tamu',
      role : 'guest',
      createdAt : new Date(),
      updatedAt : new Date()
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
