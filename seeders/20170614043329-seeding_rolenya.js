'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Userlogins', [{
      username: 'AdminAde',
      password: "123456",
      role : "Admin",
      createdAt : new Date(),
      updatedAt : new Date()
    }, {
      username: 'DokterLina',
      password: "123456",
      role : "Dokter",
      createdAt : new Date(),
      updatedAt : new Date()
    } , {
      username: 'OfficeBoyJames',
      password: "123456",
      role : "OfficeBoy",
      createdAt : new Date(),
      updatedAt : new Date()
    }], {});
    
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Userlogins', null, {});
  }
};
