const { Router } = require('express');

const CategoryController = require('../app/controllers/CategoryController');

const categoryRouter = Router();

categoryRouter.get('/contacts', CategoryController.index);
categoryRouter.get('/contacts/:id', CategoryController.show);
categoryRouter.delete('/contacts/:id', CategoryController.delete);
categoryRouter.post('/contacts', CategoryController.store);
categoryRouter.put('/contacts/:id', CategoryController.update);

module.exports = categoryRouter;
