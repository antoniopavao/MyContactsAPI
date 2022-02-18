const { uuid } = require('uuidv4');

const contacts = [
  {
    id: uuid(),
    name: 'Matheus Artur',
    email: 'mateus@mail.com',
    phone: '3771-4658',
    category: uuid(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }
}

module.exports = new ContactsRepository();
