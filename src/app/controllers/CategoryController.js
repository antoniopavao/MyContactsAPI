const CategoriesRepository = require('../repositories/CategoriesRepository');

class CategoryController {
  index(request, response) {
    response.send('ok - index');
  }

  async store(request, response) {
    const { name } = request.body;

    if (!name) {
      return response.status(404).json({ error: 'Name is required' });
    }

    const category = await CategoriesRepository.create({ name });
    response.json(category);
  }

  show(request, response) {
    response.send('ok - show');
  }

  update(request, response) {
    response.send('ok - update');
  }

  delete(request, response) {
    response.send('ok - delete');
  }
}
module.exports = new CategoryController();
