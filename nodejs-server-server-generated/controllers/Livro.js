'use strict';

var utils = require('../utils/writer.js');
var Livro = require('../service/LivroService');

module.exports.createLivro = function createLivro (req, res, next) {
  var body = req.swagger.params['body'].value;
  Livro.createLivro(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteLivroById = function deleteLivroById (req, res, next) {
  var livroId = req.swagger.params['livroId'].value;
  Livro.deleteLivroById(livroId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getLivroById = function getLivroById (req, res, next) {
  var livroId = req.swagger.params['livroId'].value;
  Livro.getLivroById(livroId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.searchLivro = function searchLivro (req, res, next) {
  Livro.searchLivro()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
