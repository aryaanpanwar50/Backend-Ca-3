const express = require('express')
const route = express.Router()
const {createUser} = require('./controller')

route.post('/signup',createUser);

module.exports = route