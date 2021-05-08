const BookDAO = require('../DAO/bookDAO');
const bookDAO = new BookDAO();
class BookService {
    async addBook(data, file) {
        return await bookDAO.addBook(data, file);
    }

    async searchByField(data) {
        return await bookDAO.searchByField(data);
    }

    async deleteBook(data) {
        return await bookDAO.deleteBook(data);
    }

    async updateBookStatus(data) {
        return await bookDAO.updateBookStatus(data);
    }

    async getAllBooksByUser(data) {
        return await bookDAO.getAllBooksByUser(data);
    }
}

module.exports = BookService;