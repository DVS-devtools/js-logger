import Global from '../global';

/**
 * @memberof JsLogger
 * @function logger
 * @description Logger implementation
 * @param {Object} options (see attributes below)
 * @param {String} [options.message=''] message to show
 * @returns void

 *
 * @example
 * // Log JsLogger
 *  JsLogger.log({
 *      message: 'hello'
 *  });
 */

let enableLogger = Global.enable;

if (!enableLogger) {
    try {
        enableLogger = window.localStorage.getItem('enable-logger');
    } catch (e) {
        console.warn(['LOGGER', 'Logger disabled']);
    }
}

export default {
    debug: (...args) => {
        if (enableLogger) {
            console.debug(args);
        }
    },
    info: (...args) => {
        if (enableLogger) {
            console.info(args);
        }
    },
    log: (...args) => {
        if (enableLogger) {
            console.log(args);
        }
    },
    warn: (...args) => {
        console.warn(args);
    },
    error: (...args) => {
        console.error(args);
    },
};