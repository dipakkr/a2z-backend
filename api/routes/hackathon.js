const express = require ('express');
const router =express.Router();
const mongoose =require('mongoose');

const hackathonn =require('../../models/hackathon');

router.get('/',(req,res,next)=>{
    
    hackathonn.find()
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
	
    const hackathon=new hackathonn({
		_id: new mongoose.Types.ObjectId,
		title: req.body.title,
		url : req.body.url,
		location :req.body.location,
        date :req.body.date,
        deadline :req.body.deadline,
        type:req.body.type,
        travelReimbursment: req.body.travelReimbursment,
        subscribe :req.body.subscribe,
        active : req.body.active,
		bookmark :req.body.bookmark
        
	});
	hackathon.save().then(result =>{
		console.log(result);
		res.status(201).json({
			message:'Handling POST Request to /hackathon',
			hackathon: result
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