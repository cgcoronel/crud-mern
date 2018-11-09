'use strict'

var Item = require('../models/item');
var fs = require('fs');
var path = require('path');

function getItem(req, res){
    var itemId = req.params.id;

		Item.findById(itemId, function(err, item){
			if (err) {
				res.status(500).send({message: 'Error al devolver el Item'});
			} else {
				if(!item){
					res.status(404).send({message: 'El Item no existe'});
				} else {
					res.status(200).send({item});
				}
			}
		});
}

function getItems(req, res){
  Item.find().exec({}, (err, items) => {
			if (err) {
				res.status(500).send({message: 'Error al devolver los Items'});
			} else {
				if (!items) {
					res.status(404).send({message: 'No hay Items'});
				} else {
					res.status(200).send({items});
				}
			}
	});
}

function saveItem(req, res){
	var item = new Item();
  var params = req.body;
  var file_name = "No subido...";

	item.title = params.title;
	item.description = params.description;
  item.valor = params.valor;

	if (req.files) {
		var file_path = req.files.image.path;
		var file_split = file_path.split('/');
		var file_name = file_split[1];
  }

  item.image = file_name;

	item.save((err, itemStored) => {
		if (err) {
			res.status(500).send({message: 'Error al guardar el Item'});
		} else {
			res.status(200).send({item: itemStored});
		}
	});
}

function updateItem(req, res){
	var itemId = req.params.id;
  var update = req.body;
  var file_name = "No subido...";

  const item = {
    _id: itemId,
    title: update.title,
    description: update.description,
    valor: update.valor
  };

  if (update.image_name === undefined){
		var file_path = req.files.image.path;
		var file_split = file_path.split('/');
		var file_name = file_split[1];
    item.image = file_name;
  } else {
    item.image = update.image_name;
  }

	Item.findByIdAndUpdate(itemId, item, (err, itemUpdated) => {
		if (err) {
			res.status(500).send({message: 'Error al guardar el Item'});
		} else {
			res.status(200).send({item});
		}
	});
}

function deleteItem(req, res){
  var itemId = req.params.id;

	Item.findById(itemId, function(err, item){
		if (err) {
			res.status(500).send({message: 'Error al devolver el Item'});
		}

		if(!item){
			res.status(404).send({message: 'El Item no existe'});
		} else {
			item.remove(err => {
				if (err) {
					res.status(500).send({message: 'Error al borrar el Item'});
				} else {
					res.status(200).send({item});
				}
			});
		}
	});
}

function getImageFile(req, res){
		var imageFile = req.params.imageFile;
		var path_file = './uploads/' + imageFile;

		fs.exists(path_file, function(exists){
			if (exists) {
        res.sendFile(path.resolve(path_file));
			} else {
        res.sendFile(path.resolve('./uploads/vacio.jpg'));
			}
		});
}

module.exports = {
  getItem,
  getItems,
  saveItem,
  updateItem,
  deleteItem,
  getImageFile
}
