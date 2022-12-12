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
    await queryInterface.bulkInsert('users',
      [
        {
          name: "Nguyễn Hoài Thanh",
          email: "nguyenhoaithanhlt@gmail.com",
          password: "$2b$10$Ko4g2T0N9dAIOyj62tyTeenZ064XSZtkyx8S9uTkhd2zahfV2143y",
          type: "ADMIN",
          numberPhone: "123456789",
          avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png",
          createdAt: "2022-11-25 04:40:41",
          updatedAt: "2022-11-25 04:40:41"
        },
        {
          name: "Nguyễn Văn A",
          email: "nguyenhoaithanh@gmail.com",
          password: "$2b$10$Ko4g2T0N9dAIOyj62tyTeenZ064XSZtkyx8S9uTkhd2zahfV2143y",
          type: "ADMIN",
          numberPhone: "123456789",
          avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png",
          createdAt: "2022-11-25 04:40:41",
          updatedAt: "2022-11-25 04:40:41"
        }
      ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users', null, {});
  }
};
