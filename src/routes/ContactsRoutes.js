const { Router } = require('express');

const ContactController = require('../app/controllers/ContactController');

const contactRouter = Router();

contactRouter.get('/contacts', ContactController.index);
contactRouter.get('/contacts/:id', ContactController.show);
contactRouter.delete('/contacts/:id', ContactController.delete);
contactRouter.post('/contacts', ContactController.store);
contactRouter.put('/contacts/:id', ContactController.update);

module.exports = contactRouter;
