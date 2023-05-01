import {rps, rpsls} from './lib/rpsls.js'; //Import from a3
import minimist from "minimist"; //Import minimist packages
import express from "express"; //Import express packages
const argv = minimist(process.argv.slice(2))
const app = express();
const port = argv.port || 5000; //Initialize port to 5000 if not given
app.use(express.json());
app.use(express.urlencoded({extended: true}));
//Handle requests
app.get('/app', (req, res) => {
    res.status(200).send("200 OK").end(); //Approved message
});
app.get('/app/rps', (req, res) => {
    res.status(200).send(JSON.stringify(rps())).end();
});
app.get('/app/rpsls', (req, res) => {
    res.status(200).send(JSON.stringify(rpsls())).end();
});
app.get('/app/rps/play', (req, res) => {
    res.status(200).send(JSON.stringify(rps(req.query.shot))).end();
});
app.get('/app/rps/play/:shot', (req, res) => {
    res.status(200).send(JSON.stringify(rps(req.params.shot))).end();
});
app.post('/app/rps/play', (req, res) => {
    res.status(200).send(JSON.stringify(rps(req.body.shot))).end();
});
app.get('/app/rpsls/play/:shot', (req, res) => {
    res.status(200).send(JSON.stringify(rpsls(req.params.shot))).end();
});
app.get('/app/rpsls/play', (req, res) => {
    res.status(200).send(JSON.stringify(rpsls(req.query.shot))).end();
});
app.post('/app/rpsls/play', (req, res) => {
    res.status(200).send(JSON.stringify(rpsls(req.body.shot))).end();
});
app.get('/app/*', (req,res) =>{
    //Throw a 404 error for other inputs
    res.status(404).send("404 NOT FOUND");
});
app.listen(port);