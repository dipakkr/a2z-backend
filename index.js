const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const ejs = require('ejs');
const {mongoose} = require('./config/mongoose');
const godmode = require('./api/admin/index');

// routes 
const topCharts= require ('./api/routes/topCharts');
const benefitPacks= require ('./api/routes/benefitPacks');
const bootCamps= require ('./api/routes/bootCamps');
const coding= require ('./api/routes/coding');
const competition= require ('./api/routes/competition');
const conference= require ('./api/routes/conference');
const fellowship= require ('./api/routes/fellowship');
const hackathon= require ('./api/routes/hackathon');
const meetup= require ('./api/routes/meetup');
const socPrograms= require ('./api/routes/socPrograms');

// Defining port for server
var port = process.env.PORT || 3001

//Initialise express app
const app = express();

//View Engine
app.set('view engine', 'ejs');
app.use(express.static('./public'));

// parser request of content type  - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())
app.use(morgan('dev'));

app.use((req,res,next)=>{
	res.header("Access-Control-Allow-Origin","*"/*'http://frontbench.xyz'*/);
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept, Authorization"
		);
	if(req.method === 'OPTIONS'){
		res.header('Access-Control-Allow-Methods','PUT','POST,POST,GET,PATCH,DELETE');
		return res.status(200).json({});
	}
	next();
});


//Test API 
app.get('/test', (req, res)=>{
    res.json({ "message" : "API is working"});
});
 
//Initialise the routes

// Not working
app.use('/topCharts',topCharts);
app.use('/benefitpacks',benefitPacks);
app.use('/bootcamps',bootCamps);
app.use('/coding',coding);

// Working routes
app.use('/socPrograms',socPrograms);
app.use('/competition',competition);
app.use('/conference',conference);
app.use('/fellowship',fellowship);
app.use('/hackathon',hackathon);
app.use('/meetup',meetup);

app.use('/admin', godmode);

// start the server
app.listen(port, () => {
    console.log("Server is listening on port: " + port)
});