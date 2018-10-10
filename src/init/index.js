/**
 * @memberof JsLogger
 * @function init
 * @description Return the message + ' world'
 * @param {Object} options (see attributes below)
 * @param {String} [options.enable=false] enable/disable log

 *
 * @example
 * // Initialize JsLogger
 *  JsLogger.init({
 *      enable: true
 *  });
 */

import Global from '../global';

export default (options) => {
    Global.enable = options.enable;
};