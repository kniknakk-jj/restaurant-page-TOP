/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* src/styles.css */\n* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    font-family: Arial, sans-serif;\n    line-height: 1.6;\n    background-color: #f8f9fa;\n}\n\nheader {\n    background-color: #333;\n    padding: 1rem 0;\n    box-shadow: 0 2px 5px rgba(0,0,0,0.1);\n}\n\nnav {\n    max-width: 1200px;\n    margin: 0 auto;\n    padding: 0 2rem;\n    display: flex;\n    justify-content: center;\n    gap: 2rem;\n}\n\nnav button {\n    background: none;\n    border: none;\n    color: white;\n    padding: 0.5rem 1rem;\n    font-size: 1rem;\n    cursor: pointer;\n    transition: background-color 0.3s ease;\n    border-radius: 4px;\n}\n\nnav button:hover {\n    background-color: #555;\n}\n\nnav button.active {\n    background-color: #007bff;\n}\n\n#content {\n    max-width: 1200px;\n    margin: 2rem auto;\n    padding: 0 2rem;\n    min-height: 400px;\n    background-color: white;\n    border-radius: 8px;\n    box-shadow: 0 2px 10px rgba(0,0,0,0.1);\n    padding: 2rem;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadAboutPage: () => (/* binding */ loadAboutPage)\n/* harmony export */ });\nfunction loadAboutPage() {\n  var contentDiv = document.getElementById('content');\n\n  // Clear existing content\n  contentDiv.innerHTML = '';\n\n  // Create main container\n  var aboutContainer = document.createElement('div');\n  aboutContainer.style.cssText = 'max-width: 900px; margin: 0 auto;';\n\n  // Create page title\n  var title = document.createElement('h1');\n  title.textContent = 'About Bella Vista';\n  title.style.cssText = 'text-align: center; color: #333; margin-bottom: 2rem; font-size: 2.5rem;';\n  aboutContainer.appendChild(title);\n\n  // Create hero section\n  var heroSection = document.createElement('div');\n  heroSection.style.cssText = 'text-align: center; margin-bottom: 3rem;';\n  var heroText = document.createElement('p');\n  heroText.textContent = 'A culinary journey that began with passion and continues with excellence.';\n  heroText.style.cssText = 'font-size: 1.3rem; color: #666; font-style: italic;';\n  heroSection.appendChild(heroText);\n  aboutContainer.appendChild(heroSection);\n\n  // Create story section\n  var storySection = document.createElement('div');\n  storySection.style.cssText = 'margin-bottom: 3rem;';\n  var storyTitle = document.createElement('h2');\n  storyTitle.textContent = 'Our Story';\n  storyTitle.style.cssText = 'color: #007bff; font-size: 2rem; margin-bottom: 1rem; text-align: center;';\n  storySection.appendChild(storyTitle);\n  var storyContent = document.createElement('div');\n  storyContent.style.cssText = 'background-color: #f8f9fa; padding: 2rem; border-radius: 8px; border-left: 4px solid #007bff;';\n  var storyParagraphs = ['Founded in 1985 by Chef Marco Bellavista, our restaurant has been a cornerstone of authentic Italian cuisine for nearly four decades. What started as a small family trattoria has grown into one of the city\\'s most beloved dining destinations.', 'Chef Marco\\'s vision was simple: bring the warmth and flavors of his grandmother\\'s kitchen to every guest. Using recipes passed down through generations and the finest imported ingredients from Italy, we create dishes that honor tradition while embracing innovation.', 'Today, under the guidance of Chef Marco\\'s daughter, Chef Isabella, we continue to evolve while staying true to our roots. Every dish tells a story, every meal creates a memory, and every guest becomes part of our extended family.'];\n  storyParagraphs.forEach(function (paragraph) {\n    var p = document.createElement('p');\n    p.textContent = paragraph;\n    p.style.cssText = 'color: #555; line-height: 1.8; margin-bottom: 1.5rem; font-size: 1.1rem;';\n    storyContent.appendChild(p);\n  });\n  storySection.appendChild(storyContent);\n  aboutContainer.appendChild(storySection);\n\n  // Create team section\n  var teamSection = document.createElement('div');\n  teamSection.style.cssText = 'margin-bottom: 3rem;';\n  var teamTitle = document.createElement('h2');\n  teamTitle.textContent = 'Meet Our Team';\n  teamTitle.style.cssText = 'color: #007bff; font-size: 2rem; margin-bottom: 2rem; text-align: center;';\n  teamSection.appendChild(teamTitle);\n  var teamGrid = document.createElement('div');\n  teamGrid.style.cssText = 'display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem;';\n  var teamMembers = [{\n    name: 'Chef Isabella Bellavista',\n    role: 'Head Chef & Owner',\n    description: 'Third-generation chef carrying on the family tradition with innovative flair.'\n  }, {\n    name: 'Antonio Rossi',\n    role: 'Sous Chef',\n    description: 'Trained in Milan, Antonio brings authentic Italian techniques to every dish.'\n  }, {\n    name: 'Maria Santos',\n    role: 'Pastry Chef',\n    description: 'Award-winning pastry chef specializing in traditional Italian desserts.'\n  }];\n  teamMembers.forEach(function (member) {\n    var memberCard = document.createElement('div');\n    memberCard.style.cssText = 'background-color: #f8f9fa; padding: 1.5rem; border-radius: 8px; text-align: center; border-top: 4px solid #007bff;';\n    var memberName = document.createElement('h3');\n    memberName.textContent = member.name;\n    memberName.style.cssText = 'color: #333; margin-bottom: 0.5rem; font-size: 1.3rem;';\n    memberCard.appendChild(memberName);\n    var memberRole = document.createElement('p');\n    memberRole.textContent = member.role;\n    memberRole.style.cssText = 'color: #007bff; font-weight: bold; margin-bottom: 1rem; font-size: 1rem;';\n    memberCard.appendChild(memberRole);\n    var memberDescription = document.createElement('p');\n    memberDescription.textContent = member.description;\n    memberDescription.style.cssText = 'color: #666; line-height: 1.6; font-size: 0.95rem;';\n    memberCard.appendChild(memberDescription);\n    teamGrid.appendChild(memberCard);\n  });\n  teamSection.appendChild(teamGrid);\n  aboutContainer.appendChild(teamSection);\n\n  // Create values section\n  var valuesSection = document.createElement('div');\n  var valuesTitle = document.createElement('h2');\n  valuesTitle.textContent = 'Our Values';\n  valuesTitle.style.cssText = 'color: #007bff; font-size: 2rem; margin-bottom: 1.5rem; text-align: center;';\n  valuesSection.appendChild(valuesTitle);\n  var valuesGrid = document.createElement('div');\n  valuesGrid.style.cssText = 'display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem;';\n  var values = [{\n    title: 'Quality',\n    description: 'Only the finest ingredients make it to your plate'\n  }, {\n    title: 'Tradition',\n    description: 'Honoring authentic Italian culinary heritage'\n  }, {\n    title: 'Innovation',\n    description: 'Constantly evolving while respecting our roots'\n  }, {\n    title: 'Family',\n    description: 'Every guest is welcomed as part of our famiglia'\n  }];\n  values.forEach(function (value) {\n    var valueCard = document.createElement('div');\n    valueCard.style.cssText = 'background-color: #e7f3ff; padding: 1.5rem; border-radius: 8px; text-align: center;';\n    var valueTitle = document.createElement('h3');\n    valueTitle.textContent = value.title;\n    valueTitle.style.cssText = 'color: #007bff; margin-bottom: 0.5rem; font-size: 1.2rem;';\n    valueCard.appendChild(valueTitle);\n    var valueDescription = document.createElement('p');\n    valueDescription.textContent = value.description;\n    valueDescription.style.cssText = 'color: #0056b3; margin: 0; font-size: 0.95rem;';\n    valueCard.appendChild(valueDescription);\n    valuesGrid.appendChild(valueCard);\n  });\n  valuesSection.appendChild(valuesGrid);\n  aboutContainer.appendChild(valuesSection);\n  contentDiv.appendChild(aboutContainer);\n}\n\n//# sourceURL=webpack://restaurant-page/./src/about.js?\n}");

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadContactPage: () => (/* binding */ loadContactPage)\n/* harmony export */ });\nfunction loadContactPage() {\n  var contentDiv = document.getElementById('content');\n\n  // Clear existing content\n  contentDiv.innerHTML = '';\n\n  // Create main container\n  var contactContainer = document.createElement('div');\n  contactContainer.style.cssText = 'max-width: 800px; margin: 0 auto;';\n\n  // Create page title\n  var title = document.createElement('h1');\n  title.textContent = 'Contact Us';\n  title.style.cssText = 'text-align: center; color: #333; margin-bottom: 2rem; font-size: 2.5rem;';\n  contactContainer.appendChild(title);\n\n  // Create subtitle\n  var subtitle = document.createElement('p');\n  subtitle.textContent = 'We would love to hear from you. Get in touch for reservations or any questions.';\n  subtitle.style.cssText = 'text-align: center; color: #666; font-size: 1.2rem; margin-bottom: 3rem; line-height: 1.6;';\n  contactContainer.appendChild(subtitle);\n\n  // Create contact info and form container\n  var contentWrapper = document.createElement('div');\n  contentWrapper.style.cssText = 'display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; margin-bottom: 3rem;';\n\n  // Contact Information Section\n  var infoSection = document.createElement('div');\n  infoSection.style.cssText = 'background-color: #f8f9fa; padding: 2rem; border-radius: 8px; border-left: 4px solid #007bff;';\n  var infoTitle = document.createElement('h2');\n  infoTitle.textContent = 'Restaurant Information';\n  infoTitle.style.cssText = 'color: #007bff; margin-bottom: 1.5rem; font-size: 1.5rem;';\n  infoSection.appendChild(infoTitle);\n  var contactDetails = [{\n    label: 'Address',\n    value: '123 Culinary Street, Food District, City 12345'\n  }, {\n    label: 'Phone',\n    value: '(555) 123-4567'\n  }, {\n    label: 'Email',\n    value: 'info@bellavista.com'\n  }, {\n    label: 'Hours',\n    value: 'Mon-Thu: 5:00 PM - 10:00 PM\\nFri-Sat: 5:00 PM - 11:00 PM\\nSun: 4:00 PM - 9:00 PM'\n  }];\n  contactDetails.forEach(function (detail) {\n    var detailDiv = document.createElement('div');\n    detailDiv.style.cssText = 'margin-bottom: 1rem;';\n    var label = document.createElement('strong');\n    label.textContent = detail.label + ': ';\n    label.style.cssText = 'color: #333; display: block; margin-bottom: 0.3rem;';\n    var value = document.createElement('span');\n    value.textContent = detail.value;\n    value.style.cssText = 'color: #666; white-space: pre-line;';\n    detailDiv.appendChild(label);\n    detailDiv.appendChild(value);\n    infoSection.appendChild(detailDiv);\n  });\n\n  // Contact Form Section\n  var formSection = document.createElement('div');\n  var formTitle = document.createElement('h2');\n  formTitle.textContent = 'Send us a Message';\n  formTitle.style.cssText = 'color: #007bff; margin-bottom: 1.5rem; font-size: 1.5rem;';\n  formSection.appendChild(formTitle);\n  var form = document.createElement('form');\n  form.style.cssText = 'display: flex; flex-direction: column; gap: 1rem;';\n\n  // Form fields\n  var formFields = [{\n    type: 'text',\n    name: 'name',\n    placeholder: 'Your Name',\n    required: true\n  }, {\n    type: 'email',\n    name: 'email',\n    placeholder: 'Your Email',\n    required: true\n  }, {\n    type: 'tel',\n    name: 'phone',\n    placeholder: 'Phone Number',\n    required: false\n  }, {\n    type: 'textarea',\n    name: 'message',\n    placeholder: 'Your Message',\n    required: true,\n    rows: 5\n  }];\n  formFields.forEach(function (field) {\n    var input;\n    if (field.type === 'textarea') {\n      input = document.createElement('textarea');\n      input.rows = field.rows;\n    } else {\n      input = document.createElement('input');\n      input.type = field.type;\n    }\n    input.name = field.name;\n    input.placeholder = field.placeholder;\n    input.required = field.required;\n    input.style.cssText = 'padding: 0.75rem; border: 1px solid #ddd; border-radius: 4px; font-size: 1rem; font-family: inherit; resize: vertical;';\n    form.appendChild(input);\n  });\n\n  // Submit button\n  var submitButton = document.createElement('button');\n  submitButton.type = 'submit';\n  submitButton.textContent = 'Send Message';\n  submitButton.style.cssText = 'background-color: #007bff; color: white; padding: 0.75rem 1.5rem; border: none; border-radius: 4px; font-size: 1rem; cursor: pointer; transition: background-color 0.3s ease;';\n  submitButton.addEventListener('mouseenter', function () {\n    submitButton.style.backgroundColor = '#0056b3';\n  });\n  submitButton.addEventListener('mouseleave', function () {\n    submitButton.style.backgroundColor = '#007bff';\n  });\n\n  // Form submission handler\n  form.addEventListener('submit', function (e) {\n    e.preventDefault();\n    alert('Thank you for your message! We will get back to you soon.');\n    form.reset();\n  });\n  form.appendChild(submitButton);\n  formSection.appendChild(form);\n  contentWrapper.appendChild(infoSection);\n  contentWrapper.appendChild(formSection);\n  contactContainer.appendChild(contentWrapper);\n\n  // Add reservation note\n  var reservationNote = document.createElement('div');\n  reservationNote.style.cssText = 'background-color: #e7f3ff; padding: 1.5rem; border-radius: 8px; border-left: 4px solid #007bff; text-align: center;';\n  var noteTitle = document.createElement('h3');\n  noteTitle.textContent = 'Reservations';\n  noteTitle.style.cssText = 'color: #007bff; margin-bottom: 0.5rem;';\n  var noteText = document.createElement('p');\n  noteText.textContent = 'For immediate reservations, please call us directly. We recommend booking in advance for weekend dining.';\n  noteText.style.cssText = 'color: #0056b3; margin: 0;';\n  reservationNote.appendChild(noteTitle);\n  reservationNote.appendChild(noteText);\n  contactContainer.appendChild(reservationNote);\n  contentDiv.appendChild(contactContainer);\n}\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?\n}");

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadHomePage: () => (/* binding */ loadHomePage)\n/* harmony export */ });\nfunction loadHomePage() {\n  var contentDiv = document.getElementById('content');\n\n  // Clear existing content\n  contentDiv.innerHTML = '';\n\n  // Create and append the restaurant image\n  var img = document.createElement('img');\n  img.src = 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80';\n  img.alt = 'Restaurant interior';\n  img.style.cssText = 'width: 100%; max-width: 800px; height: 400px; object-fit: cover; border-radius: 8px; margin: 0 auto 2rem auto; display: block;';\n  contentDiv.appendChild(img);\n\n  // Create and append the main headline\n  var headline = document.createElement('h1');\n  headline.textContent = 'Bella Vista Restaurant';\n  headline.style.cssText = 'color: #333; margin-bottom: 1rem; text-align: center;';\n  contentDiv.appendChild(headline);\n\n  // Create a container div for the text content\n  var textContainer = document.createElement('div');\n  textContainer.style.cssText = 'max-width: 700px; margin: 0 auto; text-align: center; line-height: 1.8;';\n\n  // Create and append the first paragraph\n  var paragraph1 = document.createElement('p');\n  paragraph1.textContent = 'Experience culinary excellence in the heart of the city. Our passionate chefs craft each dish with the finest ingredients, creating unforgettable flavors that celebrate both tradition and innovation.';\n  paragraph1.style.cssText = 'font-size: 1.2rem; margin-bottom: 1.5rem; color: #555;';\n  textContainer.appendChild(paragraph1);\n\n  // Create and append the second paragraph\n  var paragraph2 = document.createElement('p');\n  paragraph2.textContent = 'Since 1985, Bella Vista has been a cornerstone of fine dining, offering an intimate atmosphere perfect for romantic dinners, business meetings, or special celebrations. Our carefully curated wine selection and attentive service ensure every visit is memorable.';\n  paragraph2.style.cssText = 'margin-bottom: 1.5rem; color: #666;';\n  textContainer.appendChild(paragraph2);\n\n  // Create and append the quote paragraph\n  var quote = document.createElement('p');\n  quote.textContent = '\"Where every meal is a celebration of flavor, and every guest is family.\"';\n  quote.style.cssText = 'color: #666; font-style: italic;';\n  textContainer.appendChild(quote);\n\n  // Append the text container to the main content div\n  contentDiv.appendChild(textContainer);\n}\n\n//# sourceURL=webpack://restaurant-page/./src/homepage.js?\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _homepage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage.js */ \"./src/homepage.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _about_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about.js */ \"./src/about.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n// src/index.js\n\n\n\n\n\n\n// Initialize the app when DOM is loaded\ndocument.addEventListener('DOMContentLoaded', function () {\n  // Load homepage content initially\n  (0,_homepage_js__WEBPACK_IMPORTED_MODULE_1__.loadHomePage)();\n\n  // Set up navigation functionality\n  initializeNavigation();\n});\nfunction initializeNavigation() {\n  var navButtons = document.querySelectorAll('.nav-btn');\n  navButtons.forEach(function (button) {\n    button.addEventListener('click', function () {\n      // Remove active class from all buttons\n      navButtons.forEach(function (btn) {\n        return btn.classList.remove('active');\n      });\n\n      // Add active class to clicked button\n      this.classList.add('active');\n\n      // Get the tab name\n      var tab = this.getAttribute('data-tab');\n\n      // Clear current content and load new tab content\n      clearContent();\n      handleNavigation(tab);\n    });\n  });\n}\nfunction clearContent() {\n  var contentDiv = document.getElementById('content');\n  contentDiv.innerHTML = '';\n}\nfunction handleNavigation(tab) {\n  switch (tab) {\n    case 'home':\n      (0,_homepage_js__WEBPACK_IMPORTED_MODULE_1__.loadHomePage)();\n      break;\n    case 'menu':\n      (0,_menu_js__WEBPACK_IMPORTED_MODULE_2__.loadMenuPage)();\n      break;\n    case 'about':\n      (0,_about_js__WEBPACK_IMPORTED_MODULE_3__.loadAboutPage)();\n      break;\n    case 'contact':\n      (0,_contact_js__WEBPACK_IMPORTED_MODULE_4__.loadContactPage)();\n      break;\n    default:\n      (0,_homepage_js__WEBPACK_IMPORTED_MODULE_1__.loadHomePage)();\n  }\n}\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?\n}");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadMenuPage: () => (/* binding */ loadMenuPage)\n/* harmony export */ });\nfunction loadMenuPage() {\n  var contentDiv = document.getElementById('content');\n\n  // Clear existing content\n  contentDiv.innerHTML = '';\n\n  // Create main container\n  var menuContainer = document.createElement('div');\n  menuContainer.style.cssText = 'max-width: 900px; margin: 0 auto;';\n\n  // Create page title\n  var title = document.createElement('h1');\n  title.textContent = 'Our Menu';\n  title.style.cssText = 'text-align: center; color: #333; margin-bottom: 2rem; font-size: 2.5rem;';\n  menuContainer.appendChild(title);\n\n  // Create menu sections\n  var menuSections = [{\n    title: 'Appetizers',\n    items: [{\n      name: 'Bruschetta Trio',\n      description: 'Three varieties of our signature bruschetta with fresh basil',\n      price: '$12'\n    }, {\n      name: 'Calamari Fritti',\n      description: 'Crispy squid rings served with marinara and aioli',\n      price: '$14'\n    }, {\n      name: 'Antipasto Board',\n      description: 'Selection of Italian meats, cheeses, and marinated vegetables',\n      price: '$18'\n    }]\n  }, {\n    title: 'Main Courses',\n    items: [{\n      name: 'Osso Buco',\n      description: 'Braised veal shanks with saffron risotto and gremolata',\n      price: '$32'\n    }, {\n      name: 'Seafood Linguine',\n      description: 'Fresh pasta with mussels, clams, and shrimp in white wine sauce',\n      price: '$28'\n    }, {\n      name: 'Bistecca Fiorentina',\n      description: 'Grilled T-bone steak with roasted vegetables and herb butter',\n      price: '$38'\n    }]\n  }, {\n    title: 'Desserts',\n    items: [{\n      name: 'Tiramisu',\n      description: 'Classic Italian dessert with espresso-soaked ladyfingers',\n      price: '$9'\n    }, {\n      name: 'Panna Cotta',\n      description: 'Vanilla bean custard with seasonal berry compote',\n      price: '$8'\n    }, {\n      name: 'Gelato Selection',\n      description: 'Three scoops of house-made gelato',\n      price: '$7'\n    }]\n  }];\n  menuSections.forEach(function (section) {\n    // Create section container\n    var sectionDiv = document.createElement('div');\n    sectionDiv.style.cssText = 'margin-bottom: 3rem;';\n\n    // Create section title\n    var sectionTitle = document.createElement('h2');\n    sectionTitle.textContent = section.title;\n    sectionTitle.style.cssText = 'color: #007bff; font-size: 1.8rem; margin-bottom: 1rem; padding-bottom: 0.5rem; border-bottom: 2px solid #007bff;';\n    sectionDiv.appendChild(sectionTitle);\n\n    // Create items container\n    var itemsContainer = document.createElement('div');\n    itemsContainer.style.cssText = 'display: grid; gap: 1rem;';\n    section.items.forEach(function (item) {\n      // Create item container\n      var itemDiv = document.createElement('div');\n      itemDiv.style.cssText = 'display: flex; justify-content: space-between; align-items: flex-start; padding: 1rem; background-color: #f8f9fa; border-radius: 8px; border-left: 4px solid #007bff;';\n\n      // Create item content\n      var itemContent = document.createElement('div');\n      itemContent.style.cssText = 'flex: 1;';\n      var itemName = document.createElement('h3');\n      itemName.textContent = item.name;\n      itemName.style.cssText = 'color: #333; margin-bottom: 0.5rem; font-size: 1.2rem;';\n      itemContent.appendChild(itemName);\n      var itemDescription = document.createElement('p');\n      itemDescription.textContent = item.description;\n      itemDescription.style.cssText = 'color: #666; line-height: 1.5; margin: 0;';\n      itemContent.appendChild(itemDescription);\n\n      // Create price\n      var price = document.createElement('div');\n      price.textContent = item.price;\n      price.style.cssText = 'font-weight: bold; color: #007bff; font-size: 1.2rem; margin-left: 1rem;';\n      itemDiv.appendChild(itemContent);\n      itemDiv.appendChild(price);\n      itemsContainer.appendChild(itemDiv);\n    });\n    sectionDiv.appendChild(itemsContainer);\n    menuContainer.appendChild(sectionDiv);\n  });\n  contentDiv.appendChild(menuContainer);\n}\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?\n}");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;