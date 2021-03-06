var express = require('express');
var router = express.Router();
var ObjectId = require('mongodb').ObjectID;
var Keyword = require('../models/keywordmodel');
var db = require('../database_config/db_connect');
var moment = require('moment');
const request = require('request');

exports.saveKeyword = function(req,res) {
  const keyword = new Keyword({
     keyword : req.body.keyword,
     created_date : moment().format('YYYY-MM-DD HH:mm:ss Z')
  });
  keyword.save().then(function(result) {
     console.log(result);
     res.status(200).json({
        success: 'keyword saved'
     });
  }).catch(error => {
     res.status(500).json({
        error: err
     });
  });
};

exports.search = function(req,res) {
   Keyword.find({keyword: req.body.keyword})
    .then(result => {
        res.send(result);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving data."
        });
    });
};

