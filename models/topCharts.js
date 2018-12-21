const mongoose =require('mongoose');

const TopChartSchema = mongoose.Schema({
    
    _id: mongoose.Schema.Types.ObjectId,
    
    name : {
        type : String, 
        required : true
    },
    url : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    category :{
        type : String, 
        required : true,
        enum : [
            'Person',
            'Website',
            'Books',
            'Blogs',
            'Others'
        ],
    },
    bookmark : {
        type : Boolean,
        default : false
    },
    active : {
        type : Boolean,
        default : true
    }
});


module.exports = mongoose.model('topCharts',TopChartSchema);