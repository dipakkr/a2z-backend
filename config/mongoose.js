const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const URI = "mongodb://a2z-db:CtWQvUn0MLbor5L6NVxenPjrdcs54C43Ih4ihCCjlHrx5H6YV3aVMr2OUQh6SuCmZ6E8X42Ns8zrv3uRsIlYVw==@a2z-db.documents.azure.com:10255/?ssl=true&replicaSet=globaldb";
mongoose.connect(URI);

module.exports = {mongoose};