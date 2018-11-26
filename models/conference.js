const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ConferenceSchema = new Schema({
    title: {
        type: String,
        required:true
    },
    url: {
        type: String,
        required:true
    },
    location: {
        type: String,
        required:true
    },
    eventDate: {
        // DATE //
        type: String,
    },
    deadline : {
        // DATE //
        type : String,
    },
    field : {
        type : String,
        required : true 
    },
    travelReimbursment : {
        type : String,
        required : true
    },
    subscription: {
        type: Boolean,
        default : false
    },
    active : {
        type : Boolean,
        default : true
    },
    bookmark : {
        type : Boolean,
        default : false
    }
})

const ConferenceModel = mongoose.model('conference', ConferenceSchema);
module.exports = ConferenceModel;