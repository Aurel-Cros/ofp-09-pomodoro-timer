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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ \"./index.html\");\n/* harmony import */ var _body_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./body.css */ \"./body.css\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scss/main.scss */ \"./scss/main.scss\");\n/* harmony import */ var _scss_theme_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scss/theme.scss */ \"./scss/theme.scss\");\n/* harmony import */ var _scss_responsive_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scss/responsive.scss */ \"./scss/responsive.scss\");\n/* harmony import */ var _assets_audio_alert_mp3__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/audio/alert.mp3 */ \"./assets/audio/alert.mp3\");\n/* harmony import */ var _js_pomodoroTimer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/pomodoroTimer */ \"./js/pomodoroTimer.js\");\n\n\n\n\n\n\n\nnew _js_pomodoroTimer__WEBPACK_IMPORTED_MODULE_6__.PomodoroTimer();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./js/makeElement.js":
/*!***************************!*\
  !*** ./js/makeElement.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MakeElement\": () => (/* binding */ MakeElement)\n/* harmony export */ });\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n/*\r\nOptions format :\r\n{\r\n    content: \"Text content of the element\",\r\n    attributes: [\r\n        class: \"text\",\r\n        id: \"presentation\",\r\n        ...\r\n    ]\r\n}\r\n\r\nUse :\r\nconst newDiv = create('div', { \r\n    attributes: { \r\n        class:\"myClass\", \r\n        contentEditable:\"false\"\r\n    },\r\n    content: \"This is a div\"\r\n})\r\n*/\nvar MakeElement = /*#__PURE__*/function () {\n  function MakeElement() {\n    _classCallCheck(this, MakeElement);\n  }\n  _createClass(MakeElement, [{\n    key: \"create\",\n    value: function create(tagName) {\n      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n      this.options = options;\n      this.element = document.createElement(tagName);\n      this.addContent();\n      this.addAttributes();\n      return this.element;\n    }\n  }, {\n    key: \"addContent\",\n    value: function addContent() {\n      this.element.textContent = this.options.content;\n    }\n  }, {\n    key: \"addAttributes\",\n    value: function addAttributes() {\n      var attrs = this.options.attributes;\n      for (var attr in attrs) {\n        this.element.setAttribute(attr, attrs[attr]);\n      }\n    }\n  }]);\n  return MakeElement;\n}();\n\n//# sourceURL=webpack:///./js/makeElement.js?");

/***/ }),

/***/ "./js/pageBuild.js":
/*!*************************!*\
  !*** ./js/pageBuild.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PageBuild\": () => (/* binding */ PageBuild),\n/* harmony export */   \"SettingsPanel\": () => (/* binding */ SettingsPanel)\n/* harmony export */ });\n/* harmony import */ var _makeElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeElement */ \"./js/makeElement.js\");\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slider */ \"./js/slider.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\n\nvar make = new _makeElement__WEBPACK_IMPORTED_MODULE_0__.MakeElement();\nvar PageBuild = /*#__PURE__*/function () {\n  function PageBuild() {\n    _classCallCheck(this, PageBuild);\n    this.frame = document.querySelector(\"#component\");\n    this.buildDOM();\n  }\n  _createClass(PageBuild, [{\n    key: \"buildDOM\",\n    value: function buildDOM() {\n      this.container = make.create('div', {\n        attributes: {\n          id: \"container\",\n          \"class\": \"font-sura\"\n        }\n      });\n      this.shadow = this.frame.attachShadow({\n        mode: 'open'\n      });\n      var link = make.create('link', {\n        attributes: {\n          href: \"style.mini.css\",\n          rel: \"stylesheet\"\n        }\n      });\n      this.shadow.appendChild(link);\n      this.shadow.appendChild(this.container);\n      this.shadow.className = 'theme-blue';\n      this.defaultTimes = {\n        focus: 1500,\n        \"short\": 300,\n        \"long\": 1200,\n        cycles: 4\n      };\n      this.buildHeader();\n      this.buildMain();\n      this.buildSettings();\n    }\n  }, {\n    key: \"buildHeader\",\n    value: function buildHeader() {\n      // Title, settings button\n      var header = make.create('header');\n      var title = make.create('h1', {\n        content: \"Pomodoro\"\n      });\n      var subTitle = make.create('span', {\n        content: \" timer\"\n      });\n      title.appendChild(subTitle);\n      var settingsDiv = make.create('div', {\n        attributes: {\n          \"class\": \"settings\"\n        }\n      });\n      this.settingsBtn = make.create('button', {\n        attributes: {\n          \"class\": \"btn-settings\",\n          title: \"Settings\"\n        }\n      });\n      settingsDiv.appendChild(this.settingsBtn);\n      header.append(title, settingsDiv);\n      this.container.appendChild(header);\n    }\n  }, {\n    key: \"buildMain\",\n    value: function buildMain() {\n      this.main = make.create('main');\n      // Timer element\n      var timerBlock = make.create('div', {\n        attributes: {\n          id: \"timerBlock\"\n        }\n      });\n      var timer = make.create('div', {\n        attributes: {\n          id: \"timer\"\n        }\n      });\n      var pieDivL = make.create('div', {\n        attributes: {\n          \"class\": \"pie-left\"\n        }\n      });\n      var pieL = make.create('div', {\n        attributes: {\n          \"class\": \"pie hide\"\n        }\n      });\n      pieDivL.appendChild(pieL);\n      this.pieL = pieL;\n      var pieDivR = make.create('div', {\n        attributes: {\n          \"class\": \"pie-right\"\n        }\n      });\n      var pieR = make.create('div', {\n        attributes: {\n          \"class\": \"pie\"\n        }\n      });\n      pieDivR.appendChild(pieR);\n      this.pieR = pieR;\n      var time = make.create('p', {\n        attributes: {\n          id: \"time\"\n        }\n      });\n      timer.append(pieDivL, pieDivR, time);\n      this.time = time;\n      timerBlock.appendChild(timer);\n\n      // Control elements\n      var timerType = make.create('div', {\n        attributes: {\n          id: \"div-timer-type\"\n        }\n      });\n      this.timerTypeDiv = timerType;\n      this.focusBtn = make.create('button', {\n        attributes: {\n          \"class\": \"btn-timer-type active\"\n        },\n        content: \"focus\"\n      });\n      this.shortBtn = make.create('button', {\n        attributes: {\n          \"class\": \"btn-timer-type\"\n        },\n        content: \"short break\"\n      });\n      this.longBtn = make.create('button', {\n        attributes: {\n          \"class\": \"btn-timer-type\"\n        },\n        content: \"long break\"\n      });\n      timerType.append(this.shortBtn, this.focusBtn, this.longBtn);\n      var startBtnDiv = make.create('div');\n      this.startBtn = make.create('button', {\n        attributes: {\n          id: \"btn-start\"\n        }\n      });\n      startBtnDiv.appendChild(this.startBtn);\n      this.main.append(timerBlock, timerType, startBtnDiv);\n      this.container.appendChild(this.main);\n    }\n  }, {\n    key: \"buildSettings\",\n    value: function buildSettings() {\n      this.settingsPanel = new SettingsPanel();\n    }\n  }, {\n    key: \"displaySettings\",\n    value: function displaySettings() {\n      this.container.appendChild(this.settingsPanel.panel);\n    }\n  }, {\n    key: \"closeSettings\",\n    value: function closeSettings() {\n      this.container.removeChild(this.settingsPanel.panel);\n    }\n  }]);\n  return PageBuild;\n}();\nvar SettingsPanel = /*#__PURE__*/function () {\n  function SettingsPanel() {\n    _classCallCheck(this, SettingsPanel);\n    this.build();\n  }\n  _createClass(SettingsPanel, [{\n    key: \"build\",\n    value: function build() {\n      this.panel = make.create('div', {\n        attributes: {\n          \"class\": \"settingsWindow\"\n        }\n      });\n      // Title and close button\n      var settingsHeader = make.create('div', {\n        attributes: {\n          \"class\": \"settings-header\"\n        }\n      });\n      var title = make.create('h2', {\n        content: \"Settings\"\n      });\n      this.close = make.create('button', {\n        attributes: {\n          \"class\": \"settings-close-btn\"\n        }\n      });\n      settingsHeader.append(title, this.close);\n      this.panel.appendChild(settingsHeader);\n      // Font section\n      var fontTitle = make.create('h3', {\n        content: \"Font\"\n      });\n      this.fontFamilyBlock = make.create('div', {\n        attributes: {\n          \"class\": \"font-family\"\n        }\n      });\n      var fontFamilyP = make.create('p', {\n        content: \"Family :\"\n      });\n      this.font1 = make.create('button', {\n        content: \"aA\",\n        attributes: {\n          title: \"Suravaram\",\n          'data-font': 'sura'\n        }\n      });\n      this.font2 = make.create('button', {\n        content: \"aA\",\n        attributes: {\n          title: \"Prompt\",\n          'data-font': 'prompt'\n        }\n      });\n      this.font3 = make.create('button', {\n        content: \"aA\",\n        attributes: {\n          title: \"Bruno Ace\",\n          'data-font': 'bruno'\n        }\n      });\n      this.fontFamilyBlock.append(fontFamilyP, this.font1, this.font2, this.font3);\n      this.fontColorBlock = make.create('div', {\n        attributes: {\n          \"class\": \"font-colour\"\n        }\n      });\n      var fontColourP = make.create('p', {\n        content: \"Colour :\"\n      });\n      this.colour1 = make.create('button', {\n        attributes: {\n          title: \"Blue\"\n        }\n      });\n      this.colour1.appendChild(make.create('span'));\n      this.colour2 = make.create('button', {\n        attributes: {\n          title: \"Red\"\n        }\n      });\n      this.colour2.appendChild(make.create('span'));\n      this.colour3 = make.create('button', {\n        attributes: {\n          title: \"Green\"\n        }\n      });\n      this.colour3.appendChild(make.create('span'));\n      this.fontColorBlock.append(fontColourP, this.colour1, this.colour2, this.colour3);\n      var fontSection = make.create('div');\n      fontSection.append(fontTitle, this.fontFamilyBlock, this.fontColorBlock);\n      this.panel.appendChild(fontSection);\n\n      // Duration section\n      var durationTitle = make.create('h3', {\n        content: \"Durations\"\n      });\n      this.focusSlider = new _slider__WEBPACK_IMPORTED_MODULE_1__.Slider({\n        name: \"Focus\",\n        range: {\n          min: 600,\n          max: 3600\n        },\n        step: 60\n      });\n      this.shortSlider = new _slider__WEBPACK_IMPORTED_MODULE_1__.Slider({\n        name: \"Short break\",\n        range: {\n          min: 60,\n          max: 600\n        },\n        step: 60\n      });\n      this.longSlider = new _slider__WEBPACK_IMPORTED_MODULE_1__.Slider({\n        name: \"Long break\",\n        range: {\n          min: 300,\n          max: 1800\n        },\n        step: 60\n      });\n      this.cyclesSlider = new _slider__WEBPACK_IMPORTED_MODULE_1__.Slider({\n        name: \"Cycles\",\n        type: \"plain\",\n        range: {\n          min: 1,\n          max: 10\n        },\n        step: 1\n      });\n      var durationSection = make.create('div');\n      durationSection.append(durationTitle, this.focusSlider.block, this.shortSlider.block, this.longSlider.block, this.cyclesSlider.block);\n      this.panel.appendChild(durationSection);\n      var autoCycleBlock = make.create('label', {\n        content: \"Automatic cycling :\",\n        attributes: {\n          \"class\": \"auto-cycle-label\"\n        }\n      });\n      this.autoCycle = make.create('input', {\n        attributes: {\n          type: \"checkbox\"\n        }\n      });\n      autoCycleBlock.append(this.autoCycle, make.create('div'));\n      durationSection.appendChild(autoCycleBlock);\n    }\n  }]);\n  return SettingsPanel;\n}();\n\n//# sourceURL=webpack:///./js/pageBuild.js?");

/***/ }),

/***/ "./js/pomodoroTimer.js":
/*!*****************************!*\
  !*** ./js/pomodoroTimer.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PomodoroTimer\": () => (/* binding */ PomodoroTimer)\n/* harmony export */ });\n/* harmony import */ var _pageBuild__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageBuild */ \"./js/pageBuild.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\nvar DOM = new _pageBuild__WEBPACK_IMPORTED_MODULE_0__.PageBuild();\nvar PomodoroTimer = /*#__PURE__*/function () {\n  function PomodoroTimer() {\n    _classCallCheck(this, PomodoroTimer);\n    // This references interactive elements\n    this.ctrls = {\n      settings: {\n        open: DOM.settingsBtn,\n        close: DOM.settingsPanel.close,\n        font: {\n          family: DOM.settingsPanel.fontFamilyBlock,\n          color: DOM.settingsPanel.fontColorBlock\n        },\n        autocycle: DOM.settingsPanel.autoCycle,\n        sliders: {\n          focus: DOM.settingsPanel.focusSlider,\n          \"short\": DOM.settingsPanel.shortSlider,\n          \"long\": DOM.settingsPanel.longSlider,\n          cycles: DOM.settingsPanel.cyclesSlider\n        }\n      },\n      displayedType: 0,\n      types: {\n        div: DOM.timerTypeDiv,\n        focus: DOM.focusBtn,\n        \"short\": DOM.shortBtn,\n        \"long\": DOM.longBtn\n      },\n      start: DOM.startBtn\n    };\n\n    // Default values\n    this.settings = JSON.parse(localStorage.getItem('settings')) || {\n      font: 'sura',\n      color: 'blue',\n      durations: {\n        focus: 1500,\n        \"short\": 300,\n        \"long\": 1200,\n        cycles: 4\n      },\n      autocycle: true\n    };\n    this.initTheme();\n    this.currentCycle = {\n      stage: 0,\n      i: 1\n    };\n    this.setTime();\n    this.refreshTime();\n    this.initEvents();\n    this.initSliders();\n  }\n  _createClass(PomodoroTimer, [{\n    key: \"initTheme\",\n    value: function initTheme() {\n      DOM.container.className = \"theme-\".concat(this.settings.color);\n      DOM.main.className = \"font-\".concat(this.settings.font);\n      DOM.settingsPanel.font1.classList.remove('active');\n      DOM.settingsPanel.font2.classList.remove('active');\n      DOM.settingsPanel.font3.classList.remove('active');\n      switch (this.settings.font) {\n        case 'sura':\n          DOM.settingsPanel.font1.classList.add('active');\n          break;\n        case 'prompt':\n          DOM.settingsPanel.font2.classList.add('active');\n          break;\n        case 'bruno':\n          DOM.settingsPanel.font3.classList.add('active');\n          break;\n      }\n      DOM.settingsPanel.colour1.classList.remove('active');\n      DOM.settingsPanel.colour2.classList.remove('active');\n      DOM.settingsPanel.colour3.classList.remove('active');\n      switch (this.settings.color) {\n        case 'blue':\n          DOM.settingsPanel.colour1.classList.add('active');\n          break;\n        case 'red':\n          DOM.settingsPanel.colour2.classList.add('active');\n          break;\n        case 'green':\n          DOM.settingsPanel.colour3.classList.add('active');\n          break;\n      }\n    }\n  }, {\n    key: \"initSliders\",\n    value: function initSliders() {\n      this.ctrls.settings.sliders[\"long\"].updateDisplay(this.settings.durations[\"long\"]);\n      this.ctrls.settings.sliders.focus.updateDisplay(this.settings.durations.focus);\n      this.ctrls.settings.sliders[\"short\"].updateDisplay(this.settings.durations[\"short\"]);\n      this.ctrls.settings.sliders.cycles.updateDisplay(this.settings.durations.cycles);\n      this.ctrls.settings.autocycle.checked = this.settings.autocycle;\n    }\n  }, {\n    key: \"initEvents\",\n    value: function initEvents() {\n      var _this = this;\n      window.addEventListener(\"beforeunload\", function () {\n        var settings = JSON.stringify(_this.settings);\n        localStorage.setItem('settings', settings);\n      });\n      this.ctrls.settings.open.addEventListener(\"click\", function () {\n        // Open settings panel\n        DOM.displaySettings();\n      });\n      this.ctrls.settings.close.addEventListener(\"click\", function () {\n        // Close settings panel\n        DOM.closeSettings();\n      });\n      this.ctrls.settings.font.family.addEventListener(\"click\", function (e) {\n        if (!e.target.title) return;\n        DOM.settingsPanel.font1.classList.remove('active');\n        DOM.settingsPanel.font2.classList.remove('active');\n        DOM.settingsPanel.font3.classList.remove('active');\n        e.target.classList.add('active');\n        _this.settings.font = e.target.dataset.font;\n        _this.initTheme();\n      });\n      this.ctrls.settings.font.color.addEventListener(\"click\", function (e) {\n        if (!e.target.title) return;\n        DOM.settingsPanel.colour1.classList.remove('active');\n        DOM.settingsPanel.colour2.classList.remove('active');\n        DOM.settingsPanel.colour3.classList.remove('active');\n        e.target.classList.add('active');\n        _this.settings.color = String(e.target.title).toLowerCase();\n        _this.initTheme();\n      });\n      this.ctrls.settings.sliders.focus.slider.addEventListener(\"input\", function (e) {\n        _this.ctrls.settings.sliders.focus.updateDisplay(e.target.value, true);\n        _this.settings.durations.focus = e.target.value;\n        if (_this.ctrls.displayedType === 0) {\n          _this.setTime(0);\n          _this.refreshTime();\n        }\n      });\n      this.ctrls.settings.sliders[\"short\"].slider.addEventListener(\"input\", function (e) {\n        _this.ctrls.settings.sliders[\"short\"].updateDisplay(e.target.value, true);\n        _this.settings.durations[\"short\"] = e.target.value;\n        if (_this.ctrls.displayedType === 1) {\n          _this.setTime(1);\n          _this.refreshTime();\n        }\n      });\n      this.ctrls.settings.sliders[\"long\"].slider.addEventListener(\"input\", function (e) {\n        _this.ctrls.settings.sliders[\"long\"].updateDisplay(e.target.value, true);\n        _this.settings.durations[\"long\"] = e.target.value;\n        if (_this.ctrls.displayedType === 2) {\n          _this.setTime(2);\n          _this.refreshTime();\n        }\n      });\n      this.ctrls.settings.sliders.cycles.slider.addEventListener(\"input\", function (e) {\n        _this.ctrls.settings.sliders.cycles.updateDisplay(e.target.value, true);\n        _this.settings.durations.cycles = e.target.value;\n      });\n      this.ctrls.settings.autocycle.addEventListener(\"click\", function (e) {\n        _this.settings.autocycle = e.target.checked;\n      });\n      this.ctrls.start.addEventListener(\"click\", function () {\n        if (!_this.timer) {\n          console.log(\"Clicked play.\");\n          _this.play();\n        } else {\n          console.log(\"Clicked pause.\");\n          _this.pause();\n        }\n      });\n      // In case of a manual type switch, we abort a potential current automatic cycle and reset to a starting position\n      this.ctrls.types.div.addEventListener(\"click\", function (e) {\n        // If the click is on the container but not a button, nothing\n        if (e.target === _this.ctrls.types.div) {\n          return;\n        }\n        _this.settings.autocycle = false;\n        _this.ctrls.settings.autocycle.checked = false;\n        _this.reset();\n        switch (e.target) {\n          case _this.ctrls.types.focus:\n            _this.currentCycle.stage = 0;\n            _this.setDisplayType(0);\n            break;\n          case _this.ctrls.types[\"short\"]:\n            _this.currentCycle.stage = 1;\n            _this.setDisplayType(1);\n            break;\n          case _this.ctrls.types[\"long\"]:\n            _this.currentCycle.stage = 2;\n            _this.setDisplayType(2);\n            break;\n        }\n        _this.refreshTime();\n      });\n    }\n  }, {\n    key: \"setDisplayType\",\n    value: function setDisplayType() {\n      var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.currentCycle.stage;\n      switch (type) {\n        case 0:\n          this.ctrls.types.focus.classList.add('active');\n          this.ctrls.types[\"short\"].classList.remove('active');\n          this.ctrls.types[\"long\"].classList.remove('active');\n          break;\n        case 1:\n          this.ctrls.types[\"short\"].classList.add('active');\n          this.ctrls.types.focus.classList.remove('active');\n          this.ctrls.types[\"long\"].classList.remove('active');\n          break;\n        case 2:\n          this.ctrls.types[\"long\"].classList.add('active');\n          this.ctrls.types[\"short\"].classList.remove('active');\n          this.ctrls.types.focus.classList.remove('active');\n          break;\n      }\n      this.setTime(type);\n      this.ctrls.displayedType = type;\n    }\n  }, {\n    key: \"setTime\",\n    value: function setTime() {\n      var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n      // O is focus, 1 is short break, 2 is long break\n      switch (type) {\n        case 0:\n          this.timeLeft = this.settings.durations.focus;\n          break;\n        case 1:\n          this.timeLeft = this.settings.durations[\"short\"];\n          break;\n        case 2:\n          this.timeLeft = this.settings.durations[\"long\"];\n          break;\n      }\n    }\n  }, {\n    key: \"refreshTime\",\n    value: function refreshTime() {\n      var mins = Math.trunc(this.timeLeft / 60);\n      var secs = this.timeLeft % 60;\n      DOM.time.textContent = \"\".concat(mins < 10 ? '0' + mins : mins, \":\").concat(secs < 10 ? '0' + secs : secs);\n    }\n  }, {\n    key: \"reset\",\n    value: function reset() {\n      var _this2 = this;\n      // Play sound alert\n\n      // Kill timer\n      clearInterval(this.timer);\n      this.timer = false;\n\n      // Reset animation - left side rotates back, then right side rotates back\n      DOM.pieL.style = \"transform: rotate(0deg);\";\n      setTimeout(function () {\n        DOM.pieL.classList.add('hide');\n        DOM.pieR.style = \"transform: rotate(0deg);\";\n      }, 500);\n      if (!this.settings.autocycle) {\n        this.ctrls.start.classList.remove('pause');\n        this.currentCycle.stage = 0;\n        this.currentCycle.i = 1;\n        this.setDisplayType();\n        this.setTime();\n        this.refreshTime();\n        return;\n      }\n      // After reset, is autocycle is enabled, start the next stage\n      var replay = true;\n      if (this.currentCycle.stage == 0) {\n        // If previous cycle was a focus period, go to a break\n        // If this is the 4th cycle, go to a longer break\n        if (this.currentCycle.i < 4) this.currentCycle.stage = 1;else this.currentCycle.stage = 2;\n      } else {\n        // Stop the timer after a long break\n        if (this.currentCycle.stage == 2) {\n          replay = false;\n          console.log(\"Full cycle complete.\");\n        }\n\n        // Previous cycle was a break, go back to a focus period\n        this.currentCycle.stage = 0;\n      }\n      this.currentCycle.i++;\n      this.setTime(this.currentCycle.stage);\n      this.setDisplayType(this.currentCycle.stage);\n      this.refreshTime();\n      if (replay) {\n        setTimeout(function () {\n          console.log(\"Play in logic.\");\n          _this2.play();\n        }, 1001);\n      }\n    }\n  }, {\n    key: \"play\",\n    value: function play() {\n      var _this3 = this;\n      this.ctrls.start.classList.add('pause');\n      this.timer = setInterval(function () {\n        _this3.timeLeft--;\n        if (_this3.timeLeft < 0) {\n          _this3.alert();\n          _this3.reset();\n        } else {\n          _this3.refreshTime();\n          _this3.doRotation();\n        }\n      }, 1000);\n    }\n  }, {\n    key: \"pause\",\n    value: function pause() {\n      clearInterval(this.timer);\n      this.timer = false;\n      this.ctrls.start.classList.remove('pause');\n    }\n  }, {\n    key: \"doRotation\",\n    value: function doRotation() {\n      var maxTime = this.currentCycle.stage == 0 ? this.settings.durations.focus : this.currentCycle.stage == 1 ? this.settings.durations[\"short\"] : this.settings.durations[\"long\"];\n      var ratio = this.timeLeft / maxTime;\n      var newDeg = 360 * (1 - ratio);\n      var overHalf = Math.trunc(newDeg / 180);\n      if (overHalf) {\n        if (newDeg == 180) {\n          DOM.pieR.style = \"transform: rotate(180deg);\";\n          setTimeout(function () {\n            DOM.pieL.classList.remove('hide');\n          }, 500);\n        }\n        DOM.pieL.style = \"transform: rotate(\".concat(overHalf == 2 ? 180 : newDeg % 180, \"deg);\");\n      } else {\n        DOM.pieR.style = \"transform: rotate(\".concat(newDeg % 180, \"deg);\");\n      }\n    }\n  }, {\n    key: \"alert\",\n    value: function alert() {\n      var alert = new Audio('../assets/audio/alert.mp3');\n      alert.volume = 0.5;\n      alert.play();\n    }\n  }]);\n  return PomodoroTimer;\n}();\n\n//# sourceURL=webpack:///./js/pomodoroTimer.js?");

/***/ }),

/***/ "./js/slider.js":
/*!**********************!*\
  !*** ./js/slider.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Slider\": () => (/* binding */ Slider)\n/* harmony export */ });\n/* harmony import */ var _makeElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./makeElement */ \"./js/makeElement.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n\nvar make = new _makeElement__WEBPACK_IMPORTED_MODULE_0__.MakeElement();\nvar Slider = /*#__PURE__*/function () {\n  function Slider(options) {\n    _classCallCheck(this, Slider);\n    this.name = options.name;\n    this.min = options.range.min;\n    this.max = options.range.max;\n    this.step = options.step;\n    this.type = options.type || \"time\";\n    this.build();\n  }\n  _createClass(Slider, [{\n    key: \"build\",\n    value: function build() {\n      // Build slider\n      var div = make.create('div', {\n        attributes: {\n          \"class\": \"slider\"\n        }\n      });\n      var input = make.create('input', {\n        attributes: {\n          type: \"range\",\n          min: this.min,\n          max: this.max,\n          step: this.step,\n          value: this.value\n        }\n      });\n      var sliderName = make.create('p', {\n        content: \"\".concat(this.name, \" :\")\n      });\n      var sliderDuration = make.create('p');\n      var sliderNameAndDuration = make.create('div');\n      sliderNameAndDuration.append(sliderName, sliderDuration);\n      div.append(sliderNameAndDuration, input);\n      this.block = div;\n      this.slider = input;\n      this.display = sliderDuration;\n      this.updateDisplay(this.value);\n    }\n  }, {\n    key: \"updateDisplay\",\n    value: function updateDisplay(value) {\n      var updateValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;\n      if (updateValue) {\n        this.value = value;\n        this.slider.value = value;\n      }\n      var displayValue = this.type == 'time' ? String(Math.trunc(this.value / 60)) + ' mins' : this.value;\n      this.display.textContent = displayValue;\n    }\n  }]);\n  return Slider;\n}();\n\n//# sourceURL=webpack:///./js/slider.js?");

/***/ }),

/***/ "./scss/main.scss":
/*!************************!*\
  !*** ./scss/main.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./scss/main.scss?");

/***/ }),

/***/ "./scss/responsive.scss":
/*!******************************!*\
  !*** ./scss/responsive.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./scss/responsive.scss?");

/***/ }),

/***/ "./scss/theme.scss":
/*!*************************!*\
  !*** ./scss/theme.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack:///./scss/theme.scss?");

/***/ }),

/***/ "./assets/audio/alert.mp3":
/*!********************************!*\
  !*** ./assets/audio/alert.mp3 ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/audio/alert.mp3\";\n\n//# sourceURL=webpack:///./assets/audio/alert.mp3?");

/***/ }),

/***/ "./body.css":
/*!******************!*\
  !*** ./body.css ***!
  \******************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"body.css\";\n\n//# sourceURL=webpack:///./body.css?");

/***/ }),

/***/ "./index.html":
/*!********************!*\
  !*** ./index.html ***!
  \********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"index.html\";\n\n//# sourceURL=webpack:///./index.html?");

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
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;