const express = require('express');
const contactRoutes = require('./routes/ContactsRoutes');
const categoryRoutes = require('./routes/CategoryRoutes');

const app = express();

app.use(express.json());
app.use(contactRoutes);
app.use(categoryRoutes);

app.listen(3000, () => console.log('Server started at http://localhost:3000'));
