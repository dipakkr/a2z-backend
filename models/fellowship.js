const mongoose =require('mongoose');

const fellowshipSchema = mongoose.Schema({
    
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
    eligiblity :{
        type:String,
        required : true
    },
    deadline :{
        type: String
    },
    active :{
        type: Boolean,
        default : true
    },
    subscribe :{
        type: Boolean,
        default : false
    },
    bookmark :{
        type: Boolean,
        default : false
    }
});


module.exports = mongoose.model('fellowship',fellowshipSchema);