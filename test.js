const main = require("./libs/main.js");
var data = `Scheme Code,ISIN Div Payout/ ISIN Growth,ISIN Div Reinvestment,Scheme Name,Net Asset Value,Repurchase Price,Sale Price,Date\n135762,INF846K01WO1,-,Axis Children's Gift Fund - Lock in - Direct Growth,11.8133,11.8133,11.8133,23-Jun-2017\n135760,INF846K01WK9,-,Axis Children's Gift Fund - Lock in - Dividend,11.5332,11.5332,11.5332,23-Jun-2017\n135759,INF846K01WJ1,-,Axis Children's Gift Fund - Lock in - Growth,11.5284,11.5284,11.5284,23-Jun-2017`;
main.csvToJson(data, {}, function (err, data) {
  if (err) throw err;
  console.log(`test case 1: passed with ${data.length} results`);
});

let filename = './sample.csv';
main.csvToJson(filename, { fromFile: true }, function (err, data) {
  if (err) throw err;
  console.log(`test case 2: passed with ${data.length} results`);
});

filename = './sample.csv';
main.csvToJson(filename, { fromFile: true, toFile: true }, function (err, data) {
  if (err) throw err;
  console.log(`test case 3: passed and created output file`);
});