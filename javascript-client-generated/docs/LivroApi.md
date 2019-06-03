# SimpleInventoryApi.LivroApi

All URIs are relative to *https://virtserver.swaggerhub.com/lucasdepaula19/LivrariaLucas/1.0.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createLivro**](LivroApi.md#createLivro) | **POST** /livro/ | add an livro
[**deleteLivroById**](LivroApi.md#deleteLivroById) | **DELETE** /livro/{livroId} | delete livro by ID
[**getLivroById**](LivroApi.md#getLivroById) | **GET** /livro/{livroId} | find livro by ID
[**searchLivro**](LivroApi.md#searchLivro) | **GET** /livro/ | searches livro


<a name="createLivro"></a>
# **createLivro**
> createLivro(body)

add an livro

### Example
```javascript
var SimpleInventoryApi = require('simple_inventory_api');

var apiInstance = new SimpleInventoryApi.LivroApi();

var body = new SimpleInventoryApi.Livro(); // Livro | Created an livro


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.createLivro(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Livro**](Livro.md)| Created an livro | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/xml
 - **Accept**: application/json, application/xml

<a name="deleteLivroById"></a>
# **deleteLivroById**
> deleteLivroById(livroId)

delete livro by ID

Deleta o livro informado 

### Example
```javascript
var SimpleInventoryApi = require('simple_inventory_api');

var apiInstance = new SimpleInventoryApi.LivroApi();

var livroId = 789; // Number | ID of delete


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.deleteLivroById(livroId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **livroId** | **Number**| ID of delete | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="getLivroById"></a>
# **getLivroById**
> Livro getLivroById(livroId)

find livro by ID

Retorna um livro específico 

### Example
```javascript
var SimpleInventoryApi = require('simple_inventory_api');

var apiInstance = new SimpleInventoryApi.LivroApi();

var livroId = 789; // Number | ID of livro to return


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getLivroById(livroId, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **livroId** | **Number**| ID of livro to return | 

### Return type

[**Livro**](Livro.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

<a name="searchLivro"></a>
# **searchLivro**
> Object searchLivro()

searches livro

Retorna todos os itens da livraria 

### Example
```javascript
var SimpleInventoryApi = require('simple_inventory_api');

var apiInstance = new SimpleInventoryApi.LivroApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.searchLivro(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml

