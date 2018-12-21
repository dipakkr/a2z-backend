const mongoose =require('mongoose');

const bootCampsSchema = mongoose.Schema({
    
    _id: mongoose.Schema.Types.ObjectId,
    
    title : {
        type: String,
        required:true
    },
    url :{
        type: String,
        required:true
    },
    location :{
        type: String,
        required:true
    },
    scholarship : {
        type : String, 
        required : true
    },
    field : {
        type : String,
        required : true
    },
    active :{
        type: Boolean,
        default : true
    },
    bookmark :{
        type: Boolean,
        default : false
    }
});


module.exports = mongoose.model('bootCamp',bootCampsSchema);