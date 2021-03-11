const express = require('express');
const router = express.Router();

const newscontroller = require('../controllers/news');

router.get("/", newscontroller.searchNews);
module.exports = router;
