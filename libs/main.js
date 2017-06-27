const co = require('co');
const { getDataFromFile } = require('./readFile');
const { saveDataToFile } = require('./writeFile');

function* logic(csv, options) {
  try {
    let csvData = csv;
    if (options.fromFile === true) {
      csvData = yield getDataFromFile(csv);
    }
    const records = yield csvData.split('\n');
    const n = records.length;
    const feildKeys = records[0].split(',');
    const jsonData = [];
    // skipping first element (which is having headings) 
    for (i = 1; i < n; i++) {
      const feildValues = yield records[i].split(',');
      const obj = {};
      feildValues.forEach(function (feildValue, index) {
        obj[feildKeys[index]] = feildValue;
      });
      jsonData.push(obj);
    }
    if (options.toFile === true) {
      return saveDataToFile(jsonData);
    }
    return jsonData;
  } catch (e) {
    throw (e);
  }
}

function handler(csvData, options, callback) {
  co(logic(csvData, options))
    .then((data) => {
      // console.log(data);
      callback(null, data);
    })
    .catch(err => {
      console.error(err);
      callback(err);
    });
}

module.exports = {
  csvToJson: handler
};