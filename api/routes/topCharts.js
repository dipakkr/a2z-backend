const express = require ('express');
const router =express.Router();
const mongoose =require('mongoose');

const topChart =require('../../models/topCharts');

router.get('/',(req,res,next)=>{
    
    topChart.find()
	.exec()
    .then(doc=> {
		console.log(doc);
		if(doc.length >=0){
			res.status(200).json(doc);
		}
		else{
			res.status(404).json({
				message:'data not available'
			});
		}
		
	})
    .catch(err=> {
		console.log(err);
		res.status(502).json({err: err});
	});
});


router.post('/',(req,res,next)=>{
	
    const topCharts=new topChart({
		_id: new mongoose.Types.ObjectId,
		name: req.body.name,
        url : req.body.url,
        description : req.body.description,
        category : req.body.category,
        bookmark : req.body.bookmark,
        active : req.body.active,
	});
	topCharts.save().then(result =>{
		console.log(result);
		res.status(201).json({
			message:'Handling POST Request to /topCharts',
			createdTopCharts: result
		});
	})
	.catch(err => {
		console.log(err);
		res.status(500).json({
			error: err
		});
	});
	
});



module.exports =router;