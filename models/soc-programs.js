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
    bookmark : {
        type: Boolean, 
        default :false
    },
    active : {
        type : Boolean,
        default : true
    }
});

const OpenSourceProgramsModel = mongoose.model('soc', OpenSourceProgramSchema);
module.exports = OpenSourceProgramsModel;
