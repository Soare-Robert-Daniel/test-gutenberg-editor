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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);


/* eslint-disable react/prop-types */

/* eslint-disable react/react-in-jsx-scope */




var Recipe = function Recipe(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
    title: "Basics"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("p", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Configure the content', 'recipe'))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["TextControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Ingredients', 'recipe'),
    value: props.attributes.ingredients,
    onChange: function onChange(val) {
      return props.setAttributes({
        ingredients: val
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["TextControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Cooking Time', 'recipe'),
    value: props.attributes.cooking_time,
    onChange: function onChange(val) {
      return props.setAttributes({
        cooking_time: val
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["TextControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Utensils', 'recipe'),
    value: props.attributes.utensils,
    onChange: function onChange(val) {
      return props.setAttributes({
        utensils: val
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["SelectControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Cooking', 'recipe'),
    value: props.attributes.cooking_experience,
    options: [{
      value: 'beginner',
      label: 'Beginner'
    }, {
      value: 'intermidiate',
      label: 'Intermidate'
    }, {
      value: 'expert',
      label: 'Expert'
    }],
    onChange: function onChange(val) {
      return props.setAttributes({
        cooking_experience: val
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["SelectControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Meal Type', 'recipe'),
    value: props.attributes.meal_type,
    options: [{
      value: 'breakfast',
      label: 'Breakfast'
    }, {
      value: 'lunch',
      label: 'Lunch'
    }, {
      value: 'dinner',
      label: 'Dinner'
    }],
    onChange: function onChange(val) {
      return props.setAttributes({
        meal_type: val
      });
    }
  }))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["BlockControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["BlockAlignmentToolbar"], {
    value: props.attributes.block_alignment,
    onChange: function onChange(val) {
      props.setAttributes({
        block_alignment: val
      });
    }
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["AlignmentToolbar"], {
    value: props.attributes.text_alignment,
    onChange: function onChange(val) {
      props.setAttributes({
        text_alignment: val
      });
    }
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: props.className,
    style: {
      textAlign: props.attributes.text_alignment
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("ul", {
    className: "list-unstyled"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Ingredients', 'recipe'), ": "), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "ingredients-ph"
  }, props.attributes.ingredients)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Cooking Time', 'recipe'), ": "), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "cooking-time-ph"
  }, props.attributes.cooking_time)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Utensils', 'recipe'), ": "), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "utensils-ph"
  }, props.attributes.utensils)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Cooking Experience'), ": "), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "cooking-experience-ph"
  }, props.attributes.cooking_experience)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Meal Type', 'recipe'), ": "), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "meal-type-ph"
  }, props.attributes.meal_type)))));
};

/* harmony default export */ __webpack_exports__["default"] = (Recipe);

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _richtext_block__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./richtext-block */ "./src/richtext-block/index.js");
/* harmony import */ var _night_mode_block__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./night-mode-block */ "./src/night-mode-block/index.js");
/* eslint-disable react/react-in-jsx-scope */

/* eslint-disable react/display-name */

/* eslint-disable react/prop-types */
//import React from 'react';







Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])('tutorial/recipe', {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Recipe - Testing', 'gutenberg-examples'),
  icon: 'universal-access-alt',
  category: 'common',
  keywords: [Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])('Fooh', 'recipe')],
  support: {
    html: false
  },
  attributes: {
    ingredients: {
      type: 'string',
      source: 'text',
      selector: '.ingredients-ph'
    },
    cooking_time: {
      type: 'string',
      source: 'text',
      selector: '.cooking-time-ph'
    },
    utensils: {
      type: 'string',
      source: 'text',
      selector: '.utensils-ph'
    },
    cooking_experience: {
      type: 'string',
      source: 'text',
      selector: '.cooking-experience-ph',
      default: 'beginner'
    },
    meal_type: {
      type: 'string',
      source: 'text',
      selector: '.meal-type-ph',
      default: 'breakfast'
    },
    text_alignment: {
      type: 'string'
    },
    block_alignment: {
      type: 'string',
      default: 'wide'
    }
  },
  getEditWrapperProps: function getEditWrapperProps(_ref) {
    var block_alignment = _ref.block_alignment;

    if ('left' === block_alignment || 'right' === block_alignment || 'full' === block_alignment) {
      return {
        'data-align': block_alignment
      };
    }
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/night-mode-block/editor.scss":
/*!******************************************!*\
  !*** ./src/night-mode-block/editor.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/night-mode-block/icon.js":
/*!**************************************!*\
  !*** ./src/night-mode-block/icon.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("svg", {
  width: "20",
  height: "20",
  id: "Capa_1",
  "data-name": "Capa 1",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 19.96 19.96"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
  cx: "9.98",
  cy: "9.98",
  r: "9.98",
  fill: "#415870"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "M13.83,11.87a4.34,4.34,0,0,1-3.9-7.75l.08,0a.22.22,0,0,0-.07-.41,5.59,5.59,0,0,0-5.61,8,5.59,5.59,0,0,0,7.49,2.59,5.5,5.5,0,0,0,2.29-2.08.21.21,0,0,0-.28-.3Z",
  transform: "translate(-.02 -.02)",
  fill: "#feaf62"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "M8.63,4.17A1.32,1.32,0,0,1,7.31,5.49l-3.93,0a1.32,1.32,0,0,0-.94.39,1.31,1.31,0,0,0-.38.93A1.33,1.33,0,0,0,3.38,8.1H4.89a1.31,1.31,0,0,1,.93.38,1.32,1.32,0,0,1-.93,2.26H.28a.86.86,0,0,1-.23,0q0-.36,0-.72A9.94,9.94,0,0,1,3.07,2.82l4.24,0A1.32,1.32,0,0,1,8.63,4.17Z",
  transform: "translate(-.02 -.02)",
  fill: "#62788e"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "M20,10A10,10,0,0,1,19,14.24a1.24,1.24,0,0,1-.83-.38,1.32,1.32,0,0,1-.39-.94A1.32,1.32,0,0,0,16.5,11.6H15a1.32,1.32,0,0,1-.94-.39,1.31,1.31,0,0,1-.38-.93A1.32,1.32,0,0,1,15,9H16.5a1.33,1.33,0,0,0,1.32-1.32A1.33,1.33,0,0,1,19.15,6.3h.12A9.91,9.91,0,0,1,20,10Z",
  transform: "translate(-.02 -.02)",
  fill: "#62788e"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
  cx: "13.88",
  cy: "3.93",
  r: "0.35",
  fill: "#e8e4db"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
  cx: "12.35",
  cy: "7.13",
  r: "0.35",
  fill: "#e8e4db"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
  cx: "15",
  cy: "16.15",
  r: "0.35",
  fill: "#e8e4db"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
  cx: "9.84",
  cy: "1.55",
  r: "0.35",
  fill: "#e8e4db"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
  cx: "9.05",
  cy: "13.89",
  r: "0.35",
  fill: "#e8e4db"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
  cx: "4.06",
  cy: "14.61",
  r: "0.35",
  fill: "#e8e4db"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
  cx: "6.21",
  cy: "17.45",
  r: "0.35",
  fill: "#e8e4db"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
  cx: "12.34",
  cy: "13.12",
  r: "0.35",
  fill: "#e8e4db"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("circle", {
  cx: "6.87",
  cy: "7.44",
  r: "0.35",
  fill: "#e8e4db"
}), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("path", {
  d: "M16.46,5.6a3.6,3.6,0,0,0,1.09-.24,3.61,3.61,0,0,0-1.09-.25A3.6,3.6,0,0,0,16.22,4,3.61,3.61,0,0,0,16,5.11a3.61,3.61,0,0,0-1.09.25A3.6,3.6,0,0,0,16,5.6a3.54,3.54,0,0,0,.25,1.09A3.53,3.53,0,0,0,16.46,5.6Z",
  transform: "translate(-.02 -.02)",
  fill: "#feaf62"
})));

/***/ }),

/***/ "./src/night-mode-block/index.js":
/*!***************************************!*\
  !*** ./src/night-mode-block/index.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icon */ "./src/night-mode-block/icon.js");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/night-mode-block/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__);


/* eslint-disable react/prop-types */

/* eslint-disable react/react-in-jsx-scope */

/* eslint-disable react/display-name */







Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_5__["registerBlockType"])('udemy/night-mode', {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Night Mode', 'recipe'),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Content with night mode.', 'recipe'),
  category: 'common',
  icon: 'universal-access-alt',
  attributes: {
    night_mode: {
      type: 'boolean',
      default: false
    }
  },
  edit: function edit(props) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: props.className
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_6__["BlockControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["Toolbar"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["Tooltip"], {
      text: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Night mode', 'recipe')
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__["Button"], {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('components-icon-buton', 'components-toolbar__control', {
        'is-active': props.attributes.night_mode
      }),
      onClick: function onClick() {
        return props.setAttributes({
          night_mode: !props.attributes.night_mode
        });
      }
    }, _icon__WEBPACK_IMPORTED_MODULE_2__["default"])))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('content-example', {
        'night': props.attributes.night_mode
      })
    }, "This is an example of a block with night mode."));
  },
  save: function save(props) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('content-example', {
        'night': props.attributes.night_mode
      })
    }, "This is an example of a block with night mode."));
  }
});

/***/ }),

/***/ "./src/richtext-block/index.js":
/*!*************************************!*\
  !*** ./src/richtext-block/index.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);


/* eslint-disable no-undef */

/* eslint-disable react/prop-types */

/* eslint-disable react/react-in-jsx-scope */

/* eslint-disable react/display-name */



Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__["registerBlockType"])('tutorial/rich-text', {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Rich Text Example', 'recipe'),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Rich text example', 'recipe'),
  category: 'common',
  icon: 'universal-access-alt',
  attributes: {
    message: {
      type: 'array',
      source: 'children',
      selector: '.message-ctr'
    }
  },
  edit: function edit(props) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: props.className
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", null, "Rich Text Example Block"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["RichText"], {
      tagName: "div",
      multiline: "p",
      placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__["__"])('Add your content here.', 'recipe'),
      onChange: function onChange(val) {
        props.setAttributes({
          message: val
        });
      },
      value: props.attributes.message
    }));
  },
  save: function save(props) {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("h3", null, "Rich text"), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
      className: "message-ctr"
    }, props.attributes.message));
  }
});

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);


/* eslint-disable react/prop-types */

/* eslint-disable react/react-in-jsx-scope */


var RecipeSave = function RecipeSave(props) {
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "align".concat(props.attributes.block_alignment)
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("ul", {
    className: "list-unstyled",
    style: {
      textAlign: props.attributes.text_alignment
    }
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Ingredients', 'recipe'), ": "), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "ingredients-ph"
  }, props.attributes.ingredients)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Cooking Time', 'recipe'), ": "), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "cooking-time-ph"
  }, props.attributes.cooking_time)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Utensils', 'recipe'), ": "), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "utensils-ph"
  }, props.attributes.utensils)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Cooking Experience'), ": "), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "cooking-experience-ph"
  }, props.attributes.cooking_experience)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("li", null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("strong", null, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Meal Type', 'recipe'), ": "), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("span", {
    className: "meal-type-ph"
  }, props.attributes.meal_type))));
};

/* harmony default export */ __webpack_exports__["default"] = (RecipeSave);

/***/ }),

/***/ "@wordpress/block-editor":
/*!**********************************************!*\
  !*** external {"this":["wp","blockEditor"]} ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!*****************************************!*\
  !*** external {"this":["wp","blocks"]} ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!*********************************************!*\
  !*** external {"this":["wp","components"]} ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!******************************************!*\
  !*** external {"this":["wp","element"]} ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!***************************************!*\
  !*** external {"this":["wp","i18n"]} ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["wp"]["i18n"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map