const {
    addBookHandler,
    getAllBooksHandler,
    getBookByIdHandler,
    editBookByIdHandler,
    deleteBookByIdHandler,
} = require('./handler');

function createRoute(method, path, handler) {
    return {
        method,
        path,
        handler,
    };
}

const routes = [
    createRoute('POST', '/books', addBookHandler),
    createRoute('GET', '/books', getAllBooksHandler),
    createRoute('GET', '/books/{id}', getBookByIdHandler),
    createRoute('PUT', '/books/{id}', editBookByIdHandler),
    createRoute('DELETE', '/books/{id}', deleteBookByIdHandler),
];

module.exports = routes;