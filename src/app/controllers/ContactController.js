class ContactController {
  index(request, response) {
    // Listar todos os registros
    response.send('Send from contact controller');
  }

  show() {
    // Obter 1 registro
  }

  store() {
    // Criar novos registro
  }

  update() {
    // Editar um registro
  }

  delete() {
    // Deletar um registro
  }
}

module.exports = new ContactController();
