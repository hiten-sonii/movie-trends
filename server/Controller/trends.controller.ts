const { getTopRatedMovies, getTopRatedGenres, getTopGrossingMovies, getTopGrossingGenres, getTopGrossingYears } = require('../Service/trends.service.ts');

const { errorMiddleware } = require('../Error/errorHandler');

const topRatedMovies = errorMiddleware(async (req, res) => {
  const response = await getTopRatedMovies(req.params.pageSize);
  res.send(response);
});

const topRatedGenres = errorMiddleware(async (req, res) => {
  const response = await getTopRatedGenres(req.params.pageSize);
  res.send(response);
});


const topGrossingGenres = errorMiddleware(async (req, res) => {
  const response = await getTopGrossingGenres(req.params.pageSize);
  res.send(response);
});

const topGrossingMovies = errorMiddleware(async (req, res) => {
  const response = await getTopGrossingMovies(req.params.pageSize);
  res.send(response);
});

const topGrossingYears = errorMiddleware(async (req, res) => {
  const response = await getTopGrossingYears(req.params.pageSize);
  res.send(response);
});

module.exports = { topRatedMovies, topGrossingGenres, topRatedGenres, topGrossingYears };
