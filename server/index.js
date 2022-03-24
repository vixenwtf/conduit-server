const express = require('express');
const app = express();
const chalk = require('chalk'); 
const royalblue = chalk.hex('#3f51b5'); // Orange color
const pink = chalk.hex('e91e63');
const logSymbols = require('log-symbols');
const green = chalk.hex('4caf50')
const logUpdate = require('log-update');
const axios = require('axios');
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
        res.status(403).jsonp({ error: "Permission Denied. Your request has been logged to the server and has been acknowledged." })
        console.log(logSymbols.warning + " " + req.params.txt + " " + req.ip)

    }
})
app.get('/online', (req, res) => {
    res.send(true)
})
console.clear()
axios.get('https://api64.ipify.org?format=json')
  .then(function (response) {
    // handle success
    app.listen(3000, () => console.log(logSymbols.success + ` Conduit@vxnwtf has started sucessfully.\n ${logSymbols.info} URL ${royalblue.bold('http://localhost:3000')}\n ${logSymbols.info} IP: ${response.data.ip}\n`))
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });
