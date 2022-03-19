const express = require('express');
const app = express();
const chalk = require('chalk'); 
const royalblue = chalk.hex('#3f51b5'); // Orange color
const pink = chalk.hex('e91e63');
const logSymbols = require('log-symbols');
const green = chalk.hex('4caf50')
var msg = "pneumonoultramicroscopicsilicovolcanoconiosis";    
app.get('/', (req, res) => {
    res.send(msg)
})
app.get('/api/:txt', (req, res) => {
    if(req.ip === "::ffff:127.0.0.1") {
        res.send('Sucess.')
        console.log(logSymbols.success + " " + req.params.txt)
        msg = req.params.txt
    }else{
        res.send('get the FUCK out')
        console.log(logSymbols.warning + " " + req.params.txt + " " + req.ip)

    }
})

app.listen(3000, () => console.log(logSymbols.success + `Conduit@vxnwtf has started sucessfully at ${royalblue.bold('http://localhost:3000')}`))