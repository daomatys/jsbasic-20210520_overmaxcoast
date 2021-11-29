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

/***/ "./6-module/2-task/index.js":
/*!**********************************!*\
  !*** ./6-module/2-task/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ProductCard)\n/* harmony export */ });\n/* harmony import */ var _assets_lib_create_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/lib/create-element.js */ \"./assets/lib/create-element.js\");\n\r\n\r\nclass ProductCard {\r\n  \r\n  constructor(product) {\r\n    this.product = product;\r\n    \r\n    this.elem = (0,_assets_lib_create_element_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( this.layout() );\r\n    this.elem.addEventListener('click', this.onClick)\r\n  }\r\n  \r\n  layout() {\r\n    return `\r\n      <div class=\"card\">\r\n        <div class=\"card__top\">\r\n          <img src=\"/assets/images/products/${ this.product.image }\" class=\"card__image\" alt=\"product\">\r\n          <span class=\"card__price\">€${ this.product.price.toFixed(2) }</span>\r\n        </div>\r\n        <div class=\"card__body\">\r\n          <div class=\"card__title\">${ this.product.name }</div>\r\n          <button type=\"button\" class=\"card__button\">\r\n            <img src=\"/assets/images/icons/plus-icon.svg\" alt=\"icon\">\r\n          </button>\r\n        </div>\r\n      </div>`;\r\n  }\r\n  \r\n  onClick = ({target}) => {\r\n    if ( target.closest('.card__button') ) {\r\n      this.elem.dispatchEvent( new CustomEvent('product-add', {\r\n        detail: this.product.id,\r\n        bubbles: true\r\n      }));\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://tasks-jsbasic/./6-module/2-task/index.js?");

/***/ }),

/***/ "./6-module/3-task/index.js":
/*!**********************************!*\
  !*** ./6-module/3-task/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Carousel)\n/* harmony export */ });\n/* harmony import */ var _assets_lib_create_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/lib/create-element.js */ \"./assets/lib/create-element.js\");\n\r\n\r\nclass Carousel {\r\n  \r\n  constructor(slides) {\r\n    this.slides = slides;\r\n    \r\n    this.elem = document.createElement('div');\r\n    this.elem.classList.add('carousel');\r\n    this.elem.insertAdjacentHTML('afterbegin',\r\n      this.layoutArrows('right') +\r\n      this.layoutArrows('left') +\r\n      this.layoutSlidesStack()\r\n    );\r\n    this.initCarousel();\r\n  }\r\n  \r\n  layoutArrows(way) {\r\n    return `\r\n      <div class=\"carousel__arrow carousel__arrow_${ way }\">\r\n        <img src=\"/assets/images/icons/angle${ way === 'left' ? '-left' : '' }-icon.svg\" alt=\"icon\">\r\n      </div>`;\r\n  }\r\n  \r\n  layoutSlidesSingle(item) {\r\n    return `\r\n      <div class=\"carousel__slide\" data-id=\"${ item.id }\">\r\n        <img src=\"/assets/images/carousel/${ item.image }\" class=\"carousel__img\" alt=\"slide\">\r\n        <div class=\"carousel__caption\">\r\n          <span class=\"carousel__price\">€${ item.price.toFixed(2) }</span>\r\n          <div class=\"carousel__title\">${ item.name }</div>\r\n          <button type=\"button\" class=\"carousel__button\">\r\n            <img src=\"/assets/images/icons/plus-icon.svg\" alt=\"icon\">\r\n          </button>\r\n        </div>\r\n      </div>`;\r\n  }\r\n  \r\n  layoutSlidesStack() {\r\n    const slidesStack = this.slides\r\n      .map( item => this.layoutSlidesSingle( item ) )\r\n      .join('');\r\n      \r\n    return `<div class=\"carousel__inner\">${ slidesStack }</div>`;\r\n  }\r\n  \r\n  carouselSub = suffix => this.elem.querySelector(`.carousel__${ suffix }`);\r\n  \r\n  initCarousel() {\r\n    let currentSlide = 0;\r\n    \r\n    this.slidesCount = this.carouselSub('inner').querySelectorAll('.carousel__slide').length;\r\n    this.carouselSub('arrow_left').style.display = 'none';\r\n    \r\n    this.elem.addEventListener('click', ({target}) => {\r\n      const slidesWidth = this.carouselSub('slide').offsetWidth;\r\n      \r\n      if ( target.closest('.carousel__button') ) this.itemFromCarouselToCart( currentSlide );\r\n      if ( target.closest('.carousel__arrow_left') ) this.arrowStyleSwitcher( --currentSlide );\r\n      if ( target.closest('.carousel__arrow_right') ) this.arrowStyleSwitcher( ++currentSlide );\r\n      \r\n      this.carouselSub('inner').style.transform = `translateX(-${ currentSlide * slidesWidth }px)`;\r\n    });\r\n  }\r\n  \r\n  arrowStyleSwitcher = num => {\r\n    this.carouselSub('arrow_left').style.display = num == 0 ? 'none' : '' ;\r\n    this.carouselSub('arrow_right').style.display = num == this.slidesCount - 1 ? 'none' : '' ;\r\n  }\r\n  \r\n  itemFromCarouselToCart = i => {\r\n    this.elem.dispatchEvent( new CustomEvent('product-add', {\r\n      detail: this.slides[i].id,\r\n      bubbles: true\r\n    }));\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://tasks-jsbasic/./6-module/3-task/index.js?");

/***/ }),

/***/ "./6-module/3-task/slides.js":
/*!***********************************!*\
  !*** ./6-module/3-task/slides.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([\r\n  {\r\n    name: 'Penang shrimp',\r\n    price: 16,\r\n    image: 'penang_shrimp.png',\r\n    id: 'penang-shrimp'\r\n  },\r\n  {\r\n    name: 'Chicken cashew',\r\n    price: 14,\r\n    image: 'chicken_cashew.png',\r\n    id: 'chicken-cashew'\r\n  },\r\n  {\r\n    name: 'Red curry veggies',\r\n    price: 12.5,\r\n    image: 'red_curry_vega.png',\r\n    id: 'red-curry-veggies'\r\n  },\r\n  {\r\n    name: 'Chicken springrolls',\r\n    price: 6.5,\r\n    image: 'chicken_loempias.png',\r\n    id: 'chicken-springrolls'\r\n  }\r\n]);\r\n\n\n//# sourceURL=webpack://tasks-jsbasic/./6-module/3-task/slides.js?");

/***/ }),

/***/ "./7-module/1-task/categories.js":
/*!***************************************!*\
  !*** ./7-module/1-task/categories.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ([\r\n  {\r\n    id: '',\r\n    name: 'All'\r\n  },\r\n  {\r\n    id: 'salads',\r\n    name: 'Salads'\r\n  },\r\n  {\r\n    id: 'soups',\r\n    name: 'Soups'\r\n  },\r\n  {\r\n    id: 'chicken-dishes',\r\n    name: 'Chicken dishes'\r\n  },\r\n  {\r\n    id: 'beef-dishes',\r\n    name: 'Beef dishes'\r\n  },\r\n  {\r\n    id: 'seafood-dishes',\r\n    name: 'Seafood dishes'\r\n  },\r\n  {\r\n    id: 'vegetable-dishes',\r\n    name: 'Vegetable dishes'\r\n  },\r\n  {\r\n    id: 'bits-and-bites',\r\n    name: 'Bits and bites'\r\n  },\r\n  {\r\n    id: 'on-the-side',\r\n    name: 'On the side'\r\n  }\r\n]);\r\n\n\n//# sourceURL=webpack://tasks-jsbasic/./7-module/1-task/categories.js?");

/***/ }),

/***/ "./7-module/1-task/index.js":
/*!**********************************!*\
  !*** ./7-module/1-task/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ RibbonMenu)\n/* harmony export */ });\n/* harmony import */ var _assets_lib_create_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/lib/create-element.js */ \"./assets/lib/create-element.js\");\n\r\n\r\nclass RibbonMenu {\r\n  \r\n  constructor(categories) {\r\n    this.categories = categories;\r\n    this.shift = 350;\r\n    \r\n    this.elem = document.createElement('div');\r\n    this.elem.classList.add('ribbon');\r\n    this.elem.innerHTML = \r\n      this.layoutRibbonArrow('left') + \r\n      this.layoutCategories() + \r\n      this.layoutRibbonArrow('right'); \r\n      \r\n    this.initRibbon();\r\n  }\r\n  \r\n  layoutRibbonArrow(way) {\r\n    return `\r\n      <button class=\"ribbon__arrow ribbon__arrow_${ way }\">\r\n        <img src=\"/assets/images/icons/angle-icon.svg\" alt=\"icon\">\r\n      </button>\r\n    `;\r\n  }\r\n  \r\n  layoutCategories() {\r\n    let aList = this.categories\r\n      .map( item => `<a href=\"#\" class=\"ribbon__item\" data-id=\"${ item.id }\">${ item.name }</a>` )\r\n      .join('');\r\n    return '<nav class=\"ribbon__inner\">' + aList + '</nav>';\r\n  }\r\n  \r\n  ribbonSub = suffix => this.elem.querySelector(`.ribbon__${suffix}`);\r\n  \r\n  initRibbon() {\r\n    this.ribbonSub('arrow_right').classList.add('ribbon__arrow_visible');\r\n    this.elem.addEventListener('click', this.onClick);\r\n  }\r\n  \r\n  onClick = ({target}) => {\r\n    if ( target.closest('.ribbon__item') ) this.clickOnItem( target );\r\n    if ( target.closest('.ribbon__arrow_left') ) this.clickOnArrow( -1 );\r\n    if ( target.closest('.ribbon__arrow_right') ) this.clickOnArrow( 1 );\r\n  }\r\n  \r\n  clickOnItem = (aimNew) => {\r\n    event.preventDefault();\r\n    \r\n    const aimOld = this.ribbonSub('item_active');\r\n    \r\n    if ( aimOld !== aimNew ) {\r\n      if ( aimOld !== null )\r\n        aimOld.classList.remove('ribbon__item_active');\r\n      aimNew.classList.add('ribbon__item_active');\r\n      \r\n      this.ribbonSelectedEvent(aimNew);\r\n    }\r\n  }\r\n  \r\n  clickOnArrow = multiplier => {\r\n    const shift = this.shift;\r\n    const arrowStyleSwitch = (scroll, mul, way) => {\r\n      if ( scroll + ( mul * shift ) <= 1 ) {\r\n        this.ribbonSub(`arrow_${way}`).classList.remove('ribbon__arrow_visible');\r\n      } else {\r\n        this.ribbonSub(`arrow_${way}`).classList.add('ribbon__arrow_visible');\r\n      }\r\n    }\r\n    let menuWidth = \r\n      this.ribbonSub('inner').scrollWidth -\r\n      this.ribbonSub('inner').clientWidth;\r\n    \r\n    let scrollLeft = this.ribbonSub('inner').scrollLeft;\r\n    let scrollRight = menuWidth - scrollLeft;\r\n    \r\n    arrowStyleSwitch( scrollLeft, multiplier, 'left' );\r\n    arrowStyleSwitch( scrollRight, -multiplier, 'right' );\r\n    \r\n    this.ribbonSub('inner').scrollBy( shift * multiplier, 0 );\r\n  }\r\n  \r\n  ribbonSelectedEvent = aim => {\r\n    this.elem.dispatchEvent( new CustomEvent('ribbon-select', {\r\n      detail: aim.dataset.id,\r\n      bubbles: true\r\n    }));\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://tasks-jsbasic/./7-module/1-task/index.js?");

/***/ }),

/***/ "./7-module/2-task/index.js":
/*!**********************************!*\
  !*** ./7-module/2-task/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Modal)\n/* harmony export */ });\n/* harmony import */ var _assets_lib_create_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/lib/create-element.js */ \"./assets/lib/create-element.js\");\n\r\n\r\nclass Modal {\r\n  \r\n  constructor() {\r\n    this.modal = this._layout();\r\n    this._keydownEvent();\r\n    this._buttonEvent();\r\n  }\r\n  \r\n  _layout() {\r\n    let scheme = `\r\n      <div class=\"modal\">\r\n        <div class=\"modal__overlay\"></div>\r\n        <div class=\"modal__inner\">\r\n          <div class=\"modal__header\">\r\n            <button type=\"button\" class=\"modal__close\">\r\n              <img src=\"/assets/images/icons/cross-icon.svg\" alt=\"close-icon\" />\r\n            </button>\r\n            <h3 class=\"modal__title\"></h3>\r\n          </div>\r\n          <div class=\"modal__body\"></div>\r\n        </div>\r\n      </div>\r\n    `;\r\n    return (0,_assets_lib_create_element_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(scheme);\r\n  }\r\n  \r\n  open() {\r\n    document.body.classList.add('is-modal-open');\r\n    document.body.appendChild(this.modal);\r\n  }\r\n  \r\n  close() {\r\n    document.body.classList.remove('is-modal-open');\r\n    document.removeEventListener('keydown', this._keydownEvent);\r\n    this.modal.remove();\r\n  }\r\n  \r\n  setTitle(text) {\r\n    const modalTitle = this.modal.querySelector('.modal__title');\r\n    if (modalTitle) modalTitle.textContent = text;\r\n  }\r\n  \r\n  setBody(node) {\r\n    const modalBody = this.modal.querySelector('.modal__body');\r\n    if (modalBody) modalBody.appendChild(node);\r\n  }\r\n  \r\n  _keydownEvent() {\r\n    document.addEventListener('keydown', e => {\r\n      if (e.code === 'Escape') { \r\n        e.preventDefault(); \r\n        this.close();\r\n      }\r\n    });\r\n  }\r\n  \r\n  _buttonEvent() {\r\n    const crossButton = this.modal.querySelector('.modal__close');\r\n    crossButton.addEventListener('click', () => this.close());\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://tasks-jsbasic/./7-module/2-task/index.js?");

/***/ }),

/***/ "./7-module/4-task/index.js":
/*!**********************************!*\
  !*** ./7-module/4-task/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ StepSlider)\n/* harmony export */ });\nclass StepSlider {\r\n  \r\n  constructor({ steps, value }) {\r\n    this.steps = steps;\r\n    this.value = (!value) ? 0 : value ; \r\n    \r\n    this.elem = document.createElement('div');\r\n    this.elem.classList.add('slider');\r\n    this.elem.innerHTML = this.layout();\r\n    \r\n    this.magnetToSocket();\r\n    this.eventChainInit();\r\n  }\r\n  \r\n  layout() {\r\n    return `\r\n      <div class=\"slider__thumb\">\r\n        <span class=\"slider__value\">${ this.value }</span>\r\n      </div>\r\n      <div class=\"slider__progress\"></div>\r\n      <div class=\"slider__steps\">\r\n        <span class=\"slider__step-active\"></span>\r\n        ${ '<span class></span>'.repeat( this.steps - 1 ) }\r\n      </div>\r\n    `;\r\n  }\r\n  \r\n  slider = suffix => this.elem.querySelector(`.slider__${suffix}`);\r\n  \r\n  eventChainInit() {\r\n    this.slider('thumb').ondragstart = () => false;\r\n    this.slider('thumb').style.position = 'absolute';\r\n    this.slider('thumb').addEventListener('pointerdown', this.onPointerDown);\r\n    \r\n    this.elem.addEventListener('click', this.onClick);\r\n  }\r\n  \r\n  onPointerDown = eventDown => {\r\n    eventDown.preventDefault();\r\n    \r\n    document.addEventListener('pointermove', this.onPointerMove);\r\n    document.addEventListener('pointerup', this.onPointerUp);\r\n  }\r\n  \r\n  onPointerMove = eventMove => {\r\n    eventMove.preventDefault();\r\n    \r\n    this.elem.classList.add('slider_dragging');\r\n    \r\n    const sliderRect = this.elem.getBoundingClientRect();\r\n    const sliderSegments = this.steps - 1;\r\n    \r\n    const shiftByWidth = (eventMove.clientX - sliderRect.left) / this.elem.offsetWidth;\r\n    const rawValue = Math.round( shiftByWidth * sliderSegments );\r\n    \r\n    this.value = numLimiter(rawValue, sliderSegments);\r\n    this.slider('progress').style.width = numLimiter(shiftByWidth, 1) * 100 + '%';\r\n    this.slider('thumb').style.left = numLimiter(shiftByWidth, 1) * 100 + '%';\r\n    this.slider('value').textContent = this.value;\r\n    \r\n    this.stepActiveSwitch();\r\n    \r\n    function numLimiter(shift, x) {\r\n      if (shift < 0) shift = 0;\r\n      if (shift > x) shift = x;\r\n      return shift;\r\n    }\r\n  }\r\n  \r\n  onPointerUp = eventUp => {\r\n    document.removeEventListener('pointermove', this.onPointerMove);\r\n    document.removeEventListener('pointerup', this.onPointerUp);\r\n    \r\n    this.elem.classList.remove('slider_dragging');\r\n    \r\n    this.customEvent();\r\n  }\r\n  \r\n  onClick = eventClick => {\r\n    const sliderRect = this.elem.getBoundingClientRect();\r\n    const sliderSegments = this.steps - 1;\r\n    \r\n    this.value = Math.round( (eventClick.clientX - sliderRect.left) / this.elem.offsetWidth * sliderSegments );\r\n    this.slider('value').textContent = this.value;\r\n    \r\n    this.magnetToSocket();\r\n    this.customEvent();\r\n  }\r\n  \r\n  magnetToSocket = () => {\r\n    this.stepActiveSwitch();\r\n    \r\n    const percentsByValue = 100 * this.value / ( this.steps - 1 );\r\n    \r\n    this.slider('thumb').style.left = Math.round( percentsByValue ) + '%';\r\n    this.slider('progress').style.width = Math.round( percentsByValue ) + '%';\r\n  }\r\n  \r\n  stepActiveSwitch = () => {\r\n    const sliderSegmentOld = this.slider('step-active');\r\n    const sliderSegmentNew = this.slider('steps').children.item( this.value );\r\n    \r\n    if (sliderSegmentNew === sliderSegmentOld) {\r\n      this.sameValue = true;\r\n      \r\n    } else {\r\n      sliderSegmentOld.classList.remove('slider__step-active');\r\n      sliderSegmentNew.classList.add('slider__step-active');\r\n      this.sameValue = false;\r\n    }\r\n  }\r\n  \r\n  customEvent = () => {\r\n    if (!this.sameValue) {\r\n      this.elem.dispatchEvent( new CustomEvent('slider-change', {\r\n        detail: this.value,\r\n        bubbles: true\r\n      }));\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://tasks-jsbasic/./7-module/4-task/index.js?");

/***/ }),

/***/ "./8-module/1-task/index.js":
/*!**********************************!*\
  !*** ./8-module/1-task/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ CartIcon)\n/* harmony export */ });\n/* harmony import */ var _assets_lib_create_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/lib/create-element.js */ \"./assets/lib/create-element.js\");\n\r\n\r\nclass CartIcon {\r\n  constructor() {\r\n    this.render();\r\n    \r\n    this.addEventListeners();\r\n  }\r\n  \r\n  render() {\r\n    this.elem = (0,_assets_lib_create_element_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('<div class=\"cart-icon\"></div>');\r\n  }\r\n  \r\n  update(cart) {\r\n    if (!cart.isEmpty()) {\r\n      this.elem.classList.add('cart-icon_visible');\r\n      \r\n      this.elem.innerHTML = `\r\n        <div class=\"cart-icon__inner\">\r\n          <span class=\"cart-icon__count\">${ cart.getTotalCount() }</span>\r\n          <span class=\"cart-icon__price\">€${ cart.getTotalPrice().toFixed(2) }</span>\r\n        </div>`;\r\n      \r\n      this.updatePosition();\r\n      \r\n      this.elem.classList.add('shake');\r\n      this.elem.addEventListener(\r\n        'transitionend', \r\n        () => this.elem.classList.remove('shake'), \r\n        {once: true}\r\n      );\r\n    \r\n    } else {\r\n      this.elem.classList.remove('cart-icon_visible');\r\n    }\r\n  }\r\n  \r\n  addEventListeners() {\r\n    document.addEventListener('scroll', () => this.updatePosition());\r\n    window.addEventListener('resize', () => this.updatePosition());\r\n  }\r\n  \r\n  updatePosition() {\r\n    const caseA = window.pageYOffset > this.elem.getBoundingClientRect().top;\r\n    const caseB = document.documentElement.clientWidth > 767;\r\n    \r\n    caseA && caseB\r\n      ? this.styleFixed()\r\n      : this.styleDefault();\r\n  }\r\n  \r\n  styleDefault() {\r\n    Object.assign( this.elem.style, {\r\n      position: '',\r\n      top: '',\r\n      left: '',\r\n      zIndex: ''\r\n    });\r\n  }\r\n  \r\n  styleFixed() {\r\n    Object.assign( this.elem.style, {\r\n      position: 'fixed',\r\n      top: '50px',\r\n      zIndex: 1000,\r\n      left: Math.min(\r\n        document.querySelector('.container').getBoundingClientRect().right + 20,\r\n        document.documentElement.clientWidth - this.elem.offsetWidth - 10\r\n      ) + 'px'\r\n    });\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://tasks-jsbasic/./8-module/1-task/index.js?");

/***/ }),

/***/ "./8-module/2-task/index.js":
/*!**********************************!*\
  !*** ./8-module/2-task/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ProductGrid)\n/* harmony export */ });\n/* harmony import */ var _assets_lib_create_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/lib/create-element.js */ \"./assets/lib/create-element.js\");\n/* harmony import */ var _6_module_2_task_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../6-module/2-task/index.js */ \"./6-module/2-task/index.js\");\n\r\n\r\n\r\nclass ProductGrid {\r\n  \r\n  constructor(products) {\r\n    this.products = products;\r\n    this.filters = {};\r\n    \r\n    this.layout();\r\n    this.layoutGrid();\r\n  }\r\n  \r\n  layout() {\r\n    this.elem = (0,_assets_lib_create_element_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(`\r\n      <div class=\"products-grid\">\r\n        <div class=\"products-grid__inner\"></div>\r\n      </div>`\r\n    );\r\n  }\r\n  \r\n  layoutGrid() {\r\n    const caseLine = product => {\r\n      const caseA = this.filters.noNuts && product.nuts;\r\n      const caseB = this.filters.vegeterianOnly && !product.vegeterian;\r\n      const caseC = this.filters.maxSpiciness !== undefined && product.spiciness > this.filters.maxSpiciness;\r\n      const caseD = this.filters.category && product.category !== this.filters.category;\r\n      \r\n      return ( caseA || caseB || caseC || caseD ) ? false : true;\r\n    }\r\n    const grid = this.elem.querySelector('.products-grid__inner');\r\n    \r\n    while( grid.firstChild )\r\n      grid.removeChild( grid.firstChild );\r\n    \r\n    this.products\r\n      .filter( product => caseLine(product) )\r\n      .forEach( product => grid.append( new _6_module_2_task_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](product).elem ) );\r\n  }\r\n  \r\n  updateFilter = filters => {\r\n    Object.assign( this.filters, filters );\r\n    this.layoutGrid();\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://tasks-jsbasic/./8-module/2-task/index.js?");

/***/ }),

/***/ "./8-module/4-task/index.js":
/*!**********************************!*\
  !*** ./8-module/4-task/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Cart)\n/* harmony export */ });\n/* harmony import */ var _assets_lib_create_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/lib/create-element.js */ \"./assets/lib/create-element.js\");\n/* harmony import */ var _assets_lib_escape_html_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/lib/escape-html.js */ \"./assets/lib/escape-html.js\");\n/* harmony import */ var _7_module_2_task_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../7-module/2-task/index.js */ \"./7-module/2-task/index.js\");\n\r\n\r\n\r\n\r\nclass Cart {\r\n  cartItems = []; // [product: {...}, count: N]\r\n  \r\n  constructor(cartIcon) {\r\n    this.cartIcon = cartIcon;\r\n    this.cartIcon.elem.onclick = () => this.renderModal();\r\n  }\r\n  \r\n  addProduct( product ) {\r\n    if ( this.cartItems.some( item => item.product.id == product.id ) ) {\r\n      this.updateProductCount( product.id, 1 );\r\n      \r\n    } else {\r\n      const length = this.cartItems.push({\r\n        product: product,\r\n        count: 1\r\n      });\r\n      this.onProductUpdate( this.cartItems[ length - 1 ] );\r\n    }\r\n  }\r\n  \r\n  updateProductCount( productId, amount ) {\r\n    const prop = this.cartItems.find( item => item.product.id === productId );\r\n    \r\n    if ( (prop.count += amount) < 1 )\r\n      this.cartItems = this.cartItems.filter( item => item.count > 0 );\r\n    \r\n    this.onProductUpdate(prop);\r\n  }\r\n  \r\n  isEmpty = () => this.cartItems.length === 0 ? true : false;\r\n  \r\n  getTotalCount = () => this.cartItems.reduce( (acc, x) => acc + x.count, 0 );\r\n  \r\n  getTotalPrice = () => this.cartItems.reduce( (acc, x) => acc + (x.product.price * x.count), 0 );\r\n  \r\n  renderProduct(product, count) {\r\n    return `\r\n      <div class=\"cart-product\" data-product-id=\"${ product.id }\">\r\n        <div class=\"cart-product__img\">\r\n          <img src=\"/assets/images/products/${ product.image }\" alt=\"product\">\r\n        </div>\r\n        <div class=\"cart-product__info\">\r\n          <div class=\"cart-product__title\">${ (0,_assets_lib_escape_html_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( product.name ) }</div>\r\n          <div class=\"cart-product__price-wrap\">\r\n            <div class=\"cart-counter\">\r\n              <button type=\"button\" class=\"cart-counter__button cart-counter__button_minus\">\r\n                <img src=\"/assets/images/icons/square-minus-icon.svg\" alt=\"minus\">\r\n              </button>\r\n              <span class=\"cart-counter__count\">${ count }</span>\r\n              <button type=\"button\" class=\"cart-counter__button cart-counter__button_plus\">\r\n                <img src=\"/assets/images/icons/square-plus-icon.svg\" alt=\"plus\">\r\n              </button>\r\n            </div>\r\n            <div class=\"cart-product__price\">€${ (product.price * count).toFixed(2) }</div>\r\n          </div>\r\n        </div>\r\n      </div>`;\r\n  }\r\n  \r\n  renderOrderForm() {\r\n    return `\r\n      <form class=\"cart-form\">\r\n        <h5 class=\"cart-form__title\">Delivery</h5>\r\n        <div class=\"cart-form__group cart-form__group_row\">\r\n          <input name=\"name\" type=\"text\" class=\"cart-form__input\" placeholder=\"Name\" required value=\"Santa Claus\">\r\n          <input name=\"email\" type=\"email\" class=\"cart-form__input\" placeholder=\"Email\" required value=\"john@gmail.com\">\r\n          <input name=\"tel\" type=\"tel\" class=\"cart-form__input\" placeholder=\"Phone\" required value=\"+1234567\">\r\n        </div>\r\n        <div class=\"cart-form__group\">\r\n          <input name=\"address\" type=\"text\" class=\"cart-form__input\" placeholder=\"Address\" required value=\"North, Lapland, Snow Home\">\r\n        </div>\r\n        <div class=\"cart-buttons\">\r\n          <div class=\"cart-buttons__buttons btn-group\">\r\n            <div class=\"cart-buttons__info\">\r\n              <span class=\"cart-buttons__info-text\">total</span>\r\n              <span class=\"cart-buttons__info-price\">€${ this.getTotalPrice().toFixed(2) }</span>\r\n            </div>\r\n            <button type=\"submit\" class=\"cart-buttons__button btn-group__button button\">order</button>\r\n          </div>\r\n        </div>\r\n      </form>`;\r\n  }\r\n  \r\n  modalSub = suffix => this.modal.modal.querySelector(`.modal__${suffix}`);\r\n  \r\n  renderModal() {\r\n    this.modal = new _7_module_2_task_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]();\r\n    this.modalSub('title').textContent = 'Your order';\r\n    this.modalDiv = this.modalSub('body').appendChild( document.createElement('div') );\r\n    \r\n    const modalSetLayout = txt => this.modalDiv.insertAdjacentHTML( 'beforeend', txt );\r\n    \r\n    this.cartItems.forEach( item =>\r\n      modalSetLayout( this.renderProduct( item.product, item.count ) ) \r\n    );\r\n    modalSetLayout( this.renderOrderForm() );\r\n    \r\n    this.modalDiv\r\n      .querySelector('form')\r\n      .addEventListener('submit', this.onSubmit.bind(this));\r\n      \r\n    this.modalDiv\r\n      .addEventListener('click', this.onProductCountButton);\r\n    \r\n    this.modal.open();\r\n  }\r\n  \r\n  onProductCountButton = ({target}) => {\r\n    if ( target.closest('.cart-counter__button') ) {\r\n      this.updateProductCount( \r\n        target.closest('[data-product-id]').dataset.productId, \r\n        target.closest('.cart-counter__button_minus') ? -1 : 1\r\n      );\r\n    }\r\n  }\r\n  \r\n  onProductUpdate = cartItem => {\r\n    this.cartIcon.update(this);\r\n    \r\n    if ( document.querySelector('.is-modal-open') ) {\r\n      const producByDataNClass = cls => this.modalDiv.querySelector(`[data-product-id=\"${ cartItem.product.id }\"] ${ cls }`);\r\n      \r\n      const productCount = producByDataNClass('.cart-counter__count');\r\n      const productPrice = producByDataNClass('.cart-product__price');\r\n      const infoPrice = this.modalDiv.querySelector('.cart-buttons__info-price');\r\n      \r\n      productCount.textContent = cartItem.count;\r\n      productPrice.textContent = '€' + ( cartItem.product.price * cartItem.count ).toFixed(2);\r\n      infoPrice.textContent = '€' + this.getTotalPrice().toFixed(2);\r\n      \r\n      if ( cartItem.count < 1 ) producByDataNClass('').remove(); \r\n    }\r\n    if ( this.cartItems.length == 0 ) this.modal.close();\r\n  }\r\n  \r\n  async onSubmit(event) {\r\n    event.preventDefault();\r\n    \r\n    const form = this.modalDiv.querySelector('.cart-form');\r\n    \r\n    const submitButton = this.modalDiv.querySelector('button[type=\"submit\"]');\r\n    submitButton.classList.add('is-loading');\r\n    \r\n    await fetch('https://httpbin.org/post', {\r\n      method: 'POST',\r\n      body: new FormData(form)\r\n    });\r\n    submitButton.classList.remove('is-loading');\r\n    \r\n    this.modalSub('title').textContent = 'Success!';\r\n    this.modalDiv.innerHTML = this.onSubmitSuccessMessage();\r\n    \r\n    this.cartItems = [];\r\n    this.cartIcon.update(this);\r\n  };\r\n  \r\n  onSubmitSuccessMessage() {\r\n    return `\r\n      <div class=\"modal__body-inner\">\r\n        <p>\r\n          Order successful! Your order is being cooked :) <br>\r\n          We’ll notify you about delivery time shortly.<br>\r\n          <img src=\"/assets/images/delivery.gif\">\r\n        </p>\r\n      </div>\r\n    `;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://tasks-jsbasic/./8-module/4-task/index.js?");

/***/ }),

/***/ "./9-module/2-task/index.js":
/*!**********************************!*\
  !*** ./9-module/2-task/index.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Main)\n/* harmony export */ });\n/* harmony import */ var _6_module_3_task_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../6-module/3-task/index.js */ \"./6-module/3-task/index.js\");\n/* harmony import */ var _6_module_3_task_slides_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../6-module/3-task/slides.js */ \"./6-module/3-task/slides.js\");\n/* harmony import */ var _7_module_1_task_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../7-module/1-task/index.js */ \"./7-module/1-task/index.js\");\n/* harmony import */ var _7_module_1_task_categories_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../7-module/1-task/categories.js */ \"./7-module/1-task/categories.js\");\n/* harmony import */ var _7_module_4_task_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../7-module/4-task/index.js */ \"./7-module/4-task/index.js\");\n/* harmony import */ var _8_module_2_task_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../8-module/2-task/index.js */ \"./8-module/2-task/index.js\");\n/* harmony import */ var _8_module_1_task_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../8-module/1-task/index.js */ \"./8-module/1-task/index.js\");\n/* harmony import */ var _8_module_4_task_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../8-module/4-task/index.js */ \"./8-module/4-task/index.js\");\n/* harmony import */ var _all_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./all.css */ \"./9-module/2-task/all.css\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass Main {\r\n\r\n  constructor() {\r\n    this.blockCarousel = new _6_module_3_task_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]( _6_module_3_task_slides_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"] );\r\n    this.blockRibbon = new _7_module_1_task_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]( _7_module_1_task_categories_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"] );\r\n    this.blockSlider = new _7_module_4_task_index_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]({ steps: 5, value: 3 });\r\n    this.blockCartIcon = new _8_module_1_task_index_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]();\r\n    this.blockCart = new _8_module_4_task_index_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"]( this.blockCartIcon );\r\n  }\r\n\r\n  async render() {\r\n    const incrust = ( block, suffix ) => {\r\n      document\r\n        .querySelector(`[data-${ suffix }-holder]`)\r\n        .append( block.elem );\r\n    }\r\n    incrust( this.blockCarousel, 'carousel' );\r\n    incrust( this.blockRibbon, 'ribbon' );\r\n    incrust( this.blockSlider, 'slider' );\r\n    incrust( this.blockCartIcon, 'cart-icon' );\r\n    \r\n    await this.initProductsGrid();\r\n    \r\n    document.querySelector('.products-grid').remove();\r\n    incrust( this.blockGrid, 'products-grid' );\r\n    \r\n    this.initFilterDefaults();\r\n    this.initEventListeners();\r\n  }\r\n  \r\n  async initProductsGrid() {\r\n    const response = await fetch('products.json');\r\n    \r\n    this.productsArray = await response.json();\r\n    this.blockGrid = new _8_module_2_task_index_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]( this.productsArray );\r\n  }\r\n  \r\n  initFilterDefaults() {\r\n    this.blockGrid.updateFilter({\r\n      \r\n      noNuts: document.getElementById('nuts-checkbox').checked,\r\n      vegeterianOnly: document.getElementById('vegeterian-checkbox').checked,\r\n      \r\n      maxSpiciness: this.blockSlider.value,\r\n      category: this.blockRibbon.value\r\n    });\r\n  }\r\n  \r\n  initEventListeners() {\r\n    \r\n    document\r\n      .body\r\n      .addEventListener(\r\n        'product-add', \r\n        ({ detail: id }) => {\r\n          const product = this.productsArray.find( item => item.id == id );\r\n          this.blockCart.addProduct( product );\r\n        }\r\n      );\r\n    \r\n    document\r\n      .querySelector('#nuts-checkbox')\r\n      .addEventListener(\r\n        'change',\r\n        ({ target }) => this.blockGrid.updateFilter({ noNuts: target.checked })\r\n      );\r\n    \r\n    document\r\n      .querySelector('#vegeterian-checkbox')\r\n      .addEventListener(\r\n        'change',\r\n        ({ target }) => this.blockGrid.updateFilter({ vegeterianOnly: target.checked })\r\n      );\r\n    \r\n    this.blockSlider\r\n      .elem\r\n      .addEventListener(\r\n        'slider-change',\r\n        ({ detail: value }) => this.blockGrid.updateFilter({ maxSpiciness: value })\r\n      );\r\n    \r\n    this.blockRibbon\r\n      .elem\r\n      .addEventListener(\r\n        'ribbon-select',\r\n        ({ detail: id }) => this.blockGrid.updateFilter({ category: id })\r\n      );\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://tasks-jsbasic/./9-module/2-task/index.js?");

/***/ }),

/***/ "./assets/lib/create-element.js":
/*!**************************************!*\
  !*** ./assets/lib/create-element.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// doesn't work for td and some other elements that may not be placed into <div>\r\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(html) {\r\n  const div = document.createElement('div');\r\n  div.innerHTML = html;\r\n  return div.firstElementChild;\r\n};\r\n\n\n//# sourceURL=webpack://tasks-jsbasic/./assets/lib/create-element.js?");

/***/ }),

/***/ "./assets/lib/escape-html.js":
/*!***********************************!*\
  !*** ./assets/lib/escape-html.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (string => Array.from(string).map(char => {\r\n  switch(char) {\r\n    case '&':\r\n      return '&amp;';\r\n    case '\"':\r\n      return '&quot;';\r\n    case '\\'':\r\n      return '&#39;';\r\n    case '<':\r\n      return '&lt;';\r\n    case '>':\r\n      return '&gt;';\r\n    default:\r\n      return char;\r\n  }\r\n}).join(''));\n\n//# sourceURL=webpack://tasks-jsbasic/./assets/lib/escape-html.js?");

/***/ }),

/***/ "./9-module/2-task/all.css":
/*!*********************************!*\
  !*** ./9-module/2-task/all.css ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://tasks-jsbasic/./9-module/2-task/all.css?");

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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./9-module/2-task/index.js");
/******/ 	
/******/ })()
;