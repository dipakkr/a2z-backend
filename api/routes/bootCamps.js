const express = require ('express');
const router =express.Router();
const mongoose =require('mongoose');

const bootCamp =require('../../models/bootCamps');

router.get('/',(req,res,next)=>{
    
    bootCamp.find()
	.exec()
    .then(doc=> {
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
		res.status(502).json({err: err});
	});
});


router.post('/',(req,res,next)=>{
	
    const bootCamps=new bootCamp({
		title: req.body.title,
		url : req.body.url,
		location :req.body.location,
		scholarship :req.body.scholarship,
		field :req.body.field,
        active : req.body.active,
        bookmark : req.body.bookmark
	});
	bootCamps.save().then(result =>{
		res.status(201).json({
			message:'Handling POST Request to /bootCamps',
			createdBenefitPacks: result
		});
	})
	.catch(err => {
		res.status(500).json({
			error: err
		});
	});
	
});



module.exports =router;