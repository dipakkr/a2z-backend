const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CompetitonSchema = new Schema({

    title : {
        type: String,
        required:true
    },
    url : {
        type: String,
        required:true
    },
    date : {
        type: String
    },
    deadline : {
        type : String
    },
    field : {
        type: String,
        required:true
    },
    location : {
        type: String,
        required :true
    },
    subscribe : {
        type: Boolean,
        default : false
    },
    active : {
        type: Boolean,
        default : true
    },
    bookmarks : {
        type: Boolean,
        default : false
    }
})

const CompetitionModel = mongoose.model('competition', CompetitonSchema);
module.exports = CompetitionModel;


