const express = require ('express');
const router =express.Router();
const mongoose =require('mongoose');

const benefitPack =require('../../models/benefitPacks');

router.get('/',(req,res,next)=>{
    
    benefitPack.find()
	.exec()
    .then(doc=> {
		console.log(doc);
		if(doc.length >0){
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
	
    const benefitPacks=new benefitPack({
		_id: new mongoose.Types.ObjectId,
		title: req.body.title,
        url : req.body.url,
        active : req.body.active,
        bookmark : req.body.bookmark
	});
	benefitPacks.save().then(result =>{
		console.log(result);
		res.status(201).json({
			message:'Handling POST Request to /benefitPacks',
			createdBenefitPacks: result
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