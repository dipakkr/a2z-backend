const mongoose =require('mongoose');

const socProgramsSchema = mongoose.Schema({
    
    _id: mongoose.Schema.Types.ObjectId,
    
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
    subscribe : {
        type : Boolean,
        default : false
    },
    active : {
        type : Boolean,
        default : true
    }
});

module.exports = mongoose.model('socPrograms',socProgramsSchema);