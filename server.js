const express = require('express');
const app = express();

function rootHander (req, res){
    res.send('Hello World');
}
app.get('/', rootHander)
app.listen(9000)