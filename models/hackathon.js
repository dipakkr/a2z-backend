const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HackathonSchema = new Schema({
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
})

const HackathonModel = mongoose.model('hackathon', HackathonSchema);
module.exports = HackathonModel;
