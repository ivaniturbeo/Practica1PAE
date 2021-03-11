const express = require('express');
const { User } = require('./../models');
const router = express.Router();
const usersController = require('../controllers/users');

router.get('/', usersController.getAll );

router.get("/form", usersController.getPage);

router.post('/',usersController.uploadPhoto , usersController.insertUser);

module.exports=router;