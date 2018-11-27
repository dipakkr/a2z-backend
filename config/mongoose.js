const mongoose = require('mongoose');

const URI = "mongodb://a2z-db:CtWQvUn0MLbor5L6NVxenPjrdcs54C43Ih4ihCCjlHrx5H6YV3aVMr2OUQh6SuCmZ6E8X42Ns8zrv3uRsIlYVw%3D%3D@a2z-db.documents.azure.com:10255/?ssl=true&replicaSet=globaldb";

mongoose.connect(URI).then(()=>{
    console.log('Connected to DB')
}).catch((err)=>{
    console.err(err);
});

module.exports = {mongoose};