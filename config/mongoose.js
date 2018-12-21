const mongoose = require('mongoose');

const URI = "mongodb+srv://dipakkra2z:adminadmin@a2z-db-qtqe6.azure.mongodb.net/A2Z-DB";

mongoose.connect(URI,{
	useNewUrlParser: true
});

module.exports = {mongoose};

