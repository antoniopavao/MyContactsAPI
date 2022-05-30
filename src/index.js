const express = require('express');
require('express-async-errors');
const contactRoutes = require('./routes/ContactsRoutes');
const categoryRoutes = require('./routes/CategoryRoutes');

const app = express();

app.use(express.json());
app.use(contactRoutes);
app.use(categoryRoutes);
// Mid de Error Handler
app.use((error, request, response, next) => {
  console.log(error);
  response.sendStatus(500);
});

app.listen(3000, () => console.log('Server started at http://localhost:3000'));
