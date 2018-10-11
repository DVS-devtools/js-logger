/**
 * @class JsLogger
 * @description JsLogger is an advanced logger used for stable production build. You can set
 *  the enable value using the init function depending where you are.
 *
 * For example, using the node environment variables, you can decide to enable logger
 *  only in a stage environment and disable it while you are in a production environment.
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
