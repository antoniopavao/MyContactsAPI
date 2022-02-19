const { v4 } = require('uuid');

const contacts = [
  {
    id: v4(),
    name: 'Matheus Artur',
    email: 'mateus@mail.com',
    phone: '3731-4455',
    category: v4(),
  },
  {
    id: v4(),
    name: 'Jose Alfredo',
    email: 'jose.alfredo@mail.com',
    phone: '3771-4658',
    category: v4(),
  },
  {
    id: v4(),
    name: 'Antonio Pavao',
    email: 'antonio@mail.com',
    phone: '3771-4658',
    category: v4(),
  },
];

class ContactsRepository {
  findAll() {
    return new Promise((resolve) => resolve(contacts));
  }

  findById(id) {
    return new Promise((resolve) => resolve(
      contacts.find((contact) => contact.id === id),
    ));
  }
}

module.exports = new ContactsRepository();
