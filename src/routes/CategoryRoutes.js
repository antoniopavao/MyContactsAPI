const { Router } = require('express');

const CategoryController = require('../app/controllers/CategoryController');

const categoryRouter = Router();

categoryRouter.get('/categories', CategoryController.index);
categoryRouter.get('/categories/:id', CategoryController.show);
categoryRouter.delete('/categories/:id', CategoryController.delete);
categoryRouter.post('/categories', CategoryController.store);
categoryRouter.put('/categories/:id', CategoryController.update);

module.exports = categoryRouter;
