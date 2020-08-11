const express = require('express');
const app = express();

app.use(express.static('/assets'));

var rootDirectory = __dirname;

app.get('/', (req, res)=> {
    res.sendFile(`${rootDirectory}/producer.html`);
})

app.listen(8080);