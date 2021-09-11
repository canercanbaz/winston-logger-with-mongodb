const winston = require('winston');
require('winston-mongodb');

/**
 * Writes logs to a file and a MongoDB collection.
 */
class Logger {
    constructor(){
        console.log(`Logger initiated: ${ new Date() }`);

        const MESSAGE = Symbol.for('message');	
        const jsonFormatter = (logEntry) => {	  
            const base = { timestamp: new Date() };	  
            const json = Object.assign(base, logEntry);
            logEntry[MESSAGE] = JSON.stringify(json);  
            return logEntry;	
        }

        const customFormat = winston.format.printf(function (info) {
            return `${ new Date() } - ${info.level} : ${info.message}`;
        });

        this.logger = winston.createLogger({
            format: winston.format(jsonFormatter)(),
            transports: [
                new winston.transports.MongoDB({
                    db: 'mongodb://localhost:27017/db',
                    collection: 'logs',
                    level: 'info',
                    capped: true,
                    options: {
                        useNewUrlParser: true,
                        autoReconnect: true
                    }
                }),
                new winston.transports.File({ filename: 'error.log', level: 'error', format: customFormat  }),
                new winston.transports.File({ filename: 'combined.log', format: customFormat }),
                new winston.transports.Console({ format: winston.format.combine(winston.format.colorize(), customFormat) })
            ]
          });
    }

    /**
     * Logs a message as an info 
     * @param {string} message - the message that will be logged
     */
    info(message){
        try {
            this.logger.info(message);
        } catch(err) {
            console.log(err);
        }
    }

    /**
     * Logs a message as an error 
     * @param {string} message - the message that will be logged
     */
    error(message){
        try {
            this.logger.error(message);
        } catch(err) {
            console.log(err);
        }
    }

    /**
     * Logs a message with the type of the message
     * @param {string} type - type of the message (info, error, debug)
     * @param {string} message - the message that will be logged
     */
    log(type, message){
        try {
            this.logger.log(type, message);
        } catch(err) {
            console.log(err);
        }
    }
}

module.exports = new Logger();