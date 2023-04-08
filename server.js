import {rps, rpsls} from './lib/rpsls.js';
import minimist from "minimist";
import express from "express";
const argv = minimist(process.argv.slice(2))
const app = express();
const port = argv.port || 5000;
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.get('/app', (req, res) => {
    res.status(200).send("200 OK").end();
});
app.get('/app/rps', (req, res) => {
    res.status(200).send(JSON.stringify(rps())).end();
});
app.get('/app/rpsls', (req, res) => {
    res.status(200).send(JSON.stringify(rpsls())).end();
});
app.get('/app/rps/play', (req, res) => {
    res.status(200).send(JSON.stringify(rps(req.body.shot))).end();
});
app.get('/app/rps/play/:shot', (req, res) => {
    res.status(200).send(JSON.stringify(rps(req.param.shot))).end();
});
app.post('/app/rps/play', (req, res) => {
    res.status(200).send(JSON.stringify(rps(req.body.shot))).end();
});
app.get('/app/rpsls/play', (req, res) => {
    res.status(200).send(JSON.stringify(rpsls(req.body.shot))).end();
});
app.get('/app/rpsls/play/:shot', (req, res) => {
    res.status(200).send(JSON.stringify(rpsls(req.param.shot))).end();
});
app.post('/app/rpsls/play', (req, res) => {
    res.status(200).send(JSON.stringify(rpsls(req.body.shot))).end();
});
app.get('/app/*', (req,res) =>{
    res.status(404).send("404 NOT FOUND");
});
app.listen(port);