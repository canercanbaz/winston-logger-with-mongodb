# winston-logger-with-mongodb
Node.js Logger with MongoDB support

### Requirements
* npm install winston
* npm install winston-mongodb

 The info messages will be rendered in **green**, and error ones will be in **red**.


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
