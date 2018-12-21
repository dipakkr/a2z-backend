const express = require ('express');
const router =express.Router();
const mongoose =require('mongoose');

const conferencee =require('../../models/conference');

router.get('/',(req,res,next)=>{
    
    conferencee.find()
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
	
    const conference=new conferencee({
		_id: new mongoose.Types.ObjectId,
		title: req.body.title,
		url : req.body.url,
		location :req.body.location,
        eventDate :req.body.eventDate,
        deadline :req.body.deadline,
        field :req.body.field,
        travelReimbursment:req.body.travelReimbursment,
        subscription :req.body.subscription,
		bookmark :req.body.bookmark,
        active : req.body.active
	});
	conference.save().then(result =>{
		console.log(result);
		res.status(201).json({
			message:'Handling POST Request to /Conference',
			conference: result
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