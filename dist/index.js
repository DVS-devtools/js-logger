// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"xFa0":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _default = {
  enable: true
};
exports.default = _default;
},{}],"W01G":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _global = _interopRequireDefault(require("../global"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @memberof JsLogger
 * @function init
 * @description Enable or disable logger for production environment. If set to false, only warnings 
 * and error will be logged.
 * @param {Object} options (see attributes below)
 * @param {String} [options.enable=false] enable/disable log

 *
 * @example
 * // Initialize JsLogger
 *  JsLogger.init({
 *      enable: true
 *  });
 */
var _default = function _default(options) {
  _global.default.enable = options.enable;
};

exports.default = _default;
},{"../global":"xFa0"}],"9SzV":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _global = _interopRequireDefault(require("../global"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
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
  debug: function debug() {
    if (_global.default.enable) {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      console.debug(args);
    }
  },

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
  info: function info() {
    if (_global.default.enable) {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      console.info(args);
    }
  },

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
  log: function log() {
    if (_global.default.enable) {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      console.log(args);
    }
  },

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
  warn: function warn() {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    console.warn(args);
  },

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
  error: function error() {
    for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
      args[_key5] = arguments[_key5];
    }

    console.error(args);
  }
};
exports.default = _default;
},{"../global":"xFa0"}],"Focm":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _init = _interopRequireDefault(require("./init"));

var _logger = _interopRequireDefault(require("./logger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @class JsLogger
 * @description JsLogger is an advanced logger used for stable production build. You can set
 *  the enable value using the init function depending where you are.
 *
 * For example, using the node environment variables, you can decide to enable logger
 *  only in a stage environment and disable it while you are in a production environment.
 */
var _default = {
  /**
   * @see modules/init
   */
  init: _init.default,

  /**
   * @see modules/debug
   */
  debug: _logger.default.debug,

  /**
   * @see modules/info
   */
  info: _logger.default.info,

  /**
   * @see modules/log
   */
  log: _logger.default.log,

  /**
   * @see modules/warn
   */
  warn: _logger.default.warn,

  /**
   * @see modules/error
   */
  error: _logger.default.error
};
exports.default = _default;
},{"./init":"W01G","./logger":"9SzV"}]},{},["Focm"], null)