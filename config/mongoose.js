const mongoose = require('mongoose');

const URI = "mongodb+srv://dipakkra2z:adminadmin@a2z-db-qtqe6.azure.mongodb.net/A2Z-DB";

mongoose.connect(URI).then(()=>{
    console.log('Connected to DB')
}).catch((err)=>{
    console.err(err);
});

module.exports = {mongoose};