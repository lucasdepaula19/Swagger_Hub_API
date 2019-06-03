'use strict';


/**
 * add an livro
 *
 * body Livro Created an livro
 * no response value expected for this operation
 **/
exports.createLivro = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * delete livro by ID
 * Deleta o livro informado 
 *
 * livroId Long ID of delete
 * no response value expected for this operation
 **/
exports.deleteLivroById = function(livroId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * find livro by ID
 * Retorna um livro específico 
 *
 * livroId Long ID of livro to return
 * returns livro
 **/
exports.getLivroById = function(livroId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "isbn" : 0,
  "titulo" : "The Origin",
  "autor" : "Lucas de Paula"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * searches livro
 * Retorna todos os itens da livraria 
 *
 * returns Object
 **/
exports.searchLivro = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "{}";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

