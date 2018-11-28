/**
 * Schema for Benefit Packs
 * Author : Deepak Kumar
 * Date : 26/11/18
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BenefitPackSchema = new Schema({
    title : {
        type: String,
        required:true
    },
    url :{
        type: String,
        required:true
    },
    active :{
        type: Boolean,
        default : true
    },
    bookmarks :{
        type: Boolean,
        default : false
    }
});

const BenefitPackModel = mongoose.model('benefit', BenefitPackSchema);
module.exports = BenefitPackModel;