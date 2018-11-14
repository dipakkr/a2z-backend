/**
 * Welcome to GOD MODE
 * Please don't change any files without GOD permission.
 * Don't visit this section.
 */

const express = require('express');
const router = express.Router();
const CodingResources = require('../models/coding');
const HackathonModel = require('../models/hackathon');

//Home Page
router.get('/a2zhq?',(req, res, next)=>{
    res.render('index');
});

router.post('/a2zhq', (req, res)=>{ 
    var username = req.body.username;
    var password = req.body.password;
    if(username,password != null && username === 'admin@a2zhq' && password === 'admin'){
        //Login success
        res.render('dashboard');
    }
});

router.post('/dashboard/:name', (req, res, next) => {
    var name = req.params.name;
    
    if(name === "coding"){
    
        const { 
            title, 
            url, 
            diffcultyLevel, 
            tag 
        } = req.body;
        
        CodingResources.create({title, url, diffcultyLevel, tag})
        .then((coding) => res.send(coding));
    
    }else if(name === "hackathon"){
        const { 
            title, 
            url, 
            location,
            date,
            type,
            travelReimbursment
        } = req.body;
    
        HackathonModel.create({ title, url, location, date, type, travelReimbursment})
        .then((hackathon) =>res.send(hackathon))
        .catch(next);
    }
    
});

router.get('/test', (req, res)=>{
    res.send({"message" : "Welcome to Test GOD MODE"})
});

module.exports = router;
