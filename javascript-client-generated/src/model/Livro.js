/**
 * Simple Inventory API
 * This is a simple API
 *
 * OpenAPI spec version: 1.0.0
 * Contact: you@your-company.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.5
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.SimpleInventoryApi) {
      root.SimpleInventoryApi = {};
    }
    root.SimpleInventoryApi.Livro = factory(root.SimpleInventoryApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Livro model module.
   * @module model/Livro
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>Livro</code>.
   * @alias module:model/Livro
   * @class
   * @param isbn {Number} 
   * @param titulo {String} 
   * @param autor {String} 
   */
  var exports = function(isbn, titulo, autor) {
    var _this = this;

    _this['isbn'] = isbn;
    _this['titulo'] = titulo;
    _this['autor'] = autor;
  };

  /**
   * Constructs a <code>Livro</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Livro} obj Optional instance to populate.
   * @return {module:model/Livro} The populated <code>Livro</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('isbn')) {
        obj['isbn'] = ApiClient.convertToType(data['isbn'], 'Number');
      }
      if (data.hasOwnProperty('titulo')) {
        obj['titulo'] = ApiClient.convertToType(data['titulo'], 'String');
      }
      if (data.hasOwnProperty('autor')) {
        obj['autor'] = ApiClient.convertToType(data['autor'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Number} isbn
   */
  exports.prototype['isbn'] = undefined;
  /**
   * @member {String} titulo
   */
  exports.prototype['titulo'] = undefined;
  /**
   * @member {String} autor
   */
  exports.prototype['autor'] = undefined;



  return exports;
}));


