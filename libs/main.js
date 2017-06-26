const co = require('co');

function* logic(csvData, options) {
  try {
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
    return jsonData;
  } catch (e) {
    throw (e);
  }
}

function handler(csvData, callback) {
  co(logic(csvData))
    .then((data) => {
      console.log(data);
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