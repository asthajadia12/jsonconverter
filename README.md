# jsonconverter
# A Nodejs module that converts csv to json.

Installation:
```bash
$ npm i jsonconverter
```

## API

.csvToJson(csvData, option, callback( err, data ){ })
   option parameter:
  - fromFile: set true if you are passing data through file.
  - toFile: : set true if you want output in the form of file. 

## Examples

Conversion of raw csv to raw json as output. 
```js
var jsonc = require('@asthajadia12/jsonconverter');

jsonc.csvToJson(csvData, {},
  function (err, data) {
      return data; // returns raw data
})
```

Conversion of csv file data to raw json as output.
```js
jsonc.csvToJson(csvFilePath, { fromFile: true },
  function (err, data) {
      return data; // returns raw data
})
```

Conversion of csv file data to json file as output.
```js
jsonc.csvToJson(csvFilePath, { fromFile: true, toFile: true },
  function (err, data) {
      return data; // returns output as output.json in currenct directory
})
```

License
----

MIT
