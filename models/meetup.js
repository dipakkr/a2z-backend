const mongoose =require('mongoose');

const meetupSchema = mongoose.Schema({
        
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
    },
    type:{
        type:String,
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

module.exports = mongoose.model('meetup',meetupSchema);