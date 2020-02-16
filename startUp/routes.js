const express = require('express');
const app = express();

//require('../resources/admin/admin.model');


const olx = require('../resources/olx/olx.routes');

app.use(olx);


module.exports =  app








