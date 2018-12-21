const express = require ('express');
const router =express.Router();
const mongoose =require('mongoose');

const fellowshipp =require('../../models/fellowship');

router.get('/',(req,res,next)=>{
    
    fellowshipp.find()
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
	
    const fellowship=new fellowshipp({
		title: req.body.title,
		url : req.body.url,
		location :req.body.location,
        eligiblity :req.body.eligiblity,
        deadline :req.body.deadline,
        active : req.body.active,
        subscribe :req.body.subscribe,
		bookmark :req.body.bookmark
        
	});
	fellowship.save().then(result =>{
		res.status(201).json({
			message:'Handling POST Request to /fellowship',
			fellowship: result
		});
	})
	.catch(err => {
		res.status(500).json({
			error: err
		});
	});
	
});



module.exports =router;