window["dhCookieConsent"] =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/App.es6");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App.es6":
/*!*********************!*\
  !*** ./src/App.es6 ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/style.scss */ "./src/scss/style.scss");
/* harmony import */ var _scss_style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_consent_box_es6__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/consent-box.es6 */ "./src/lib/consent-box.es6");
 // import `.scss` files

 // import UserList class

 // export default UserList class
// I used `defaultExport` to state that variable name doesn't matter

/* harmony default export */ __webpack_exports__["default"] = (_lib_consent_box_es6__WEBPACK_IMPORTED_MODULE_1__["dhCookieConsent"]); // module.defaultExport = (selector) => {
//     return new ddCookieConsent (selector);
// };

/***/ }),

/***/ "./src/lib/consent-box.es6":
/*!*********************************!*\
  !*** ./src/lib/consent-box.es6 ***!
  \*********************************/
/*! exports provided: dhCookieConsent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dhCookieConsent", function() { return dhCookieConsent; });
/* harmony import */ var _sessionHandler_es6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sessionHandler.es6 */ "./src/lib/sessionHandler.es6");
/* harmony import */ var _helper_es6__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper.es6 */ "./src/lib/helper.es6");
/* harmony import */ var _container_es6__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./container.es6 */ "./src/lib/container.es6");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// import dependencies



var dhCookieConsent = /*#__PURE__*/function () {
  function dhCookieConsent(settings) {
    _classCallCheck(this, dhCookieConsent);

    // load settings
    var helper = new _helper_es6__WEBPACK_IMPORTED_MODULE_1__["dhHelper"]();
    this.settings = helper.extend(settings);
    this.session = new _sessionHandler_es6__WEBPACK_IMPORTED_MODULE_0__["dhSessionHandler"](this.settings);

    if (!this.session.isConsentGiven()) {
      this.reset();
      this.createConsentBox();
    }
  }

  _createClass(dhCookieConsent, [{
    key: "reset",
    value: function reset() {
      var container = document.getElementById("dh_cookie_consent");

      if (container && typeof container != "undefined") {
        container.remove();
      }
    }
  }, {
    key: "createTag",
    value: function createTag(name, attrs, html) {
      var el = document.createElement(name.toString());
      !!attrs && Object.keys(attrs).forEach(function (key) {
        el.setAttribute(key, attrs[key]);
      });
      el.innerHTML = html;
      return el;
    }
  }, {
    key: "createConsentBox",
    value: function createConsentBox() {
      var _this = this;

      var Container = new _container_es6__WEBPACK_IMPORTED_MODULE_2__["dhContainer"]();
      var consentHtml = Container.getBasic(this.settings);
      Container.generateStyle(this.settings);
      var positionClass = Container.getPositionClass(this.settings); // Now create some DOM nodes

      this.container = this.createTag('div', {
        'id': 'dh_cookie_consent',
        'class': 'dh_cookie_consent_container ' + positionClass
      }, consentHtml);
      document.body.append(this.container);
      document.querySelector('#dh-cookie-accept').addEventListener('click', function (event) {
        _this.hideBox();
      });
    }
  }, {
    key: "hideBox",
    value: function hideBox() {
      this.session.setConsentAccepted();
      this.container.classList.add("dh_hide");
    }
  }]);

  return dhCookieConsent;
}();

/***/ }),

/***/ "./src/lib/container.es6":
/*!*******************************!*\
  !*** ./src/lib/container.es6 ***!
  \*******************************/
/*! exports provided: dhContainer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dhContainer", function() { return dhContainer; });
/* harmony import */ var _style_es6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.es6 */ "./src/lib/style.es6");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var dhContainer = /*#__PURE__*/function () {
  function dhContainer() {
    _classCallCheck(this, dhContainer);
  }

  _createClass(dhContainer, [{
    key: "getBasic",
    value: function getBasic(settings) {
      return "<div>\n                    <p class=\"dh_heading\">".concat(settings.heading.text, "</p>\n                    <p class=\"dh_message\">").concat(settings.message.text, "</p>\n                    <p class=\"dh_button_box\">\n                    <a class=\"dh_privacy_link\" href=\"").concat(settings.link.url, "\">").concat(settings.link.text, "</a>\n                    <button id=\"dh-cookie-accept\" class=\"dh_accept_button\" type=\"button\">").concat(settings.button.text, "</button>\n                    </p>\n                </div>");
    }
  }, {
    key: "getPositionClass",
    value: function getPositionClass(settings) {
      switch (settings.position) {
        case "top_left":
          return "dh_top_left";
          break;

        case "top_right":
          return "dh_top_right";
          break;

        case "bottom_left":
          return "dh_bottom_left";
          break;

        case "bottom_right":
        default:
          return "dh_bottom_right";
      }
    }
  }, {
    key: "generateStyle",
    value: function generateStyle(settings) {
      var cssGen = new _style_es6__WEBPACK_IMPORTED_MODULE_0__["dhStyleGenerator"](); // add background color

      if (settings.background) {
        cssGen.addStyle("#dh_cookie_consent", "background", settings.background);
      }

      if (settings.heading.color) {
        cssGen.addStyle("#dh_cookie_consent .dh_heading", "color", settings.heading.color);
      }

      if (settings.message.color) {
        cssGen.addStyle("#dh_cookie_consent .dh_message", "color", settings.message.color);
      }

      if (settings.button.color) {
        cssGen.addStyle("#dh_cookie_consent .dh_accept_button", "color", settings.button.color);
        cssGen.addStyle("#dh_cookie_consent .dh_accept_button", "background", settings.button.color);
      }

      if (settings.link.color) {
        cssGen.addStyle("#dh_cookie_consent .dh_privacy_link", "color", settings.link.color);
      }

      cssGen.appendStyle();
    }
  }]);

  return dhContainer;
}();

/***/ }),

/***/ "./src/lib/cookies.es6":
/*!*****************************!*\
  !*** ./src/lib/cookies.es6 ***!
  \*****************************/
/*! exports provided: dhCookies */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dhCookies", function() { return dhCookies; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var dhCookies = /*#__PURE__*/function () {
  function dhCookies() {
    _classCallCheck(this, dhCookies);
  }

  _createClass(dhCookies, [{
    key: "set",
    value: function set(name, value, path, days) {
      var expires = "";

      if (days) {
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
      }

      document.cookie = name + "=" + (value || "") + expires + "; path=" + path;
    }
  }, {
    key: "get",
    value: function get(name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(';');

      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];

        while (c.charAt(0) == ' ') {
          c = c.substring(1, c.length);
        }

        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
      }

      return null;
    }
  }, {
    key: "erase",
    value: function erase(name) {
      document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
    }
  }]);

  return dhCookies;
}();

/***/ }),

/***/ "./src/lib/helper.es6":
/*!****************************!*\
  !*** ./src/lib/helper.es6 ***!
  \****************************/
/*! exports provided: dhHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dhHelper", function() { return dhHelper; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var dhHelper = /*#__PURE__*/function () {
  function dhHelper() {
    _classCallCheck(this, dhHelper);
  }

  _createClass(dhHelper, [{
    key: "extend",
    value: function extend(settings) {
      return Object.assign({
        background: "",
        position: "bottom_right",
        cookie: {
          domain: "/",
          name: "cookie_consent",
          days: 30
        },
        border: {
          color: "",
          size: 0
        },
        heading: {
          text: "Cookies &amp; Privacy",
          color: ""
        },
        message: {
          text: "This website uses cookies and similar technologies to customize online\n              advertisements and for other purposes. Please see our Cookie Policy for\n              more information.",
          color: ""
        },
        link: {
          text: "Privacy Policy",
          url: "#",
          color: ""
        },
        button: {
          text: "Accept",
          color: "",
          background: ""
        }
      }, settings);
    }
  }]);

  return dhHelper;
}();

/***/ }),

/***/ "./src/lib/sessionHandler.es6":
/*!************************************!*\
  !*** ./src/lib/sessionHandler.es6 ***!
  \************************************/
/*! exports provided: dhSessionHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dhSessionHandler", function() { return dhSessionHandler; });
/* harmony import */ var _cookies_es6__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cookies.es6 */ "./src/lib/cookies.es6");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// import dependencies

var dhSessionHandler = /*#__PURE__*/function () {
  function dhSessionHandler(settings) {
    _classCallCheck(this, dhSessionHandler);

    this.cookie = new _cookies_es6__WEBPACK_IMPORTED_MODULE_0__["dhCookies"]();
    this.cookieName = settings.cookie.name;
    this.cookiePath = settings.cookie.path;
    this.expireTime = settings.cookie.days;
    this.cookieValue = "given";
  }

  _createClass(dhSessionHandler, [{
    key: "isConsentGiven",
    value: function isConsentGiven() {
      if (this.cookie.get(this.cookieName)) {
        return true;
      }

      return false;
    }
  }, {
    key: "setConsentAccepted",
    value: function setConsentAccepted() {
      this.cookie.set(this.cookieName, this.cookieValue, this.cookiePath, this.expireTime);
    }
  }]);

  return dhSessionHandler;
}();

/***/ }),

/***/ "./src/lib/style.es6":
/*!***************************!*\
  !*** ./src/lib/style.es6 ***!
  \***************************/
/*! exports provided: dhStyleGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dhStyleGenerator", function() { return dhStyleGenerator; });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var dhStyleGenerator = /*#__PURE__*/function () {
  function dhStyleGenerator() {
    _classCallCheck(this, dhStyleGenerator);

    this.style = {};
  }
  /* Function to add style element */


  _createClass(dhStyleGenerator, [{
    key: "appendStyle",
    value: function appendStyle() {
      if (document.getElementById("dh_consent_style")) {
        document.getElementById("dh_consent_style").remove();
      }

      var styleString = this.generateStyle();
      /* Create style document */

      var css = document.createElement('style');
      css.type = 'text/css';
      css.id = "dh_consent_style";
      if (css.styleSheet) css.styleSheet.cssText = styleString;else css.appendChild(document.createTextNode(styleString));
      /* Append style to the tag name */

      document.getElementsByTagName("head")[0].appendChild(css);
    }
  }, {
    key: "generateStyle",
    value: function generateStyle() {
      var styleString = "";
      Object.entries(this.style).forEach(function (entry) {
        var _entry = _slicedToArray(entry, 2),
            selector = _entry[0],
            styleProperties = _entry[1];

        styleString += " " + selector + "{";
        Object.entries(styleProperties).forEach(function (styleProperty) {
          var _styleProperty = _slicedToArray(styleProperty, 2),
              property = _styleProperty[0],
              value = _styleProperty[1];

          styleString += " " + property + ":" + value + "; ";
        });
        styleString += "} ";
      });
      return styleString;
    }
  }, {
    key: "addStyle",
    value: function addStyle($selector, $property, $value) {
      this.style[$selector] = {};
      this.style[$selector][$property] = $value;
    }
  }]);

  return dhStyleGenerator;
}();

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ })["default"];
//# sourceMappingURL=consent.js.map