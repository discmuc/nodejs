'use strict';

const logger = function(options) {
    let level = 'UNKOWN';
    if (options.level === 'info') {
        level = 'INFO';
    }
    return function(req, res, next) {
        console.log(`[${level}] ${req.method} ${req.path}`);
        next();
    };
};

module.exports = logger;
