import {rps, rpsls} from '../lib/rpsls.js';
import minimist from "minimist";
import express from "express";
const argv = minimist(process.argv.slice(2))
const app = express();
const port = argv.port || 5000;
app.use(express.json());
app.use(express.urlencoded({extended: true}));