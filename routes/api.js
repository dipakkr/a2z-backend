const express = require('express');
const router = express.Router();
const CodingResources = require('../models/coding');
const Conference = require('../models/conference');
const Hackathon = require('../models/hackathon');
const Fellowship = require('../models/fellowship');

//  GET - /coding
router.get('/coding',(req, res, next)=>{
    CodingResources.find({}).then((docs)=>{
        res.send(docs);
    },(e)=>{
        if(e) return res.status(404).send(e);
    });
})
 
// GET - /conference
router.get('/conference', (req, res,next)=>{
    Conference.find({}).then((docs)=>{
        res.send(docs);
    },(e)=>{
        if(e) return res.status(404).send(e);
    });
});

// GET - /hackathon
router.get('/hackathon', (req, res,next)=>{
    Hackathon.find({}).then((docs)=>{
        res.send(docs);
    },(e)=>{
        if(e) return res.status(404).send(e);
    });
});

// GET - /hackathon
router.get('/hackathon', (req, res,next)=>{
    Hackathon.find({}).then((docs)=>{
        res.send(docs);
    },(e)=>{
        if(e) return res.status(404).send(e);
    });
});

// GET - /fellowship
router.get('/fellowship', (req, res,next)=>{
    Fellowship.find({}).then((docs)=>{
        res.send(docs);
    },(e)=>{
        if(e) return res.status(404).send(e);
    });
});


// GET - /open-source-programs
router.get('/open-source-programs', (req, res, next)=>{
    
});

module.exports = router;