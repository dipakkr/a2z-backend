const CodingResources = require('../models/coding');
const Hackathon = require('../models/hackathon');
const Competition = require('../models/competition');
const Conference = require('../models/conference');
const Fellowship = require('../models/fellowship');
const OpenSourcePrograms = require('../models/soc-programs');
const BootCamps = require('../models/bootcamp');
const Community = require('../models/meetup');
const TopChart = require('../models/topcharts');
const BenefitPacks = require('../models/benefitPacks');

const express = require('express');
const router = express.Router();

//Working
router.get('/coding',(req, res, next)=>{
    CodingResources.find({}).then((docs)=>{
        res.send(docs);
    },(e)=>{
        if(e) return res.status(404).send(e);
    });
})

//Working
router.get('/hackathon', (req, res,next)=>{
    Hackathon.find({}).then((docs)=>{
        res.send(docs);
    },(e)=>{
        if(e) return res.status(404).send(e);
    });
});

//Not Working
router.get('/competition', (req, res, next) =>{
    Competition.find({}).then((docs)=>{
        res.send(docs);
    },(e)=>{
        if(e) return res.status(404).send(e);
    });
});

//Working
router.get('/conference', (req, res,next)=>{
    Conference.find({}).then((docs)=>{
        res.send(docs);
    },(e)=>{
        if(e) return res.status(404).send(e);
    });
});

router.get('/fellowship', (req, res,next)=>{
    Fellowship.find({}).then((docs)=>{
        res.send(docs);
    },(e)=>{
        if(e) return res.status(404).send(e);
    });
});


router.get('/meetup', (req, res,next)=>{
    Community.find({}).then((docs)=>{
        res.send(docs);
    },(e)=>{
        if(e) return res.status(404).send(e);
    });
});

router.get('/opensource', (req, res, next)=>{
    OpenSourcePrograms.find({}).then((docs)=>{
        res.send(docs);
    },(e)=>{
        if(e) return res.status(404).send(e);
    });
});

router.get('/benefit', (req, res, next)=>{
    BenefitPacks.find({}).then((docs)=>{
        res.send(docs);
    },(e)=>{
        if(e) return res.status(404).send(e);
    });
});

router.get('/bootcamp', (req, res, next)=>{
    BootCamps.find({}).then((docs)=>{
        res.send(docs);
    },(e)=>{
        if(e) return res.status(404).send(e);
    })
});

router.get('/topcharts',(req, res,next)=>{
    TopChart.find({}).then((docs)=>{
        res.send(docs);
    },(e)=>{
        if(e) return res.status(404).send(e);
    });
}); 

// 10 .TESTING PURPOSE - /test
router.get('/testing',(req,res)=>{
    console.log(req);
});

module.exports = router;