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
    await queryInterface.bulkInsert('Stations',
      [
        {
          name: "bến xe Long Xuyên",
          address: "392, P, Phạm Cự Lượng, Tp. Long Xuyên, An Giang",
          province: "An Giang",
          createdAt: "2022-11-19 14:17:14",
          updatedAt: "2022-11-19 14:17:14"
        },
        {
          name: "bến xe miền tây",
          address: "395 Kinh Đ. Vương, An Lạc, Bình Tân, Thành phố Hồ Chí Minh",
          province: "Thành phố Hồ Chí Minh",
          createdAt: "2022-11-19T14:18:14",
          updatedAt: "2022-11-19T14:18:14"
        },
        {
          name: "bến xe An Sương",
          address: "QL22, Bà Điểm, Hóc Môn, Thành phố Hồ Chí Minh",
          province: "Thành phố Hồ Chí Minh",
          createdAt: "2022-11-19T14:18:14",
          updatedAt: "2022-11-19T14:18:14"
        },
        {
          name: "bến xe Đà Nẵng",
          address: "Tôn Đức Thắng, Hoà Minh, Liên Chiểu, Đà Nẵng 550000",
          province: "Thành phố Hồ Chí Minh",
          createdAt: "2022-11-19T14:18:14",
          updatedAt: "2022-11-19T14:18:14"
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
    await queryInterface.bulkDelete('stations', null, {});
  }
};
