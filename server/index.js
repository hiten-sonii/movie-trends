const express = require('express');
const cors = require('cors');
const app = express();

const { TrendsRoute } = require('./Routes/trends.route');

app.use('/trends', TrendsRoute);

const port = 5000;
app.use(cors);

app.listen(port, () => {
  console.log(`Listening at ${port}`);
});
