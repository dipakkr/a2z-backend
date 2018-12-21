const express = require ('express');
const router =express.Router();
const mongoose =require('mongoose');

const meetupp =require('../../models/meetup');

router.get('/',(req,res,next)=>{
    
    meetupp.find()
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
	
    const meetup=new meetupp({
		_id: new mongoose.Types.ObjectId,
		title: req.body.title,
		url : req.body.url,
		location :req.body.location,
        type:req.body.type,
        active : req.body.active,
		bookmark :req.body.bookmark
        
	});
	meetup.save().then(result =>{
		console.log(result);
		res.status(201).json({
			message:'Handling POST Request to /meetup',
			meetup: result
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