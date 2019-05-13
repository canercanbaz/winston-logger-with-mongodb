# winston-logger-with-mongodb
Node.js Logger with MongoDB support

### Requirements
* npm install winston
* npm install winston-mongodb

 The info messages will be rendered in **green**, and error ones will be in **red**.
 You should change the MongoDB connection URL. The part in the options - collection: 'logs' - is the collection name where the logs will be kept.
 
  There are 4 transports in the sample code. These are **MongoDB**, **File** (error.log for error logs), **File** (combined.log for both error and info logs), and **Console**. It automatically generates the files, and you can change the file names if you'd like to.

### Usage
```javascript
const Logger = require('./Logger');

Logger.info('user connected.');
Logger.error('error occurred.');
Logger.log('info', 'user connected.');
Logger.log('error', 'error occurred.');

```

### Output
![output](https://github.com/canercanbaz/winston-logger-with-mongodb/blob/master/output.png?raw=true)
