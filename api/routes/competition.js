const express = require ('express');
const router =express.Router();
const mongoose =require('mongoose');

const competitionn =require('../../models/competition');

router.get('/',(req,res,next)=>{
    
    competitionn.find()
	.exec()
    .then(doc=> {
		console.log(doc);
		if(doc.length >0){
			res.status(200).json(doc);
		}
		else{
			res.status(404).json({
				message:'Data not available'
			});
		}
		
	})
    .catch(err=> {
		console.log(err);
		res.status(502).json({err: err});
	});
});


router.post('/',(req,res,next)=>{
	
    const competition=new competitionn({
		_id: new mongoose.Types.ObjectId,
		title: req.body.title,
		url : req.body.url,
		date :req.body.date,
        deadline :req.body.deadline,
        field :req.body.field,
        location :req.body.location,
        subscribe :req.body.subscribe,
		bookmark :req.body.bookmark,
        active : req.body.active
	});
	competition.save().then(result =>{
		console.log(result);
		res.status(201).json({
			message:'Handling POST Request to /Coding',
			createdCoding: result
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