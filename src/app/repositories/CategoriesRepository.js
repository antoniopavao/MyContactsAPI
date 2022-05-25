const db = require('../../database');

class CategoriesRepository {
  async teste() {
    console.log(db.query());
  }
}
module.exports = new CategoriesRepository();
