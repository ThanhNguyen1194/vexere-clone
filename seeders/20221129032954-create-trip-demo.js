'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('trips',
      [
        {
          fromStation: 1,
          toStation: 2,
          price: 120000,
          startTime: "2022-12-12 11:45:45",
          createdAt: "2022-11-25 04:40:41",
          updatedAt: "2022-11-25 04:40:41"
        },
        {
          fromStation: 1,
          toStation: 3,
          price: 200000,
          startTime: "2022-12-12 11:45:45",
          createdAt: "2022-11-25 04:40:41",
          updatedAt: "2022-11-25 04:40:41"
        },
        {
          fromStation: 2,
          toStation: 1,
          price: 220000,
          startTime: "2022-12-12 11:45:45",
          createdAt: "2022-11-25 04:40:41",
          updatedAt: "2022-11-25 04:40:41"
        },
        {
          fromStation: 3,
          toStation: 2,
          price: 150000,
          startTime: "2022-12-12 11:45:45",
          createdAt: "2022-11-25 04:40:41",
          updatedAt: "2022-11-25 04:40:41"
        },

      ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('trips', null, {});
  }
};
