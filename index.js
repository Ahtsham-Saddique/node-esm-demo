// const http = require('http');
 
import http from 'http';
import sum,{a} from './app.js';
import {mul} from './app.js';
import {div} from './app.js';
// import {a} from './app.js';

const server = http.createServer();
// const port =100;
console.log(a);


sum(2+3,80);
mul(2+3,80);
div(2+3,80);
let port =100;
server.listen(port,()=>{
    console.log(`server is running on port ${port}`)
});