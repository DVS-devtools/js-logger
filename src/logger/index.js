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

export default {
    debug: (...args) => {
        if (Global.enable) {
            console.debug(args);
        }
    },
    info: (...args) => {
        if (Global.enable) {
            console.info(args);
        }
    },
    log: (...args) => {
        if (Global.enable) {
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