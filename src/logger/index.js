import Global from '../global';

export default {
    /**
     * @memberof JsLogger
     * @function debug
     * @description Debug log for debug logging
     * @param  [args] Any params you want to log as debug
     * @returns void

    *
    * @example
    * // Debug JsLogger
    *  JsLogger.debug(1, 'a', [1], {messasge: 'a message'}, true);
    */
    debug: (...args) => {
        if (Global.enable) {
            console.debug(args);
        }
    },

    /**
     * @memberof JsLogger
     * @function info
     * @description Info log for info logging
     * @param  [args] Any params you want to log as info
     * @returns void

    *
    * @example
    * // Info JsLogger
    *  JsLogger.info(1, 'a', [1], {messasge: 'a message'}, true);
    */
    info: (...args) => {
        if (Global.enable) {
            console.info(args);
        }
    },

    /**
     * @memberof JsLogger
     * @function log
     * @description Log log for log logging
     * @param  [args] Any params you want to log as log
     * @returns void

    *
    * @example
    * // Log JsLogger
    *  JsLogger.log(1, 'a', [1], {messasge: 'a message'}, true);
    */
    log: (...args) => {
        if (Global.enable) {
            console.log(args);
        }
    },

    /**
     * @memberof JsLogger
     * @function warn
     * @description Warn log for warn logging
     * @param  [args] Any params you want to log as warn
     * @returns void

    *
    * @example
    * // Warn JsLogger
    *  JsLogger.warn(1, 'a', [1], {messasge: 'a message'}, true);
    */
    warn: (...args) => {
        console.warn(args);
    },

    /**
     * @memberof JsLogger
     * @function error
     * @description Error log for error logging
     * @param  [args] Any params you want to log as error
     * @returns void

    *
    * @example
    * // Error JsLogger
    *  JsLogger.error(1, 'a', [1], {messasge: 'a message'}, true);
    */
    error: (...args) => {
        console.error(args);
    },
};