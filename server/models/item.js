'use strict'

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ItemSchema = Schema(
	{
		title: String,
		description: String,
		valor: String,
		image: String
	}
);

module.exports = mongoose.model('Item', ItemSchema);
