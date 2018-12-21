const mongoose =require('mongoose');

const hackathonSchema = mongoose.Schema({
    
    _id: mongoose.Schema.Types.ObjectId,
    
    title : {
        type: String,
        required:true
    },
    url : {
        type: String,
        required:true
    },
    location : {
        type: String,
        required:true
    },
    date : {
        type: String
    },
    deadline : {
        type : String
    },
    type : {
        type: String,
        required:true
    },
    travelReimbursment : {
        /*
        Yes
        No
        Case by case basis
        */
        type:String,
    },
    subscribe : {
        type: Boolean,
        default : false
    },
    active : {
        type: Boolean,
        default : true
    },
    bookmark : {
        type: Boolean,
        default : false
    }
});


module.exports = mongoose.model('hackathon',hackathonSchema);