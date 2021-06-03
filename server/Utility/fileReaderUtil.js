"use strict";
exports.__esModule = true;
exports.getDataFromCSV = void 0;
var csv = require("csv-parser");
var fs = require("fs");
var dataFromCSV = [];
var getDataFromCSV = function () {
    fs.createReadStream('../data/MDB_movie_reviews_details.csv')
        .pipe(csv())
        .on("data", function (row) {
        dataFromCSV.push(row);
    })
        .on("end", function () {
        return dataFromCSV;
    });
};
exports.getDataFromCSV = getDataFromCSV;
