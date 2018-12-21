const express = require ('express');
const router =express.Router();
const mongoose =require('mongoose');

const socProgram =require('../../models/socPrograms');

router.get('/',(req,res,next)=>{
    
    socProgram.find()
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
	
    const socPrograms=new socProgram({
		_id: new mongoose.Types.ObjectId,
		title: req.body.title,
		url : req.body.url,
		incentives :req.body.incentives,
        bookmark:req.body.bookmark,
        subscribe : req.body.subscribe,
		active :req.body.active
        
	});
	socPrograms.save().then(result =>{
		console.log(result);
		res.status(201).json({
			message:'Handling POST Request to /socPrograms',
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