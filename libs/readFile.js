const co = require('co');
const fs = require('fs');

function logic(csvPath) {
  return new Promise((resolve, reject) => {
    try {
      fs.exists(csvPath, function (exists) {
        if (exists) {
          fs.readFile(csvPath, function (err, data) {
            if (err) {
              reject(err);
            } else {
              resolve(data.toString());
            }
          });
        } else {
          reject(new Error('file does not exists'));
        }
      });
    } catch (e) {
      reject(e);
    }
  });
}

module.exports = {
  getDataFromFile: logic
};