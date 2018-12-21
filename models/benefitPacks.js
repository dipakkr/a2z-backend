const mongoose =require('mongoose');

const benefitPacksSchema = mongoose.Schema({
    
    _id: mongoose.Schema.Types.ObjectId,
    
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
    bookmark :{
        type: Boolean,
        default : false
    }
});


module.exports = mongoose.model('benefitPacks',benefitPacksSchema);