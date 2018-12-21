const express = require ('express');
const router =express.Router();
const mongoose =require('mongoose');

const code =require('../../models/coding');

router.get('/',(req,res,next)=>{
    
    code.find()
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
	
    const coding=new code({
		_id: new mongoose.Types.ObjectId,
		title: req.body.title,
		url : req.body.url,
		diffcultyLevel :req.body.diffcultyLevel,
		tag :req.body.tag,
		bookmark :req.body.bookmark,
        active : req.body.active
	});
	coding.save().then(result =>{
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