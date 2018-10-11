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
     * @see modules/log
     */
    debug: logger.debug,
    info: logger.info,
    log: logger.log,
    warn: logger.warn,
    error: logger.error,
};
