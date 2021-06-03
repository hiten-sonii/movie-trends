const express = require('express');
const { topRatedMovies, topRatedGenres, topGrossingMovies, topGrossingGenres, topGrossingYears } = require('../Controller/trends.controller');

const router = express.Router();

router.get('/topRatedMovies/:pageSize', topRatedMovies);
router.get('/topRatedGenres/:pageSize', topRatedMovies);
router.get('/topGrossingMovies/:pageSize', topRatedMovies);
router.get('/topGrossingGenres/:pageSize', topRatedMovies);
router.get('/topGrossingYears/:pageSize', topRatedMovies);

module.exports.TrendsRoute = router;
