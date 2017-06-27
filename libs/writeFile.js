const co = require('co');
const fs = require('fs');

function logic(data) {
  return new Promise((resolve, reject) => {
    try {
      fs.writeFile('./output.json', JSON.stringify(data), function (err) {
        if (err) {
          reject(err);
        } else {
          resolve('File generated as output.json');
        }
      });
    } catch (e) {
      reject(e);
    }
  });
}

module.exports = {
  saveDataToFile: logic
};