const express = require('express');
const app = express();

app.use(express.static('/assets'));

const currentDirectory = __dirname;

app.get('/', (req, res)=> {
    res.sendFile(`${currentDirectory}/consumer.html`);
})

app.listen(9090);