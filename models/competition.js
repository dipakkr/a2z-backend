const mongoose =require('mongoose');

const competitionSchema = mongoose.Schema({
    
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
    bookmark : {
        type: Boolean,
        default : false
    }
});


module.exports = mongoose.model('competition',competitionSchema);