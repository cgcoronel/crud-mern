'use strict'

var mongoose = require('mongoose');

var app = require('./app');

mongoose.connect('mongodb://localhost:27017/items', (err, res)=> {
		if (err) {
			throw err;
		} else {
			console.log('Conexion a mongo correcta');
			app.listen(3678, ()=>{
				console.log("Api rest funcionando!");
			});
		}
});
