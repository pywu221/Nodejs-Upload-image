const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

const fs        = require('fs')
const    jade      = require('jade')
const    knox      = require('knox')
const    knoxCopy  = require('knox-copy')
const   http      = require('http')
const    Blitline  = require('blitline')


express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
