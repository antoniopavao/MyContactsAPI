class CategoryController {
  index(request, response) {
    response.send('ok - index');
  }

  store(request, response) {
    response.send('ok - store');
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
