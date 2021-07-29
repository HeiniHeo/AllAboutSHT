const express = require('express')
const router = express.Router()
const comment = require('./comment/comment')
router.use('/comment',comment)

module.exports = router