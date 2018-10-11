/**
 * @class JsLogger
 * @description Description of your library
 */
import init from './init';
import logger from './logger';

export default {
    /**
     * @see modules/init
     */
    init,

    /**
     * @see modules/debug
     */
    debug: logger.debug,

    /**
     * @see modules/info
     */
    info: logger.info,

    /**
     * @see modules/log
     */
    log: logger.log,

    /**
     * @see modules/warn
     */
    warn: logger.warn,

    /**
     * @see modules/error
     */
    error: logger.error,
};
