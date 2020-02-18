const express = require('express');
const app = express();

//require('../resources/admin/admin.model');


const olx = require('../resources/olx/olx.routes');
const zap = require('../resources/zap/zap.routes');

app.use(olx);
app.use(zap);


module.exports =  app








