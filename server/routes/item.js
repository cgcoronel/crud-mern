'use strict'

var express = require('express');
var ItemController = require('../controllers/item');
var api = express.Router();

var multipart = require('connect-multiparty');
var multipartMiddleware  = multipart({ uploadDir: './uploads' });

api.get('/item/:id', 		ItemController.getItem);
api.get('/items/', 			ItemController.getItems);
api.post('/item', 			multipartMiddleware, ItemController.saveItem);
api.put('/item/:id', 		multipartMiddleware, ItemController.updateItem);
api.delete('/item/:id', ItemController.deleteItem);

api.get('/image/:imageFile', multipartMiddleware, ItemController.getImageFile);

module.exports = api;
