const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OpenSourceProgramSchema = new Schema({
    title :{
        type : String, 
        required : true
    },
    url : {
        type :String, 
        required : true
    },
    incentives : {
        /* Example
              - Prizes for winners
              - Stipend Available
        */
        type : String,
        required : true
    },
    bookmarks : {
        type: Boolean, 
        default :false
    },
    subscribe : {
        type : Boolean,
        default : false
    },
    active : {
        type : Boolean,
        default : true
    }
});

const OpenSourceProgramsModel = mongoose.model('opensource', OpenSourceProgramSchema);
module.exports = OpenSourceProgramsModel;
