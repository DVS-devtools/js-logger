import Global from '../global';

/**
 * @memberof JsLogger
 * @function debug
 * @description Debug message for debug logging
 * @param {any} [args] Any params you want to log as debug
 * @returns void
 *
 * @example
 * // Debug JsLogger
 *  JsLogger.debug(1, 'a', [1], {messasge: 'a message'}, true);
 */
export const debug = (...args) => {
    if (Global.enable) {
        console.debug(args);
    }
};


/**
 * @memberof JsLogger
 * @function info
 * @description Info message for info logging
 * @param {any} [args] Any params you want to log as info
 * @returns void

 *
 * @example
 * // Info JsLogger
 *  JsLogger.info(1, 'a', [1], {messasge: 'a message'}, true);
 */
export const info = (...args) => {
    if (Global.enable) {
        console.info(args);
    }
};


/**
 * @memberof JsLogger
 * @function log
 * @description Log message for log logging
 * @param {any} [args] Any params you want to log as log
 * @returns void

 *
 * @example
 * // Log JsLogger
 *  JsLogger.log(1, 'a', [1], {messasge: 'a message'}, true);
 */
export const log = (...args) => {
    if (Global.enable) {
        console.log(args);
    }
};


/**
 * @memberof JsLogger
 * @function warn
 * @description Warn message for warn logging
 * @param {any} [args] Any params you want to log as warn
 * @returns void

 *
 * @example
 * // Warn JsLogger
 *  JsLogger.warn(1, 'a', [1], {messasge: 'a message'}, true);
 */
export const warn = (...args) => {
    console.warn(args);
};


/**
 * @memberof JsLogger
 * @function error
 * @description Error message for error logging
 * @param {any} [args] Any params you want to log as error
 * @returns void

 *
 * @example
 * // Error JsLogger
 *  JsLogger.error(1, 'a', [1], {messasge: 'a message'}, true);
 */
export const error = (...args) => {
    console.error(args);
};