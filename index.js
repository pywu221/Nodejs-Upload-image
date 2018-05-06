const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

var fs        = require('fs'),
    jade      = require('jade'),
    path      = require('path'),
    knox      = require('knox'),
    knoxCopy  = require('knox-copy'),
    http      = require('http'),
    Blitline  = require('blitline');

var amazon_url = 'http://s3.amazonaws.com/' + process.env.AWS_S3_BUCKET;
var knox_params = {
    key: process.env.AWS_ACCESS_KEY_ID.toString(),
    secret: process.env.AWS_SECRET_ACCESS_KEY.toString(),
    bucket: process.env.AWS_S3_BUCKET.toString()
  }

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
