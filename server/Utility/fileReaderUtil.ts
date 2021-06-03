import * as csv from "csv-parser";
import * as fs from 'fs';

const dataFromCSV = [];

export const getDataFromCSV = () => {
  fs.createReadStream('../data/MDB_movie_reviews_details.csv')
    .pipe(csv())
    .on("data", (row) => {
      dataFromCSV.push(row);
    })
    .on("end", () => {
      return dataFromCSV;
    });
};

