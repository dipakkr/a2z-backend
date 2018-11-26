/**
 * Schema for Fellowship Community
 * Author : Deepak Kumar (@dipakkr)
 * Date : 11/11/18
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FellowshipSchema = new Schema({
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
        type: Date
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

const FellowshipModel = mongoose.model('fellowships', FellowshipSchema);
module.exports = FellowshipModel;