/**
 * Welcome to GOD MODE
 * Please don't change any files without GOD permission.
 * Don't visit this section.
 */

const express = require('express');
const router = express.Router();
const CodingResources = require('../models/coding');
const HackathonModel = require('../models/hackathon');
const CompetitionModel = require('../models/competition');
const ConferenceModel = require('../models/conference');
const OpenSourceProgramsModel = require('../models/soc-programs');

//Home Page
router.get('/a2zhq?',(req, res, next)=>{
    res.render('index');
});

router.post('/a2zhq', (req, res)=>{ 
    var username = req.body.username;
    var password = req.body.password;
    if(username,password != null && username === 'admin@a2zhq' && password === 'admin'){
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
        .then((coding) => res.sendStatus(200));

    
    }else if(name === "hackathon"){
        const { 
            title, 
            url, 
            location,
            date,
            deadline,
            type,
            travelReimbursment
        } = req.body;
    
        HackathonModel.create({ title, url, location, date, deadline, type, travelReimbursment})
        .then((hackathon) =>res.send(hackathon))
        .catch(next);
    }else if(name === "competition"){
        const { 
            title, 
            url, 
            date,
            deadline,
            field,
            location
        } = req.body;
    
        CompetitionModel.create({ title, url, location, date, type, travelReimbursment})
        .then((competition) =>res.send(competition))
        .catch(next);
    }else if(name === "conference"){
        const { 
            title, 
            url, 
            date,
            deadline,
            field,
            location
        } = req.body;
    
        ConferenceModel.create({ title, url, location, date, type, travelReimbursment})
        .then((competition) =>res.send(competition))
        .catch(next);
    }else if(name === "opensource"){
        const { 
            title, 
            url, 
            incentives
        } = req.body;
    
        OpenSourceProgramsModel.create({ title, url, incentives})
        .then((docs) =>res.send(docs))
        .catch(next);
    }
    
});

router.get('/test', (req, res)=>{
    res.send({"message" : "Welcome to Test GOD MODE"})
});

module.exports = router;
