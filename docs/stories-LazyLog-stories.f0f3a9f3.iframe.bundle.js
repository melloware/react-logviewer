"use strict";
(self["webpackChunk_melloware_react_logviewer"] = self["webpackChunk_melloware_react_logviewer"] || []).push([[929],{

/***/ "./src/stories/LazyLog.stories.tsx":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "TextLog": () => (/* binding */ TextLog),
  "URLLog": () => (/* binding */ URLLog),
  "__namedExportsOrder": () => (/* binding */ __namedExportsOrder),
  "default": () => (/* binding */ LazyLog_stories)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("./node_modules/react/index.js");
// EXTERNAL MODULE: ./node_modules/immutable/dist/immutable.es.js
var immutable_es = __webpack_require__("./node_modules/immutable/dist/immutable.es.js");
// EXTERNAL MODULE: ./node_modules/react-virtualized-auto-sizer/dist/react-virtualized-auto-sizer.esm.js
var react_virtualized_auto_sizer_esm = __webpack_require__("./node_modules/react-virtualized-auto-sizer/dist/react-virtualized-auto-sizer.esm.js");
// EXTERNAL MODULE: ./node_modules/react-window/dist/index.esm.js + 1 modules
var index_esm = __webpack_require__("./node_modules/react-window/dist/index.esm.js");
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js");
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js");
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js");
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js");
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/components/LinePart/index.module.css
var index_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/components/LinePart/index.module.css");
;// CONCATENATED MODULE: ./src/components/LinePart/index.module.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(index_module/* default */.Z, options);




       /* harmony default export */ const LinePart_index_module = (index_module/* default */.Z && index_module/* default.locals */.Z.locals ? index_module/* default.locals */.Z.locals : undefined);

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__("./node_modules/react/jsx-runtime.js");
;// CONCATENATED MODULE: ./src/components/LinePart/index.tsx
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



var getClassName = function getClassName(part) {
  var className = ["log-part"];
  if (part.foreground && part.bold) {
    className.push(LinePart_index_module["".concat(part.foreground, "Bold")], LinePart_index_module.bold);
  } else if (part.foreground) {
    className.push(LinePart_index_module[part.foreground]);
  } else if (part.bold) {
    className.push(LinePart_index_module.bold);
  }
  if (part.background) {
    className.push(LinePart_index_module["".concat(part.background, "Bg")]);
  }
  if (part.italic) {
    className.push(LinePart_index_module.italic);
  }
  if (part.underline) {
    className.push(LinePart_index_module.underline);
  }
  return className.join(" ");
};
/**
 * An individual segment of text within a line. When the text content
 * is ANSI-parsed, each boundary is placed within its own `LinePart`
 * and styled separately (colors, text formatting, etc.) from the
 * rest of the line's content.
 */
var LinePart = /*#__PURE__*/function (_Component) {
  _inherits(LinePart, _Component);
  var _super = _createSuper(LinePart);
  function LinePart() {
    _classCallCheck(this, LinePart);
    return _super.apply(this, arguments);
  }
  _createClass(LinePart, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        format = _this$props.format,
        part = _this$props.part,
        style = _this$props.style;
      return /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        className: getClassName(part),
        style: style,
        children: format ? format(part.text) : part.text
      });
    }
  }]);
  return LinePart;
}(react.Component);
_defineProperty(LinePart, "defaultProps", {
  format: null,
  style: null
});
LinePart.displayName = "LinePart";

try {
    // @ts-ignore
    LinePart.displayName = "LinePart";
    // @ts-ignore
    LinePart.__docgenInfo = { "description": "An individual segment of text within a line. When the text content\nis ANSI-parsed, each boundary is placed within its own `LinePart`\nand styled separately (colors, text formatting, etc.) from the\nrest of the line's content.", "displayName": "LinePart", "props": { "part": { "defaultValue": null, "description": "The pieces of data to render in a line. Will typically\nbe multiple items in the array if ANSI parsed prior.", "name": "part", "required": true, "type": { "name": "LinePartCss" } }, "format": { "defaultValue": { value: "null" }, "description": "Execute a function against each line part's\n`text` property in `data` to process and\nreturn a new value to render for the part.", "name": "format", "required": false, "type": { "name": "((text: string) => ReactNode)" } }, "style": { "defaultValue": { value: "null" }, "description": "Style for the line Part", "name": "style", "required": false, "type": { "name": "CSSProperties" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/LinePart/index.tsx#LinePart"] = { docgenInfo: LinePart.__docgenInfo, name: "LinePart", path: "src/components/LinePart/index.tsx#LinePart" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/components/LineContent/index.module.css
var LineContent_index_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/components/LineContent/index.module.css");
;// CONCATENATED MODULE: ./src/components/LineContent/index.module.css

      
      
      
      
      
      
      
      
      

var index_module_options = {};

index_module_options.styleTagTransform = (styleTagTransform_default());
index_module_options.setAttributes = (setAttributesWithoutAttributes_default());

      index_module_options.insert = insertBySelector_default().bind(null, "head");
    
index_module_options.domAPI = (styleDomAPI_default());
index_module_options.insertStyleElement = (insertStyleElement_default());

var index_module_update = injectStylesIntoStyleTag_default()(LineContent_index_module/* default */.Z, index_module_options);




       /* harmony default export */ const components_LineContent_index_module = (LineContent_index_module/* default */.Z && LineContent_index_module/* default.locals */.Z.locals ? LineContent_index_module/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/components/LineContent/index.tsx
function LineContent_typeof(obj) { "@babel/helpers - typeof"; return LineContent_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, LineContent_typeof(obj); }
function LineContent_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function LineContent_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, LineContent_toPropertyKey(descriptor.key), descriptor); } }
function LineContent_createClass(Constructor, protoProps, staticProps) { if (protoProps) LineContent_defineProperties(Constructor.prototype, protoProps); if (staticProps) LineContent_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function LineContent_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) LineContent_setPrototypeOf(subClass, superClass); }
function LineContent_setPrototypeOf(o, p) { LineContent_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return LineContent_setPrototypeOf(o, p); }
function LineContent_createSuper(Derived) { var hasNativeReflectConstruct = LineContent_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = LineContent_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = LineContent_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return LineContent_possibleConstructorReturn(this, result); }; }
function LineContent_possibleConstructorReturn(self, call) { if (call && (LineContent_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return LineContent_assertThisInitialized(self); }
function LineContent_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function LineContent_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function LineContent_getPrototypeOf(o) { LineContent_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return LineContent_getPrototypeOf(o); }
function LineContent_defineProperty(obj, key, value) { key = LineContent_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function LineContent_toPropertyKey(arg) { var key = LineContent_toPrimitive(arg, "string"); return LineContent_typeof(key) === "symbol" ? key : String(key); }
function LineContent_toPrimitive(input, hint) { if (LineContent_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (LineContent_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




/* eslint-disable react/no-array-index-key */

/**
 * The container of all the individual pieces of content that
 * is on a single line. May contain one or more `LinePart`s
 * depending on ANSI parsing.
 */
var LineContent = /*#__PURE__*/function (_Component) {
  LineContent_inherits(LineContent, _Component);
  var _super = LineContent_createSuper(LineContent);
  function LineContent() {
    LineContent_classCallCheck(this, LineContent);
    return _super.apply(this, arguments);
  }
  LineContent_createClass(LineContent, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        data = _this$props.data,
        formatPart = _this$props.formatPart,
        number = _this$props.number,
        style = _this$props.style;
      if (data) {
        var last = data[data.length - 1];
        if (last && typeof last.text === "string" && !last.text.endsWith("\n")) {
          last.text += "\n";
        }
      }
      return /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        className: "log-content ".concat(components_LineContent_index_module.lineContent),
        style: style,
        children: data && data.map(function (part, n) {
          return /*#__PURE__*/(0,jsx_runtime.jsx)(LinePart, {
            part: part,
            format: formatPart
          }, "line-".concat(number, "-").concat(n));
        })
      });
    }
  }]);
  return LineContent;
}(react.Component);
LineContent_defineProperty(LineContent, "defaultProps", {
  formatPart: null,
  style: null
});
LineContent.displayName = "LineContent";

try {
    // @ts-ignore
    LineContent.displayName = "LineContent";
    // @ts-ignore
    LineContent.__docgenInfo = { "description": "The container of all the individual pieces of content that\nis on a single line. May contain one or more `LinePart`s\ndepending on ANSI parsing.", "displayName": "LineContent", "props": { "data": { "defaultValue": null, "description": "The pieces of data to render in a line. Will typically\nbe multiple items in the array if ANSI parsed prior.", "name": "data", "required": false, "type": { "name": "any[]" } }, "number": { "defaultValue": null, "description": "The line number being rendered.", "name": "number", "required": true, "type": { "name": "string | number | undefined" } }, "formatPart": { "defaultValue": { value: "null" }, "description": "Execute a function against each line part's\n`text` property in `data` to process and\nreturn a new value to render for the part.", "name": "formatPart", "required": false, "type": { "name": "((text: string) => ReactNode)" } }, "style": { "defaultValue": { value: "null" }, "description": "CSS Style of the LineContent.", "name": "style", "required": false, "type": { "name": "CSSProperties" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/LineContent/index.tsx#LineContent"] = { docgenInfo: LineContent.__docgenInfo, name: "LineContent", path: "src/components/LineContent/index.tsx#LineContent" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__("./node_modules/prop-types/index.js");
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/components/LineGutter/index.module.css
var LineGutter_index_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/components/LineGutter/index.module.css");
;// CONCATENATED MODULE: ./src/components/LineGutter/index.module.css

      
      
      
      
      
      
      
      
      

var LineGutter_index_module_options = {};

LineGutter_index_module_options.styleTagTransform = (styleTagTransform_default());
LineGutter_index_module_options.setAttributes = (setAttributesWithoutAttributes_default());

      LineGutter_index_module_options.insert = insertBySelector_default().bind(null, "head");
    
LineGutter_index_module_options.domAPI = (styleDomAPI_default());
LineGutter_index_module_options.insertStyleElement = (insertStyleElement_default());

var LineGutter_index_module_update = injectStylesIntoStyleTag_default()(LineGutter_index_module/* default */.Z, LineGutter_index_module_options);




       /* harmony default export */ const components_LineGutter_index_module = (LineGutter_index_module/* default */.Z && LineGutter_index_module/* default.locals */.Z.locals ? LineGutter_index_module/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/components/LineGutter/index.tsx
function LineGutter_typeof(obj) { "@babel/helpers - typeof"; return LineGutter_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, LineGutter_typeof(obj); }
function LineGutter_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function LineGutter_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, LineGutter_toPropertyKey(descriptor.key), descriptor); } }
function LineGutter_createClass(Constructor, protoProps, staticProps) { if (protoProps) LineGutter_defineProperties(Constructor.prototype, protoProps); if (staticProps) LineGutter_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function LineGutter_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) LineGutter_setPrototypeOf(subClass, superClass); }
function LineGutter_setPrototypeOf(o, p) { LineGutter_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return LineGutter_setPrototypeOf(o, p); }
function LineGutter_createSuper(Derived) { var hasNativeReflectConstruct = LineGutter_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = LineGutter_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = LineGutter_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return LineGutter_possibleConstructorReturn(this, result); }; }
function LineGutter_possibleConstructorReturn(self, call) { if (call && (LineGutter_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return LineGutter_assertThisInitialized(self); }
function LineGutter_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function LineGutter_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function LineGutter_getPrototypeOf(o) { LineGutter_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return LineGutter_getPrototypeOf(o); }
function LineGutter_defineProperty(obj, key, value) { key = LineGutter_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function LineGutter_toPropertyKey(arg) { var key = LineGutter_toPrimitive(arg, "string"); return LineGutter_typeof(key) === "symbol" ? key : String(key); }
function LineGutter_toPrimitive(input, hint) { if (LineGutter_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (LineGutter_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




/**
 * The gutter is an element between the line number and content.
 */
var LineGutter = /*#__PURE__*/function (_Component) {
  LineGutter_inherits(LineGutter, _Component);
  var _super = LineGutter_createSuper(LineGutter);
  function LineGutter() {
    LineGutter_classCallCheck(this, LineGutter);
    return _super.apply(this, arguments);
  }
  LineGutter_createClass(LineGutter, [{
    key: "render",
    value: function render() {
      var gutter = this.props.gutter;
      return /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
        className: "log-gutter ".concat(components_LineGutter_index_module.lineGutter),
        children: gutter
      });
    }
  }]);
  return LineGutter;
}(react.Component);
LineGutter_defineProperty(LineGutter, "propTypes", {
  gutter: prop_types.object
});
LineGutter_defineProperty(LineGutter, "defaultProps", {
  gutter: null
});
LineGutter.displayName = "LineGutter";

try {
    // @ts-ignore
    LineGutter.displayName = "LineGutter";
    // @ts-ignore
    LineGutter.__docgenInfo = { "description": "The gutter is an element between the line number and content.", "displayName": "LineGutter", "props": { "gutter": { "defaultValue": { value: "null" }, "description": "The gutter object", "name": "gutter", "required": false, "type": { "name": "ReactNode" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/LineGutter/index.tsx#LineGutter"] = { docgenInfo: LineGutter.__docgenInfo, name: "LineGutter", path: "src/components/LineGutter/index.tsx#LineGutter" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/components/LineNumber/index.module.css
var LineNumber_index_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/components/LineNumber/index.module.css");
;// CONCATENATED MODULE: ./src/components/LineNumber/index.module.css

      
      
      
      
      
      
      
      
      

var LineNumber_index_module_options = {};

LineNumber_index_module_options.styleTagTransform = (styleTagTransform_default());
LineNumber_index_module_options.setAttributes = (setAttributesWithoutAttributes_default());

      LineNumber_index_module_options.insert = insertBySelector_default().bind(null, "head");
    
LineNumber_index_module_options.domAPI = (styleDomAPI_default());
LineNumber_index_module_options.insertStyleElement = (insertStyleElement_default());

var LineNumber_index_module_update = injectStylesIntoStyleTag_default()(LineNumber_index_module/* default */.Z, LineNumber_index_module_options);




       /* harmony default export */ const components_LineNumber_index_module = (LineNumber_index_module/* default */.Z && LineNumber_index_module/* default.locals */.Z.locals ? LineNumber_index_module/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/components/LineNumber/index.tsx
function LineNumber_typeof(obj) { "@babel/helpers - typeof"; return LineNumber_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, LineNumber_typeof(obj); }
function LineNumber_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function LineNumber_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, LineNumber_toPropertyKey(descriptor.key), descriptor); } }
function LineNumber_createClass(Constructor, protoProps, staticProps) { if (protoProps) LineNumber_defineProperties(Constructor.prototype, protoProps); if (staticProps) LineNumber_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function LineNumber_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) LineNumber_setPrototypeOf(subClass, superClass); }
function LineNumber_setPrototypeOf(o, p) { LineNumber_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return LineNumber_setPrototypeOf(o, p); }
function LineNumber_createSuper(Derived) { var hasNativeReflectConstruct = LineNumber_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = LineNumber_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = LineNumber_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return LineNumber_possibleConstructorReturn(this, result); }; }
function LineNumber_possibleConstructorReturn(self, call) { if (call && (LineNumber_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return LineNumber_assertThisInitialized(self); }
function LineNumber_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function LineNumber_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function LineNumber_getPrototypeOf(o) { LineNumber_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return LineNumber_getPrototypeOf(o); }
function LineNumber_defineProperty(obj, key, value) { key = LineNumber_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function LineNumber_toPropertyKey(arg) { var key = LineNumber_toPrimitive(arg, "string"); return LineNumber_typeof(key) === "symbol" ? key : String(key); }
function LineNumber_toPrimitive(input, hint) { if (LineNumber_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (LineNumber_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



/**
 * The line number of a single line.
 * The anchor contained within is interactive, and will highlight the
 * entire line upon selection.
 */
var LineNumber = /*#__PURE__*/function (_Component) {
  LineNumber_inherits(LineNumber, _Component);
  var _super = LineNumber_createSuper(LineNumber);
  function LineNumber() {
    LineNumber_classCallCheck(this, LineNumber);
    return _super.apply(this, arguments);
  }
  LineNumber_createClass(LineNumber, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        highlight = _this$props.highlight,
        onClick = _this$props.onClick,
        number = _this$props.number,
        style = _this$props.style;
      var className = "log-number ".concat(highlight ? components_LineNumber_index_module.lineNumberHighlight : components_LineNumber_index_module.lineNumber);
      return /*#__PURE__*/(0,jsx_runtime.jsx)("a", {
        id: "" + number,
        onClick: onClick,
        className: className,
        style: style
      });
    }
  }]);
  return LineNumber;
}(react.Component);
LineNumber_defineProperty(LineNumber, "defaultProps", {
  style: null,
  highlight: false,
  onClick: null
});
LineNumber.displayName = "LineNumber";

try {
    // @ts-ignore
    LineNumber.displayName = "LineNumber";
    // @ts-ignore
    LineNumber.__docgenInfo = { "description": "The line number of a single line.\nThe anchor contained within is interactive, and will highlight the\nentire line upon selection.", "displayName": "LineNumber", "props": { "number": { "defaultValue": null, "description": "The line number to display in the anchor.", "name": "number", "required": true, "type": { "name": "string | number | undefined" } }, "highlight": { "defaultValue": { value: "false" }, "description": "Specify whether this line is highlighted.", "name": "highlight", "required": false, "type": { "name": "boolean" } }, "onClick": { "defaultValue": { value: "null" }, "description": "Execute a function when the line number is clicked.", "name": "onClick", "required": false, "type": { "name": "MouseEventHandler<HTMLAnchorElement>" } }, "style": { "defaultValue": { value: "null" }, "description": "CSS style for the Line Number.", "name": "style", "required": false, "type": { "name": "CSSProperties" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/LineNumber/index.tsx#LineNumber"] = { docgenInfo: LineNumber.__docgenInfo, name: "LineNumber", path: "src/components/LineNumber/index.tsx#LineNumber" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/components/Line/index.module.css
var Line_index_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/components/Line/index.module.css");
;// CONCATENATED MODULE: ./src/components/Line/index.module.css

      
      
      
      
      
      
      
      
      

var Line_index_module_options = {};

Line_index_module_options.styleTagTransform = (styleTagTransform_default());
Line_index_module_options.setAttributes = (setAttributesWithoutAttributes_default());

      Line_index_module_options.insert = insertBySelector_default().bind(null, "head");
    
Line_index_module_options.domAPI = (styleDomAPI_default());
Line_index_module_options.insertStyleElement = (insertStyleElement_default());

var Line_index_module_update = injectStylesIntoStyleTag_default()(Line_index_module/* default */.Z, Line_index_module_options);




       /* harmony default export */ const components_Line_index_module = (Line_index_module/* default */.Z && Line_index_module/* default.locals */.Z.locals ? Line_index_module/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/components/Line/index.tsx
function Line_typeof(obj) { "@babel/helpers - typeof"; return Line_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, Line_typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { Line_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function Line_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function Line_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, Line_toPropertyKey(descriptor.key), descriptor); } }
function Line_createClass(Constructor, protoProps, staticProps) { if (protoProps) Line_defineProperties(Constructor.prototype, protoProps); if (staticProps) Line_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function Line_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) Line_setPrototypeOf(subClass, superClass); }
function Line_setPrototypeOf(o, p) { Line_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Line_setPrototypeOf(o, p); }
function Line_createSuper(Derived) { var hasNativeReflectConstruct = Line_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Line_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Line_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Line_possibleConstructorReturn(this, result); }; }
function Line_possibleConstructorReturn(self, call) { if (call && (Line_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return Line_assertThisInitialized(self); }
function Line_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function Line_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function Line_getPrototypeOf(o) { Line_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Line_getPrototypeOf(o); }
function Line_defineProperty(obj, key, value) { key = Line_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function Line_toPropertyKey(arg) { var key = Line_toPrimitive(arg, "string"); return Line_typeof(key) === "symbol" ? key : String(key); }
function Line_toPrimitive(input, hint) { if (Line_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (Line_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }







/**
 * A single row of content, containing both the line number
 * and any text content within the line.
 */
var Line = /*#__PURE__*/function (_Component) {
  Line_inherits(Line, _Component);
  var _super = Line_createSuper(Line);
  function Line() {
    Line_classCallCheck(this, Line);
    return _super.apply(this, arguments);
  }
  Line_createClass(Line, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
        data = _this$props.data,
        formatPart = _this$props.formatPart,
        highlight = _this$props.highlight,
        selectable = _this$props.selectable,
        onLineNumberClick = _this$props.onLineNumberClick,
        number = _this$props.number,
        rowHeight = _this$props.rowHeight,
        style = _this$props.style,
        className = _this$props.className,
        highlightClassName = _this$props.highlightClassName,
        gutter = _this$props.gutter;
      var selectableClass = selectable ? " ".concat(components_Line_index_module.lineSelectable) : "";
      var highlightClass = highlight ? " ".concat(components_Line_index_module.lineHighlight, " ").concat(highlightClassName) : "";
      var classes = "".concat(components_Line_index_module.line).concat(selectableClass).concat(highlightClass, " ").concat(className);
      var lineStyle = _objectSpread(_objectSpread({}, style), {}, {
        lineHeight: "".concat(style ? style.height || rowHeight : rowHeight, "px"),
        minWidth: style ? style.width || "100%" : "100%",
        width: undefined
      });
      return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: classes,
        style: lineStyle,
        children: [this.props.enableLineNumbers ? /*#__PURE__*/(0,jsx_runtime.jsx)(LineNumber, {
          number: number,
          highlight: highlight,
          onClick: onLineNumberClick
        }) : null, this.props.enableGutters ? /*#__PURE__*/(0,jsx_runtime.jsx)(LineGutter, {
          gutter: gutter
        }) : null, /*#__PURE__*/(0,jsx_runtime.jsx)(LineContent, {
          number: number,
          formatPart: formatPart,
          data: data
        })]
      });
    }
  }]);
  return Line;
}(react.Component);
Line_defineProperty(Line, "defaultProps", {
  highlight: false,
  selectable: false,
  style: {},
  formatPart: null,
  onLineNumberClick: null,
  onRowClick: null,
  className: "",
  highlightClassName: "",
  enableLineNumbers: true
});
Line.displayName = "Line";

try {
    // @ts-ignore
    Line.displayName = "Line";
    // @ts-ignore
    Line.__docgenInfo = { "description": "A single row of content, containing both the line number\nand any text content within the line.", "displayName": "Line", "props": { "data": { "defaultValue": null, "description": "", "name": "data", "required": false, "type": { "name": "any[]" } }, "number": { "defaultValue": null, "description": "", "name": "number", "required": false, "type": { "name": "string | number" } }, "rowHeight": { "defaultValue": null, "description": "", "name": "rowHeight", "required": false, "type": { "name": "number" } }, "highlight": { "defaultValue": { value: "false" }, "description": "", "name": "highlight", "required": false, "type": { "name": "boolean" } }, "selectable": { "defaultValue": { value: "false" }, "description": "", "name": "selectable", "required": false, "type": { "name": "boolean" } }, "style": { "defaultValue": { value: "{}" }, "description": "", "name": "style", "required": false, "type": { "name": "CSSProperties" } }, "className": { "defaultValue": { value: "" }, "description": "", "name": "className", "required": false, "type": { "name": "string" } }, "gutter": { "defaultValue": null, "description": "", "name": "gutter", "required": false, "type": { "name": "ReactNode" } }, "highlightClassName": { "defaultValue": { value: "" }, "description": "", "name": "highlightClassName", "required": false, "type": { "name": "string" } }, "enableLineNumbers": { "defaultValue": { value: "true" }, "description": "Enable the line numbers to be displayed. Default is true.", "name": "enableLineNumbers", "required": false, "type": { "name": "boolean" } }, "enableGutters": { "defaultValue": null, "description": "Enable the line gutters to be displayed. Default is false", "name": "enableGutters", "required": false, "type": { "name": "boolean" } }, "formatPart": { "defaultValue": { value: "null" }, "description": "", "name": "formatPart", "required": false, "type": { "name": "((text: string) => ReactNode)" } }, "onLineNumberClick": { "defaultValue": { value: "null" }, "description": "", "name": "onLineNumberClick", "required": false, "type": { "name": "MouseEventHandler<HTMLAnchorElement>" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Line/index.tsx#Line"] = { docgenInfo: Line.__docgenInfo, name: "Line", path: "src/components/Line/index.tsx#Line" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/components/Loading/index.module.css
var Loading_index_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/components/Loading/index.module.css");
;// CONCATENATED MODULE: ./src/components/Loading/index.module.css

      
      
      
      
      
      
      
      
      

var Loading_index_module_options = {};

Loading_index_module_options.styleTagTransform = (styleTagTransform_default());
Loading_index_module_options.setAttributes = (setAttributesWithoutAttributes_default());

      Loading_index_module_options.insert = insertBySelector_default().bind(null, "head");
    
Loading_index_module_options.domAPI = (styleDomAPI_default());
Loading_index_module_options.insertStyleElement = (insertStyleElement_default());

var Loading_index_module_update = injectStylesIntoStyleTag_default()(Loading_index_module/* default */.Z, Loading_index_module_options);




       /* harmony default export */ const components_Loading_index_module = (Loading_index_module/* default */.Z && Loading_index_module/* default.locals */.Z.locals ? Loading_index_module/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/components/Loading/index.tsx
function Loading_typeof(obj) { "@babel/helpers - typeof"; return Loading_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, Loading_typeof(obj); }
function Loading_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function Loading_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? Loading_ownKeys(Object(source), !0).forEach(function (key) { Loading_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : Loading_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function Loading_defineProperty(obj, key, value) { key = Loading_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function Loading_toPropertyKey(arg) { var key = Loading_toPrimitive(arg, "string"); return Loading_typeof(key) === "symbol" ? key : String(key); }
function Loading_toPrimitive(input, hint) { if (Loading_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (Loading_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



/**
 * Just a loading spinner.
 */


var Loading = /*#__PURE__*/react.memo(function (inProps) {
  return /*#__PURE__*/(0,jsx_runtime.jsx)("svg", Loading_objectSpread(Loading_objectSpread({
    width: "44",
    height: "44",
    viewBox: "0 0 44 44",
    stroke: "#fff",
    className: components_Loading_index_module.loading
  }, inProps), {}, {
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)("g", {
      fill: "none",
      fillRule: "evenodd",
      strokeWidth: "2",
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("circle", {
        cx: "22",
        cy: "22",
        r: "1",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("animate", {
          attributeName: "r",
          begin: "0s",
          dur: "1.8s",
          values: "1; 20",
          calcMode: "spline",
          keyTimes: "0; 1",
          keySplines: "0.165, 0.84, 0.44, 1",
          repeatCount: "indefinite"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("animate", {
          attributeName: "stroke-opacity",
          begin: "0s",
          dur: "1.8s",
          values: "1; 0",
          calcMode: "spline",
          keyTimes: "0; 1",
          keySplines: "0.3, 0.61, 0.355, 1",
          repeatCount: "indefinite"
        })]
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)("circle", {
        cx: "22",
        cy: "22",
        r: "1",
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("animate", {
          attributeName: "r",
          begin: "-0.9s",
          dur: "1.8s",
          values: "1; 20",
          calcMode: "spline",
          keyTimes: "0; 1",
          keySplines: "0.165, 0.84, 0.44, 1",
          repeatCount: "indefinite"
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("animate", {
          attributeName: "stroke-opacity",
          begin: "-0.9s",
          dur: "1.8s",
          values: "1; 0",
          calcMode: "spline",
          keyTimes: "0; 1",
          keySplines: "0.3, 0.61, 0.355, 1",
          repeatCount: "indefinite"
        })]
      })]
    })
  }));
});
Loading.displayName = "Loading";
try {
    // @ts-ignore
    Loading.displayName = "Loading";
    // @ts-ignore
    Loading.__docgenInfo = { "description": "Just a loading spinner.", "displayName": "Loading", "props": {} };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/Loading/index.tsx#Loading"] = { docgenInfo: Loading.__docgenInfo, name: "Loading", path: "src/components/Loading/index.tsx#Loading" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ./node_modules/hotkeys-js/dist/hotkeys.esm.js
var hotkeys_esm = __webpack_require__("./node_modules/hotkeys-js/dist/hotkeys.esm.js");
// EXTERNAL MODULE: ./node_modules/react-string-replace/index.js
var react_string_replace = __webpack_require__("./node_modules/react-string-replace/index.js");
var react_string_replace_default = /*#__PURE__*/__webpack_require__.n(react_string_replace);
;// CONCATENATED MODULE: ./src/components/Utils/utils.ts


var ENCODED_NEWLINE = 10; // \n
var ENCODED_CARRIAGE_RETURN = 13; // \r
var SEARCH_BAR_HEIGHT = 45;
var SEARCH_MIN_KEYWORDS = 2;
var isNewline = function isNewline(current) {
  return current === ENCODED_NEWLINE || current === ENCODED_CARRIAGE_RETURN;
};
var getScrollIndex = function getScrollIndex(_ref) {
  var _ref$follow = _ref.follow,
    follow = _ref$follow === void 0 ? false : _ref$follow,
    _ref$scrollToLine = _ref.scrollToLine,
    scrollToLine = _ref$scrollToLine === void 0 ? 0 : _ref$scrollToLine,
    _ref$previousCount = _ref.previousCount,
    previousCount = _ref$previousCount === void 0 ? 0 : _ref$previousCount,
    _ref$count = _ref.count,
    count = _ref$count === void 0 ? 0 : _ref$count,
    _ref$offset = _ref.offset,
    offset = _ref$offset === void 0 ? 0 : _ref$offset;
  if (follow) {
    return count - 1 - offset;
  } else if (scrollToLine && previousCount > scrollToLine) {
    return -1;
  } else if (scrollToLine) {
    return scrollToLine - 1 - offset;
  }
  return -1;
};
var getHighlightRange = function getHighlightRange(highlight) {
  /**
   * Set to Range(0, 0) if:
   * 1) highlight doesn't evaluate to "true"
   * 2) highlight is not a number
   * 3) highlight is an array where a value isn't a number
   */
  if (!highlight || Array.isArray(highlight) && (isNaN(highlight[0]) || isNaN(highlight[1])) || !Array.isArray(highlight) && isNaN(highlight)) {
    return (0,immutable_es/* Range */.e6)(0, 0);
  }
  if (!Array.isArray(highlight)) {
    return (0,immutable_es/* Range */.e6)(highlight, highlight + 1);
  }
  if (highlight.length === 1) {
    return (0,immutable_es/* Range */.e6)(highlight[0], highlight[0] + 1);
  }
  return (0,immutable_es/* Range */.e6)(highlight[0], highlight[1] + 1);
};
var bufferConcat = function bufferConcat(a, b) {
  var buffer = new Uint8Array(a.length + b.length);
  buffer.set(a, 0);
  buffer.set(b, a.length);
  return buffer;
};
var convertBufferToLines = function convertBufferToLines(currentArray, previousArray) {
  var buffer = previousArray ? bufferConcat(previousArray, currentArray) : currentArray;
  var length = buffer.length;
  var lastNewlineIndex = 0;
  var index = 0;
  var lines = (0,immutable_es/* List */.aV)().withMutations(function (lines) {
    while (index < length) {
      var current = buffer[index];
      var next = buffer[index + 1];
      if (isNewline(current)) {
        lines.push(buffer.subarray(lastNewlineIndex, index));
        lastNewlineIndex = current === ENCODED_CARRIAGE_RETURN && next === ENCODED_NEWLINE ? index + 2 : index + 1;
        index = lastNewlineIndex;
      } else {
        index += 1;
      }
    }
    if (!previousArray && index !== lastNewlineIndex) {
      lines.push(buffer.slice(lastNewlineIndex));
    }
  });
  return {
    lines: lines,
    remaining: index !== lastNewlineIndex ? buffer.slice(lastNewlineIndex) : null
  };
};
var getLinesLengthRanges = function getLinesLengthRanges(rawLog) {
  var length = rawLog.length;
  var linesRanges = [];
  var lastNewlineIndex = 0;
  var index = 0;
  while (index < length) {
    var current = rawLog[index];
    var next = rawLog[index + 1];
    if (isNewline(current)) {
      linesRanges.push(index);
      lastNewlineIndex = current === ENCODED_CARRIAGE_RETURN && next === ENCODED_NEWLINE ? index + 2 : index + 1;
      index = lastNewlineIndex;
    } else {
      index += 1;
    }
  }
  return linesRanges;
};
var searchFormatPart = function searchFormatPart(_ref2) {
  var searchKeywords = _ref2.searchKeywords,
    nextFormatPart = _ref2.nextFormatPart,
    caseInsensitive = _ref2.caseInsensitive,
    replaceJsx = _ref2.replaceJsx,
    selectedLine = _ref2.selectedLine,
    replaceJsxHighlight = _ref2.replaceJsxHighlight,
    highlightedWordLocation = _ref2.highlightedWordLocation;
  return function (part) {
    var formattedPart = part;
    if (nextFormatPart) {
      formattedPart = nextFormatPart(part);
    }

    // Escape out regex characters so they're treated as normal
    // characters when we use regex to search for them.
    var regexKeywords = searchKeywords.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");

    // Split part on keywords
    var splitExp = new RegExp("(?=".concat(regexKeywords, ")"), caseInsensitive ? "i" : undefined);
    var splitParts = part.split(splitExp);

    // Expression to replace keywords
    var replaceExp = new RegExp("(".concat(regexKeywords, ")"), caseInsensitive ? "i" : undefined);

    // This deals with the special highlighting that occurs when a
    // line is selected using the browser search
    var handleHighlighting = function handleHighlighting() {
      // If this line is selected so we need to deal with special highlighting
      if (selectedLine) {
        // This is the special case where the searched
        // word is at the very start of the string
        if (splitParts.length === 1) {
          formattedPart = react_string_replace_default()(formattedPart, regexKeywords, replaceJsxHighlight);
        } else {
          // This highlights the special color
          // if the word is selected, otherwise, just
          // the regular matched search term color
          formattedPart = splitParts.map(function (splitPart, index) {
            return react_string_replace_default()(splitPart, replaceExp, index === highlightedWordLocation ? replaceJsxHighlight : replaceJsx);
          });
        }
      }
      // Finally, just do regular highlighting since this line isn't selected
      else {
        formattedPart = react_string_replace_default()(formattedPart, replaceExp, replaceJsx);
      }
      return formattedPart;
    };
    if (caseInsensitive) {
      if (part.toLowerCase().includes(searchKeywords.toLowerCase())) {
        formattedPart = handleHighlighting();
      }
    } else if (part.includes(searchKeywords)) {
      formattedPart = handleHighlighting();
    }
    return formattedPart;
  };
};
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/components/SearchBar/ArrowIcons/DownArrowIcon/index.module.css
var DownArrowIcon_index_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/components/SearchBar/ArrowIcons/DownArrowIcon/index.module.css");
;// CONCATENATED MODULE: ./src/components/SearchBar/ArrowIcons/DownArrowIcon/index.module.css

      
      
      
      
      
      
      
      
      

var DownArrowIcon_index_module_options = {};

DownArrowIcon_index_module_options.styleTagTransform = (styleTagTransform_default());
DownArrowIcon_index_module_options.setAttributes = (setAttributesWithoutAttributes_default());

      DownArrowIcon_index_module_options.insert = insertBySelector_default().bind(null, "head");
    
DownArrowIcon_index_module_options.domAPI = (styleDomAPI_default());
DownArrowIcon_index_module_options.insertStyleElement = (insertStyleElement_default());

var DownArrowIcon_index_module_update = injectStylesIntoStyleTag_default()(DownArrowIcon_index_module/* default */.Z, DownArrowIcon_index_module_options);




       /* harmony default export */ const ArrowIcons_DownArrowIcon_index_module = (DownArrowIcon_index_module/* default */.Z && DownArrowIcon_index_module/* default.locals */.Z.locals ? DownArrowIcon_index_module/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/components/SearchBar/ArrowIcons/DownArrowIcon/index.tsx
function DownArrowIcon_typeof(obj) { "@babel/helpers - typeof"; return DownArrowIcon_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, DownArrowIcon_typeof(obj); }
function DownArrowIcon_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function DownArrowIcon_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? DownArrowIcon_ownKeys(Object(source), !0).forEach(function (key) { DownArrowIcon_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : DownArrowIcon_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function DownArrowIcon_defineProperty(obj, key, value) { key = DownArrowIcon_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function DownArrowIcon_toPropertyKey(arg) { var key = DownArrowIcon_toPrimitive(arg, "string"); return DownArrowIcon_typeof(key) === "symbol" ? key : String(key); }
function DownArrowIcon_toPrimitive(input, hint) { if (DownArrowIcon_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (DownArrowIcon_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



var DownArrowIcon = /*#__PURE__*/react.memo(function (props) {
  return /*#__PURE__*/(0,jsx_runtime.jsx)("svg", DownArrowIcon_objectSpread(DownArrowIcon_objectSpread({
    className: ArrowIcons_DownArrowIcon_index_module.downArrowIcon
  }, props), {}, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 115.4 122.88",
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
      d: "M24.94,55A14.66,14.66,0,0,0,4.38,75.91l43.45,42.76a14.66,14.66,0,0,0,20.56,0L111,76.73A14.66,14.66,0,0,0,90.46,55.82l-18,17.69-.29-59.17c-.1-19.28-29.42-19-29.33.24l.29,58.34L24.94,55Z"
    })
  }));
});
try {
    // @ts-ignore
    DownArrowIcon.displayName = "DownArrowIcon";
    // @ts-ignore
    DownArrowIcon.__docgenInfo = { "description": "", "displayName": "DownArrowIcon", "props": { "ref": { "defaultValue": null, "description": "", "name": "ref", "required": false, "type": { "name": "((instance: SVGSVGElement | null) => void) | RefObject<SVGSVGElement> | null" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/SearchBar/ArrowIcons/DownArrowIcon/index.tsx#DownArrowIcon"] = { docgenInfo: DownArrowIcon.__docgenInfo, name: "DownArrowIcon", path: "src/components/SearchBar/ArrowIcons/DownArrowIcon/index.tsx#DownArrowIcon" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/components/SearchBar/ArrowIcons/UpArrowIcon/index.module.css
var UpArrowIcon_index_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/components/SearchBar/ArrowIcons/UpArrowIcon/index.module.css");
;// CONCATENATED MODULE: ./src/components/SearchBar/ArrowIcons/UpArrowIcon/index.module.css

      
      
      
      
      
      
      
      
      

var UpArrowIcon_index_module_options = {};

UpArrowIcon_index_module_options.styleTagTransform = (styleTagTransform_default());
UpArrowIcon_index_module_options.setAttributes = (setAttributesWithoutAttributes_default());

      UpArrowIcon_index_module_options.insert = insertBySelector_default().bind(null, "head");
    
UpArrowIcon_index_module_options.domAPI = (styleDomAPI_default());
UpArrowIcon_index_module_options.insertStyleElement = (insertStyleElement_default());

var UpArrowIcon_index_module_update = injectStylesIntoStyleTag_default()(UpArrowIcon_index_module/* default */.Z, UpArrowIcon_index_module_options);




       /* harmony default export */ const ArrowIcons_UpArrowIcon_index_module = (UpArrowIcon_index_module/* default */.Z && UpArrowIcon_index_module/* default.locals */.Z.locals ? UpArrowIcon_index_module/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/components/SearchBar/ArrowIcons/UpArrowIcon/index.tsx
function UpArrowIcon_typeof(obj) { "@babel/helpers - typeof"; return UpArrowIcon_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, UpArrowIcon_typeof(obj); }
function UpArrowIcon_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function UpArrowIcon_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? UpArrowIcon_ownKeys(Object(source), !0).forEach(function (key) { UpArrowIcon_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : UpArrowIcon_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function UpArrowIcon_defineProperty(obj, key, value) { key = UpArrowIcon_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function UpArrowIcon_toPropertyKey(arg) { var key = UpArrowIcon_toPrimitive(arg, "string"); return UpArrowIcon_typeof(key) === "symbol" ? key : String(key); }
function UpArrowIcon_toPrimitive(input, hint) { if (UpArrowIcon_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (UpArrowIcon_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



var UpArrowIcon = /*#__PURE__*/react.memo(function (props) {
  return /*#__PURE__*/(0,jsx_runtime.jsx)("svg", UpArrowIcon_objectSpread(UpArrowIcon_objectSpread({
    className: ArrowIcons_UpArrowIcon_index_module.upArrowIcon
  }, props), {}, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 115.4 122.88",
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
      d: "M24.94,67.88A14.66,14.66,0,0,1,4.38,47L47.83,4.21a14.66,14.66,0,0,1,20.56,0L111,46.15A14.66,14.66,0,0,1,90.46,67.06l-18-17.69-.29,59.17c-.1,19.28-29.42,19-29.33-.25L43.14,50,24.94,67.88Z"
    })
  }));
});
try {
    // @ts-ignore
    UpArrowIcon.displayName = "UpArrowIcon";
    // @ts-ignore
    UpArrowIcon.__docgenInfo = { "description": "", "displayName": "UpArrowIcon", "props": { "ref": { "defaultValue": null, "description": "", "name": "ref", "required": false, "type": { "name": "((instance: SVGSVGElement | null) => void) | RefObject<SVGSVGElement> | null" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/SearchBar/ArrowIcons/UpArrowIcon/index.tsx#UpArrowIcon"] = { docgenInfo: UpArrowIcon.__docgenInfo, name: "UpArrowIcon", path: "src/components/SearchBar/ArrowIcons/UpArrowIcon/index.tsx#UpArrowIcon" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/components/SearchBar/FilterLinesIcon/index.module.css
var FilterLinesIcon_index_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/components/SearchBar/FilterLinesIcon/index.module.css");
;// CONCATENATED MODULE: ./src/components/SearchBar/FilterLinesIcon/index.module.css

      
      
      
      
      
      
      
      
      

var FilterLinesIcon_index_module_options = {};

FilterLinesIcon_index_module_options.styleTagTransform = (styleTagTransform_default());
FilterLinesIcon_index_module_options.setAttributes = (setAttributesWithoutAttributes_default());

      FilterLinesIcon_index_module_options.insert = insertBySelector_default().bind(null, "head");
    
FilterLinesIcon_index_module_options.domAPI = (styleDomAPI_default());
FilterLinesIcon_index_module_options.insertStyleElement = (insertStyleElement_default());

var FilterLinesIcon_index_module_update = injectStylesIntoStyleTag_default()(FilterLinesIcon_index_module/* default */.Z, FilterLinesIcon_index_module_options);




       /* harmony default export */ const SearchBar_FilterLinesIcon_index_module = (FilterLinesIcon_index_module/* default */.Z && FilterLinesIcon_index_module/* default.locals */.Z.locals ? FilterLinesIcon_index_module/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/components/SearchBar/FilterLinesIcon/index.tsx
function FilterLinesIcon_typeof(obj) { "@babel/helpers - typeof"; return FilterLinesIcon_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, FilterLinesIcon_typeof(obj); }
function FilterLinesIcon_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function FilterLinesIcon_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? FilterLinesIcon_ownKeys(Object(source), !0).forEach(function (key) { FilterLinesIcon_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : FilterLinesIcon_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function FilterLinesIcon_defineProperty(obj, key, value) { key = FilterLinesIcon_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function FilterLinesIcon_toPropertyKey(arg) { var key = FilterLinesIcon_toPrimitive(arg, "string"); return FilterLinesIcon_typeof(key) === "symbol" ? key : String(key); }
function FilterLinesIcon_toPrimitive(input, hint) { if (FilterLinesIcon_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (FilterLinesIcon_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



var FilterLinesIcon = /*#__PURE__*/react.memo(function (props) {
  return /*#__PURE__*/(0,jsx_runtime.jsx)("svg", FilterLinesIcon_objectSpread(FilterLinesIcon_objectSpread({
    className: SearchBar_FilterLinesIcon_index_module.filterLinesIcon
  }, props), {}, {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 286.054 286.054",
    children: /*#__PURE__*/(0,jsx_runtime.jsx)("path", {
      d: "M8.939 44.696h178.784a8.931 8.931 0 0 0 8.939-8.939V8.939A8.937 8.937 0 0 0 187.723 0H8.939C4.005 0 0 4.005 0 8.939v26.818c0 4.934 4.005 8.939 8.939 8.939zm268.176 35.757H8.939C4.005 80.453 0 84.457 0 89.392v26.818a8.937 8.937 0 0 0 8.939 8.939h268.176a8.931 8.931 0 0 0 8.939-8.939V89.392a8.936 8.936 0 0 0-8.939-8.939zM8.939 205.601h178.784a8.931 8.931 0 0 0 8.939-8.939v-26.818a8.931 8.931 0 0 0-8.939-8.939H8.939A8.937 8.937 0 0 0 0 169.844v26.818a8.937 8.937 0 0 0 8.939 8.939zm268.176 35.757H8.939A8.937 8.937 0 0 0 0 250.297v26.818a8.937 8.937 0 0 0 8.939 8.939h268.176a8.931 8.931 0 0 0 8.939-8.939v-26.818a8.931 8.931 0 0 0-8.939-8.939z"
    })
  }));
});
try {
    // @ts-ignore
    FilterLinesIcon.displayName = "FilterLinesIcon";
    // @ts-ignore
    FilterLinesIcon.__docgenInfo = { "description": "", "displayName": "FilterLinesIcon", "props": { "ref": { "defaultValue": null, "description": "", "name": "ref", "required": false, "type": { "name": "((instance: SVGSVGElement | null) => void) | RefObject<SVGSVGElement> | null" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/SearchBar/FilterLinesIcon/index.tsx#FilterLinesIcon"] = { docgenInfo: FilterLinesIcon.__docgenInfo, name: "FilterLinesIcon", path: "src/components/SearchBar/FilterLinesIcon/index.tsx#FilterLinesIcon" };
}
catch (__react_docgen_typescript_loader_error) { }
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/components/SearchBar/index.module.css
var SearchBar_index_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/components/SearchBar/index.module.css");
;// CONCATENATED MODULE: ./src/components/SearchBar/index.module.css

      
      
      
      
      
      
      
      
      

var SearchBar_index_module_options = {};

SearchBar_index_module_options.styleTagTransform = (styleTagTransform_default());
SearchBar_index_module_options.setAttributes = (setAttributesWithoutAttributes_default());

      SearchBar_index_module_options.insert = insertBySelector_default().bind(null, "head");
    
SearchBar_index_module_options.domAPI = (styleDomAPI_default());
SearchBar_index_module_options.insertStyleElement = (insertStyleElement_default());

var SearchBar_index_module_update = injectStylesIntoStyleTag_default()(SearchBar_index_module/* default */.Z, SearchBar_index_module_options);




       /* harmony default export */ const components_SearchBar_index_module = (SearchBar_index_module/* default */.Z && SearchBar_index_module/* default.locals */.Z.locals ? SearchBar_index_module/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/components/SearchBar/index.tsx
function SearchBar_typeof(obj) { "@babel/helpers - typeof"; return SearchBar_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, SearchBar_typeof(obj); }
function SearchBar_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function SearchBar_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, SearchBar_toPropertyKey(descriptor.key), descriptor); } }
function SearchBar_createClass(Constructor, protoProps, staticProps) { if (protoProps) SearchBar_defineProperties(Constructor.prototype, protoProps); if (staticProps) SearchBar_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function SearchBar_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) SearchBar_setPrototypeOf(subClass, superClass); }
function SearchBar_setPrototypeOf(o, p) { SearchBar_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return SearchBar_setPrototypeOf(o, p); }
function SearchBar_createSuper(Derived) { var hasNativeReflectConstruct = SearchBar_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = SearchBar_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = SearchBar_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return SearchBar_possibleConstructorReturn(this, result); }; }
function SearchBar_possibleConstructorReturn(self, call) { if (call && (SearchBar_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return SearchBar_assertThisInitialized(self); }
function SearchBar_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function SearchBar_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function SearchBar_getPrototypeOf(o) { SearchBar_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return SearchBar_getPrototypeOf(o); }
function SearchBar_defineProperty(obj, key, value) { key = SearchBar_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function SearchBar_toPropertyKey(arg) { var key = SearchBar_toPrimitive(arg, "string"); return SearchBar_typeof(key) === "symbol" ? key : String(key); }
function SearchBar_toPrimitive(input, hint) { if (SearchBar_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (SearchBar_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/* eslint-disable @typescript-eslint/no-empty-function */









var SearchBar = /*#__PURE__*/function (_Component) {
  SearchBar_inherits(SearchBar, _Component);
  var _super = SearchBar_createSuper(SearchBar);
  function SearchBar(props) {
    var _this;
    SearchBar_classCallCheck(this, SearchBar);
    _this = _super.call(this, props);
    SearchBar_defineProperty(SearchBar_assertThisInitialized(_this), "state", {
      keywords: ""
    });
    SearchBar_defineProperty(SearchBar_assertThisInitialized(_this), "handleSearchChange", function (e) {
      var keywords = e.target.value;
      _this.setState({
        keywords: keywords
      }, function () {
        return _this.search();
      });
    });
    SearchBar_defineProperty(SearchBar_assertThisInitialized(_this), "handleFilterToggle", function () {
      _this.props.onFilterLinesWithMatches && _this.props.onFilterLinesWithMatches(!_this.props.filterActive);
    });
    SearchBar_defineProperty(SearchBar_assertThisInitialized(_this), "handleKeyPress", function (e) {
      if (e.key === "Enter") {
        if (e.shiftKey) {
          _this.props.onShiftEnter && _this.props.onShiftEnter(e);
        } else {
          _this.props.onEnter && _this.props.onEnter(e);
        }
      }
    });
    SearchBar_defineProperty(SearchBar_assertThisInitialized(_this), "handleSearchHotkey", function (e) {
      if (!_this.inputRef.current) {
        return;
      }
      e.preventDefault();
      _this.inputRef.current.focus();
    });
    SearchBar_defineProperty(SearchBar_assertThisInitialized(_this), "search", function () {
      var keywords = _this.state.keywords;
      var _this$props = _this.props,
        onSearch = _this$props.onSearch,
        onClearSearch = _this$props.onClearSearch;
      if (keywords && keywords.length > SEARCH_MIN_KEYWORDS) {
        onSearch && onSearch(keywords);
      } else {
        onClearSearch && onClearSearch();
      }
    });
    _this.inputRef = /*#__PURE__*/(0,react.createRef)();
    return _this;
  }
  SearchBar_createClass(SearchBar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.enableHotKeys) {
        (0,hotkeys_esm/* default */.Z)("ctrl+f,command+f", this.handleSearchHotkey);
        hotkeys_esm/* default.filter */.Z.filter = function () {
          return true;
        };
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.props.enableHotKeys) {
        hotkeys_esm/* default.deleteScope */.Z.deleteScope("all");
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
        resultsCount = _this$props2.resultsCount,
        filterActive = _this$props2.filterActive,
        disabled = _this$props2.disabled,
        enableSearchNavigation = _this$props2.enableSearchNavigation,
        currentResultsPosition = _this$props2.currentResultsPosition,
        onEnter = _this$props2.onEnter,
        onShiftEnter = _this$props2.onShiftEnter;
      var matchesLabel = "match".concat(resultsCount === 1 ? "" : "es");
      var filterIcon = filterActive ? components_SearchBar_index_module.active : components_SearchBar_index_module.inactive;
      var arrowIcon = resultsCount ? components_SearchBar_index_module.active : components_SearchBar_index_module.inactive;
      return /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        className: "react-lazylog-searchbar ".concat(components_SearchBar_index_module.searchBar),
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)("span", {
          className: "react-lazylog-searchbar-matches ".concat(resultsCount ? "active" : "inactive", " ").concat(resultsCount ? components_SearchBar_index_module.active : components_SearchBar_index_module.inactive),
          style: {
            marginRight: "10px"
          },
          children: enableSearchNavigation && resultsCount ? "".concat(currentResultsPosition + 1, " of ").concat(resultsCount, " ").concat(matchesLabel) : "".concat(resultsCount, " ").concat(matchesLabel)
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("input", {
          autoComplete: "off",
          type: "text",
          name: "search",
          placeholder: "Search",
          className: "react-lazylog-searchbar-input ".concat(components_SearchBar_index_module.searchInput),
          onChange: this.handleSearchChange,
          onKeyUp: this.handleKeyPress,
          value: this.state.keywords,
          disabled: disabled,
          ref: this.inputRef
        }), /*#__PURE__*/(0,jsx_runtime.jsx)("button", {
          disabled: disabled,
          className: "react-lazylog-searchbar-filter ".concat(filterActive ? "active" : "inactive", " ").concat(components_SearchBar_index_module.button, " ").concat(filterIcon, " ").concat(components_SearchBar_index_module.clickable),
          onKeyUp: this.handleKeyPress,
          onMouseUp: this.handleFilterToggle,
          children: /*#__PURE__*/(0,jsx_runtime.jsx)(FilterLinesIcon, {})
        }), enableSearchNavigation && /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
          children: [/*#__PURE__*/(0,jsx_runtime.jsx)("button", {
            disabled: disabled,
            className: "react-lazylog-searchbar-up-arrow ".concat(resultsCount ? "active ".concat(components_SearchBar_index_module.clickable) : "inactive", " ").concat(components_SearchBar_index_module.button, " ").concat(arrowIcon),
            onClick: onShiftEnter,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(UpArrowIcon, {})
          }), /*#__PURE__*/(0,jsx_runtime.jsx)("button", {
            disabled: disabled,
            className: "react-lazylog-searchbar-down-arrow ".concat(resultsCount ? "active ".concat(components_SearchBar_index_module.clickable) : "inactive", " ").concat(components_SearchBar_index_module.button, " ").concat(arrowIcon),
            onClick: onEnter,
            children: /*#__PURE__*/(0,jsx_runtime.jsx)(DownArrowIcon, {})
          })]
        })]
      });
    }
  }]);
  return SearchBar;
}(react.Component);
SearchBar_defineProperty(SearchBar, "defaultProps", {
  onSearch: function onSearch() {},
  onClearSearch: function onClearSearch() {},
  onFilterLinesWithMatches: function onFilterLinesWithMatches() {},
  resultsCount: 0,
  filterActive: false,
  disabled: false,
  enableHotKeys: false,
  currentResultsPosition: 0
});
SearchBar.displayName = "SearchBar";

try {
    // @ts-ignore
    SearchBar.displayName = "SearchBar";
    // @ts-ignore
    SearchBar.__docgenInfo = { "description": "", "displayName": "SearchBar", "props": { "enableHotKeys": { "defaultValue": { value: "false" }, "description": "If true, capture system hotkeys for searching the page (Cmd-F, Ctrl-F,\netc.)", "name": "enableHotKeys", "required": false, "type": { "name": "boolean" } }, "currentResultsPosition": { "defaultValue": { value: "0" }, "description": "The current result the browser search is highlighting.\nOnly applicable if searchLikeBrowser is true.\nDefaults to 0.", "name": "currentResultsPosition", "required": false, "type": { "name": "number" } }, "disabled": { "defaultValue": { value: "false" }, "description": "If true, the input field and filter button will be disabled.", "name": "disabled", "required": false, "type": { "name": "boolean" } }, "filterActive": { "defaultValue": { value: "false" }, "description": "If true, then only lines that match the search term will be displayed.", "name": "filterActive", "required": false, "type": { "name": "boolean" } }, "onClearSearch": { "defaultValue": { value: "() => {}" }, "description": "Executes a function when the search input has been cleared.", "name": "onClearSearch", "required": false, "type": { "name": "(() => void)" } }, "onFilterLinesWithMatches": { "defaultValue": { value: "() => {}" }, "description": "Executes a function when the option `Filter Lines With Matches`\nis enable.", "name": "onFilterLinesWithMatches", "required": false, "type": { "name": "((isFiltered: boolean) => void)" } }, "onSearch": { "defaultValue": { value: "() => {}" }, "description": "Executes a function when the user starts typing.", "name": "onSearch", "required": false, "type": { "name": "((keyword: string) => void)" } }, "onEnter": { "defaultValue": null, "description": "Exectues a function when enter is pressed.", "name": "onEnter", "required": false, "type": { "name": "((e: UIEvent<HTMLElement, UIEvent>) => void)" } }, "onShiftEnter": { "defaultValue": null, "description": "Exectues a function when shift + enter is pressed.", "name": "onShiftEnter", "required": false, "type": { "name": "((e: UIEvent<HTMLElement, UIEvent>) => void)" } }, "resultsCount": { "defaultValue": { value: "0" }, "description": "Number of search results. Should come from the component\nexecuting the search algorithm.", "name": "resultsCount", "required": false, "type": { "name": "number" } }, "enableSearchNavigation": { "defaultValue": null, "description": "If true, adds up and down arrows to search bar to jump\nto the next and previous result. The down arrow calls\n\"onEnter\" and the up arrow calls \"onShiftEnter\"\nDefaults to false, which does not add the arrows.", "name": "enableSearchNavigation", "required": false, "type": { "name": "boolean" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/SearchBar/index.tsx#SearchBar"] = { docgenInfo: SearchBar.__docgenInfo, name: "SearchBar", path: "src/components/SearchBar/index.tsx#SearchBar" };
}
catch (__react_docgen_typescript_loader_error) { }
;// CONCATENATED MODULE: ./src/components/Utils/ansiparse.ts
function ansiparse_typeof(obj) { "@babel/helpers - typeof"; return ansiparse_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, ansiparse_typeof(obj); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ansiparse_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function ansiparse_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ansiparse_ownKeys(Object(source), !0).forEach(function (key) { ansiparse_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ansiparse_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function ansiparse_defineProperty(obj, key, value) { key = ansiparse_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function ansiparse_toPropertyKey(arg) { var key = ansiparse_toPrimitive(arg, "string"); return ansiparse_typeof(key) === "symbol" ? key : String(key); }
function ansiparse_toPrimitive(input, hint) { if (ansiparse_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (ansiparse_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
/* eslint-disable no-plusplus, no-continue */

var foregroundColors = {
  "30": "black",
  "31": "red",
  "32": "green",
  "33": "yellow",
  "34": "blue",
  "35": "magenta",
  "36": "cyan",
  "37": "white",
  "90": "grey"
};
var backgroundColors = {
  "40": "black",
  "41": "red",
  "42": "green",
  "43": "yellow",
  "44": "blue",
  "45": "magenta",
  "46": "cyan",
  "47": "white"
};
var styles = {
  "1": "bold",
  "3": "italic",
  "4": "underline"
};
var eraseChar = function eraseChar(matchingText, result) {
  if (matchingText.length) {
    return [matchingText.substr(0, matchingText.length - 1), result];
  } else if (result.length) {
    var index = result.length - 1;
    var text = result[index].text;
    var newResult = text.length === 1 ? result.slice(0, result.length - 1) : result.map(function (item, i) {
      return index === i ? ansiparse_objectSpread(ansiparse_objectSpread({}, item), {}, {
        text: text.substr(0, text.length - 1)
      }) : item;
    });
    return [matchingText, newResult];
  }
  return [matchingText, result];
};
var ansiparse = function ansiparse(str) {
  var matchingControl = null;
  var matchingData = null;
  var matchingText = "";
  var ansiState = [];
  var result = [];
  var state = {};
  for (var i = 0; i < str.length; i++) {
    if (matchingControl !== null) {
      if (matchingControl === "\x1b" && str[i] === "[") {
        if (matchingText) {
          state.text = matchingText;
          result.push(state);
          state = {};
          matchingText = "";
        }
        matchingControl = null;
        matchingData = "";
      } else {
        matchingText += matchingControl + str[i];
        matchingControl = null;
      }
      continue;
    } else if (matchingData !== null) {
      if (str[i] === ";") {
        ansiState.push(matchingData);
        matchingData = "";
      } else if (str[i] === "m") {
        ansiState.push(matchingData);
        matchingData = null;
        matchingText = "";
        for (var a = 0; a < ansiState.length; a++) {
          var ansiCode = ansiState[a];
          if (foregroundColors[ansiCode]) {
            state.foreground = foregroundColors[ansiCode];
          } else if (backgroundColors[ansiCode]) {
            state.background = backgroundColors[ansiCode];
          } else if (ansiCode === "39") {
            delete state.foreground;
          } else if (ansiCode === "49") {
            delete state.background;
          } else if (styles[ansiCode]) {
            state[styles[ansiCode]] = true;
          } else if (ansiCode === "22") {
            state.bold = false;
          } else if (ansiCode === "23") {
            state.italic = false;
          } else if (ansiCode === "24") {
            state.underline = false;
          }
        }
        ansiState = [];
      } else {
        matchingData += str[i];
      }
      continue;
    }
    if (str[i] === "\x1b") {
      matchingControl = str[i];
    } else if (str[i] === "\b") {
      var _eraseChar = eraseChar(matchingText, result);
      var _eraseChar2 = _slicedToArray(_eraseChar, 2);
      matchingText = _eraseChar2[0];
      result = _eraseChar2[1];
    } else {
      matchingText += str[i];
    }
  }
  if (matchingText) {
    state.text = matchingText + (matchingControl || "");
    result.push(state);
  }
  return result;
};
/* harmony default export */ const Utils_ansiparse = (ansiparse);
;// CONCATENATED MODULE: ./src/components/Utils/encoding.ts
var encode = function encode(value) {
  return new TextEncoder().encode(value);
};
var decode = function decode(value) {
  if (!ArrayBuffer.isView(value)) {
    value = new Uint8Array([value]);
  }
  return new TextDecoder("utf-8").decode(value);
};
// EXTERNAL MODULE: ./node_modules/mitt/dist/mitt.mjs
var mitt = __webpack_require__("./node_modules/mitt/dist/mitt.mjs");
;// CONCATENATED MODULE: ./src/components/Utils/request.ts
function request_typeof(obj) { "@babel/helpers - typeof"; return request_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, request_typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == request_typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var fetcher = Promise.resolve().then(function () {
  return self.fetch;
});
/* harmony default export */ const request = (function (url, options) {
  var emitter = (0,mitt/* default */.Z)();
  emitter.on("start", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
    var fetch, response, error, arrayBuffer, encodedLog, _convertBufferToLines, lines;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return fetcher;
        case 3:
          fetch = _context.sent;
          _context.next = 6;
          return fetch(url, Object.assign({
            credentials: "omit"
          }, options));
        case 6:
          response = _context.sent;
          if (response.ok) {
            _context.next = 12;
            break;
          }
          error = new Error(response.statusText); // @ts-ignore
          error["status"] = response.status;
          emitter.emit("error", error);
          return _context.abrupt("return");
        case 12:
          _context.next = 14;
          return response.arrayBuffer();
        case 14:
          arrayBuffer = _context.sent;
          encodedLog = new Uint8Array(arrayBuffer);
          _convertBufferToLines = convertBufferToLines(encodedLog), lines = _convertBufferToLines.lines;
          emitter.emit("update", {
            lines: lines
          });
          emitter.emit("end", encodedLog);
          _context.next = 24;
          break;
        case 21:
          _context.prev = 21;
          _context.t0 = _context["catch"](0);
          emitter.emit("error", _context.t0);
        case 24:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 21]]);
  })));
  return emitter;
});
;// CONCATENATED MODULE: ./src/components/Utils/search.ts


var searchIndexes = function searchIndexes(rawKeywords, rawLog) {
  var keywords = Array.from(encode(rawKeywords));
  var table = [-1, 0];
  var keywordsLength = keywords.length;
  var fileLength = rawLog.length;
  var maxKeywordsIndex = keywordsLength - 1;
  var keywordsIndex = 0;
  var fileIndex = 0;
  var index = 0;
  var position = 2;

  // Build a table for the search algorithm.
  // This takes O(needleLength) steps.
  while (position < keywordsLength) {
    if (keywords[position - 1] === keywords[keywordsIndex]) {
      keywordsIndex += 1;
      table[position] = keywordsIndex;
      position += 1;
    } else if (keywordsIndex > 0) {
      keywordsIndex = table[keywordsIndex];
    } else {
      table[position] = 0;
      position += 1;
    }
  }
  var results = [];

  // Scan the haystack.
  // This takes O(haystackLength) steps.
  while (fileIndex + index < fileLength) {
    if (keywords[index] === rawLog[fileIndex + index]) {
      if (index === maxKeywordsIndex) {
        results.push(fileIndex);
      }
      index += 1;
    } else if (table[index] > -1) {
      fileIndex = fileIndex + index - table[index];
      index = table[index];
    } else {
      index = 0;
      fileIndex += 1;
    }
  }
  return results;
};
var searchLines = function searchLines(rawKeywords, rawLog, isCaseInsensitive) {
  var keywords = rawKeywords;
  var log = rawLog;
  var decodedLog = decode(log);
  if (isCaseInsensitive) {
    var _keywords;
    keywords = (_keywords = keywords) === null || _keywords === void 0 ? void 0 : _keywords.toLowerCase();
    decodedLog = decodedLog.toLowerCase();
  }
  decodedLog = decodedLog.endsWith("\n") ? decodedLog : decodedLog + "\n";
  log = encode(decodedLog);
  var results = searchIndexes(keywords, log);
  var linesRanges = getLinesLengthRanges(log);
  var maxLineRangeIndex = linesRanges.length;
  var maxResultIndex = results.length;
  var resultLines = [];
  var lineRangeIndex = 0;
  var resultIndex = 0;
  var lineRange;
  var result;
  while (lineRangeIndex < maxLineRangeIndex) {
    lineRange = linesRanges[lineRangeIndex];
    while (resultIndex < maxResultIndex) {
      result = results[resultIndex];
      if (result <= lineRange) {
        resultLines.push(lineRangeIndex + 1);
        resultIndex += 1;
      } else {
        break;
      }
    }
    lineRangeIndex += 1;
  }
  return resultLines;
};
;// CONCATENATED MODULE: ./src/components/Utils/stream.ts
function stream_typeof(obj) { "@babel/helpers - typeof"; return stream_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, stream_typeof(obj); }
function stream_regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ stream_regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == stream_typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function stream_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function stream_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { stream_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { stream_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



var stream_fetcher = Promise.resolve().then(function () {
  return self.fetch;
});
var recurseReaderAsEvent = /*#__PURE__*/function () {
  var _ref = stream_asyncToGenerator( /*#__PURE__*/stream_regeneratorRuntime().mark(function _callee(reader, emitter) {
    var result;
    return stream_regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return reader.read();
        case 2:
          result = _context.sent;
          if (result.value) {
            emitter.emit("data", result.value);
          }
          if (result.done) {
            _context.next = 6;
            break;
          }
          return _context.abrupt("return", recurseReaderAsEvent(reader, emitter));
        case 6:
          emitter.emit("done");
        case 7:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function recurseReaderAsEvent(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
/* harmony default export */ const stream = (function (url, options) {
  var emitter = (0,mitt/* default */.Z)();
  var overage = null;
  var encodedLog = new Uint8Array();
  emitter.on("data", function (data) {
    encodedLog = bufferConcat(encodedLog, new Uint8Array(data));
    var _convertBufferToLines = convertBufferToLines(data, overage),
      lines = _convertBufferToLines.lines,
      remaining = _convertBufferToLines.remaining;
    overage = remaining;
    emitter.emit("update", {
      lines: lines,
      encodedLog: encodedLog
    });
  });
  emitter.on("done", function () {
    if (overage) {
      emitter.emit("update", {
        lines: immutable_es/* List.of */.aV.of(overage),
        encodedLog: encodedLog
      });
    }
    emitter.emit("end", encodedLog);
  });
  emitter.on("start", /*#__PURE__*/stream_asyncToGenerator( /*#__PURE__*/stream_regeneratorRuntime().mark(function _callee2() {
    var _response$body, fetch, response, error, reader;
    return stream_regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return stream_fetcher;
        case 3:
          fetch = _context2.sent;
          _context2.next = 6;
          return fetch(url, Object.assign({
            credentials: "omit"
          }, options));
        case 6:
          response = _context2.sent;
          if (response.ok) {
            _context2.next = 12;
            break;
          }
          error = new Error(response.statusText); // @ts-ignore
          error["status"] = response.status;
          emitter.emit("error", error);
          return _context2.abrupt("return");
        case 12:
          reader = (_response$body = response.body) === null || _response$body === void 0 ? void 0 : _response$body.getReader();
          emitter.on("abort", function () {
            return reader === null || reader === void 0 ? void 0 : reader.cancel("ABORTED");
          });
          return _context2.abrupt("return", recurseReaderAsEvent(reader, emitter));
        case 17:
          _context2.prev = 17;
          _context2.t0 = _context2["catch"](0);
          emitter.emit("error", _context2.t0);
        case 20:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 17]]);
  })));
  return emitter;
});
;// CONCATENATED MODULE: ./src/components/Utils/websocket.ts




/* harmony default export */ const websocket = (function (url, options) {
  var onOpen = options.onOpen,
    onClose = options.onClose,
    onError = options.onError,
    formatMessage = options.formatMessage;
  var emitter = (0,mitt/* default */.Z)();
  var encodedLog = new Uint8Array();
  var overage = null;
  emitter.on("data", function (data) {
    encodedLog = bufferConcat(encodedLog, encode(data));
    var _convertBufferToLines = convertBufferToLines(encode(data), overage),
      lines = _convertBufferToLines.lines,
      remaining = _convertBufferToLines.remaining;
    overage = remaining;
    emitter.emit("update", {
      lines: lines,
      encodedLog: encodedLog
    });
  });
  emitter.on("done", function () {
    if (overage) {
      emitter.emit("update", {
        lines: immutable_es/* List.of */.aV.of(overage),
        encodedLog: encodedLog
      });
    }
    emitter.emit("end", encodedLog);
  });
  emitter.on("start", function () {
    try {
      // try to connect to websocket
      var socket = new WebSocket(url);
      socket.addEventListener("open", function (e) {
        // relay on open events if a handler is registered
        onOpen && onOpen(e, socket);
      });
      socket.addEventListener("close", function (e) {
        onClose && onClose(e);
      });
      socket.addEventListener("error", function (err) {
        onError && onError(err);
      });
      socket.addEventListener("message", function (e) {
        var msg = formatMessage ? formatMessage(e.data) : e.data;
        if (typeof msg !== "string") {
          return;
        }
        // add a new line character between each message if one doesn't exist.
        // this allows our search index to properly distinguish new lines.
        msg = msg.endsWith("\n") ? msg : "".concat(msg, "\n");
        emitter.emit("data", msg);
      });
      emitter.on("abort", function () {
        return socket.close();
      });
    } catch (err) {
      emitter.emit("error", err);
    }
  });
  return emitter;
});
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/components/LazyLog/index.module.css
var LazyLog_index_module = __webpack_require__("./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/components/LazyLog/index.module.css");
;// CONCATENATED MODULE: ./src/components/LazyLog/index.module.css

      
      
      
      
      
      
      
      
      

var LazyLog_index_module_options = {};

LazyLog_index_module_options.styleTagTransform = (styleTagTransform_default());
LazyLog_index_module_options.setAttributes = (setAttributesWithoutAttributes_default());

      LazyLog_index_module_options.insert = insertBySelector_default().bind(null, "head");
    
LazyLog_index_module_options.domAPI = (styleDomAPI_default());
LazyLog_index_module_options.insertStyleElement = (insertStyleElement_default());

var LazyLog_index_module_update = injectStylesIntoStyleTag_default()(LazyLog_index_module/* default */.Z, LazyLog_index_module_options);




       /* harmony default export */ const components_LazyLog_index_module = (LazyLog_index_module/* default */.Z && LazyLog_index_module/* default.locals */.Z.locals ? LazyLog_index_module/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/components/LazyLog/index.tsx
function LazyLog_typeof(obj) { "@babel/helpers - typeof"; return LazyLog_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, LazyLog_typeof(obj); }
function LazyLog_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function LazyLog_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? LazyLog_ownKeys(Object(source), !0).forEach(function (key) { LazyLog_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : LazyLog_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || LazyLog_unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function LazyLog_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return LazyLog_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return LazyLog_arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return LazyLog_arrayLikeToArray(arr); }
function LazyLog_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function LazyLog_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function LazyLog_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, LazyLog_toPropertyKey(descriptor.key), descriptor); } }
function LazyLog_createClass(Constructor, protoProps, staticProps) { if (protoProps) LazyLog_defineProperties(Constructor.prototype, protoProps); if (staticProps) LazyLog_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function LazyLog_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) LazyLog_setPrototypeOf(subClass, superClass); }
function LazyLog_setPrototypeOf(o, p) { LazyLog_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return LazyLog_setPrototypeOf(o, p); }
function LazyLog_createSuper(Derived) { var hasNativeReflectConstruct = LazyLog_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = LazyLog_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = LazyLog_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return LazyLog_possibleConstructorReturn(this, result); }; }
function LazyLog_possibleConstructorReturn(self, call) { if (call && (LazyLog_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return LazyLog_assertThisInitialized(self); }
function LazyLog_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function LazyLog_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function LazyLog_getPrototypeOf(o) { LazyLog_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return LazyLog_getPrototypeOf(o); }
function LazyLog_defineProperty(obj, key, value) { key = LazyLog_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function LazyLog_toPropertyKey(arg) { var key = LazyLog_toPrimitive(arg, "string"); return LazyLog_typeof(key) === "symbol" ? key : String(key); }
function LazyLog_toPrimitive(input, hint) { if (LazyLog_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (LazyLog_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
















/**
 * React component that loads and views remote text in the browser lazily and efficiently.
 */



/**
 * React component that loads and views remote text in the browser lazily and efficiently.
 * Logs can be loaded from static text, a URL, or a WebSocket and including ANSI highlighting.
 */
var LazyLog = /*#__PURE__*/function (_Component) {
  LazyLog_inherits(LazyLog, _Component);
  var _super = LazyLog_createSuper(LazyLog);
  function LazyLog() {
    var _this;
    LazyLog_classCallCheck(this, LazyLog);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    LazyLog_defineProperty(LazyLog_assertThisInitialized(_this), "state", {
      resultLines: [],
      count: 0,
      currentResultsPosition: 0,
      isFilteringLinesWithMatches: false,
      isSearching: false,
      offset: 0,
      resultLineUniqueIndexes: [],
      scrollOffset: 0,
      scrollToIndex: 0,
      scrollToLine: 0
    });
    LazyLog_defineProperty(LazyLog_assertThisInitialized(_this), "emitter", undefined);
    LazyLog_defineProperty(LazyLog_assertThisInitialized(_this), "encodedLog", undefined);
    LazyLog_defineProperty(LazyLog_assertThisInitialized(_this), "handleUpdate", function (_ref) {
      var moreLines = _ref.lines,
        encodedLog = _ref.encodedLog;
      _this.encodedLog = encodedLog;
      var _this$props = _this.props,
        scrollToLine = _this$props.scrollToLine,
        follow = _this$props.follow,
        stream = _this$props.stream,
        websocket = _this$props.websocket;
      var previousCount = _this.state.count;
      var offset = 0;
      var lines = (_this.state.lines || (0,immutable_es/* List */.aV)()).concat(moreLines);
      var count = lines.count();
      var scrollToIndex = getScrollIndex({
        follow: follow,
        scrollToLine: scrollToLine,
        previousCount: previousCount,
        count: count,
        offset: offset
      });
      _this.setState({
        lines: lines,
        offset: offset,
        count: count,
        scrollToIndex: scrollToIndex
      });
      if (stream || websocket) {
        _this.forceSearch();
      }
    });
    LazyLog_defineProperty(LazyLog_assertThisInitialized(_this), "handleEnd", function (encodedLog) {
      _this.encodedLog = encodedLog;
      _this.setState({
        loaded: true
      });
      if (_this.props.onLoad) {
        _this.props.onLoad();
      }
    });
    LazyLog_defineProperty(LazyLog_assertThisInitialized(_this), "handleError", function (err) {
      _this.setState({
        error: err
      });
      if (_this.props.onError) {
        _this.props.onError(err);
      }
    });
    LazyLog_defineProperty(LazyLog_assertThisInitialized(_this), "handleHighlight", function (e) {
      var _this$state$highlight, _this$state$highlight2;
      var _this$props2 = _this.props,
        onHighlight = _this$props2.onHighlight,
        enableMultilineHighlight = _this$props2.enableMultilineHighlight;
      var isFilteringLinesWithMatches = _this.state.isFilteringLinesWithMatches;
      if (!e.target.id) {
        return;
      }
      var lineNumber = +e.target.id;
      if (!lineNumber) {
        return;
      }
      var first = (_this$state$highlight = _this.state.highlight) === null || _this$state$highlight === void 0 ? void 0 : _this$state$highlight.first();
      var last = (_this$state$highlight2 = _this.state.highlight) === null || _this$state$highlight2 === void 0 ? void 0 : _this$state$highlight2.last();
      var range;
      if (first === lineNumber) {
        range = null;
      } else if (!e.shiftKey || !first) {
        range = lineNumber;
      } else if (enableMultilineHighlight && lineNumber > first) {
        range = [first, lineNumber];
      } else if (!enableMultilineHighlight && lineNumber > first) {
        range = lineNumber;
      } else {
        range = [lineNumber, last];
      }
      var highlight = getHighlightRange(range);
      var state = {
        highlight: highlight
      };
      if (isFilteringLinesWithMatches) {
        Object.assign(state, {
          scrollToIndex: getScrollIndex({
            scrollToLine: lineNumber
          })
        });
      }
      _this.setState(state, function () {
        if (onHighlight) {
          onHighlight(highlight);
        }
        if (isFilteringLinesWithMatches) {
          _this.handleFilterLinesWithMatches(false);
        }
      });
      return highlight;
    });
    LazyLog_defineProperty(LazyLog_assertThisInitialized(_this), "handleEnterPressed", function () {
      var _this$state = _this.state,
        resultLines = _this$state.resultLines,
        scrollToLine = _this$state.scrollToLine,
        currentResultsPosition = _this$state.currentResultsPosition,
        isFilteringLinesWithMatches = _this$state.isFilteringLinesWithMatches;
      if (!_this.props.enableSearchNavigation) {
        _this.handleFilterLinesWithMatches(!isFilteringLinesWithMatches);
        return;
      }

      // If we have search results
      if (resultLines) {
        // If we already scrolled to a line
        if (scrollToLine) {
          // Scroll to the next line if possible,
          // wrap to the top if we're at the end.

          if (currentResultsPosition + 1 < resultLines.length) {
            _this.handleScrollToLine(resultLines[currentResultsPosition + 1]);
            _this.setState({
              currentResultsPosition: currentResultsPosition + 1
            });
            return;
          }
        }
        _this.handleScrollToLine(resultLines[0]);
        _this.setState({
          currentResultsPosition: 0
        });
      }
    });
    LazyLog_defineProperty(LazyLog_assertThisInitialized(_this), "handleShiftEnterPressed", function () {
      var _this$state2 = _this.state,
        resultLines = _this$state2.resultLines,
        scrollToLine = _this$state2.scrollToLine,
        currentResultsPosition = _this$state2.currentResultsPosition;
      if (!_this.props.enableSearchNavigation) {
        return;
      }

      // If we have search results
      if (resultLines) {
        // If we already scrolled to a line
        if (scrollToLine) {
          // Scroll to the previous line if possible,
          // wrap to the bottom if we're at the top.

          if (currentResultsPosition - 1 >= 0) {
            _this.handleScrollToLine(resultLines[currentResultsPosition - 1]);
            _this.setState({
              currentResultsPosition: currentResultsPosition - 1
            });
            return;
          }
        }
        _this.handleScrollToLine(resultLines[resultLines.length - 1]);
        _this.setState({
          currentResultsPosition: resultLines.length - 1
        });
      }
    });
    LazyLog_defineProperty(LazyLog_assertThisInitialized(_this), "handleSearch", function (keywords) {
      var _this$state3 = _this.state,
        resultLines = _this$state3.resultLines,
        searchKeywords = _this$state3.searchKeywords;
      var _this$props3 = _this.props,
        caseInsensitive = _this$props3.caseInsensitive,
        stream = _this$props3.stream,
        websocket = _this$props3.websocket;
      var currentResultLines = !stream && !websocket && keywords === searchKeywords ? resultLines : searchLines(keywords, _this.encodedLog, caseInsensitive);
      _this.setState({
        resultLines: currentResultLines,
        isSearching: true,
        searchKeywords: keywords,
        currentResultsPosition: 0
      }, _this.filterLinesWithMatches);
    });
    LazyLog_defineProperty(LazyLog_assertThisInitialized(_this), "forceSearch", function () {
      var searchKeywords = _this.state.searchKeywords;
      if (searchKeywords && searchKeywords.length > SEARCH_MIN_KEYWORDS) {
        _this.handleSearch(_this.state.searchKeywords);
      }
    });
    LazyLog_defineProperty(LazyLog_assertThisInitialized(_this), "handleClearSearch", function () {
      _this.setState({
        isSearching: false,
        searchKeywords: "",
        resultLines: [],
        filteredLines: (0,immutable_es/* List */.aV)(),
        resultLineUniqueIndexes: [],
        isFilteringLinesWithMatches: _this.state.isFilteringLinesWithMatches,
        scrollToIndex: 0,
        currentResultsPosition: 0
      });
    });
    LazyLog_defineProperty(LazyLog_assertThisInitialized(_this), "handleFilterLinesWithMatches", function (isFilterEnabled) {
      _this.setState({
        isFilteringLinesWithMatches: isFilterEnabled,
        filteredLines: (0,immutable_es/* List */.aV)(),
        resultLineUniqueIndexes: []
      }, _this.filterLinesWithMatches);
    });
    LazyLog_defineProperty(LazyLog_assertThisInitialized(_this), "filterLinesWithMatches", function () {
      var _this$state4 = _this.state,
        resultLines = _this$state4.resultLines,
        lines = _this$state4.lines,
        isFilteringLinesWithMatches = _this$state4.isFilteringLinesWithMatches;
      if (resultLines.length > 0 && isFilteringLinesWithMatches) {
        var resultLineUniqueIndexes = _toConsumableArray(new Set(resultLines));
        _this.setState({
          resultLineUniqueIndexes: resultLineUniqueIndexes,
          filteredLines: lines === null || lines === void 0 ? void 0 : lines.filter(function (_line, index) {
            return resultLineUniqueIndexes.some(function (resultLineIndex) {
              return index + 1 === resultLineIndex;
            });
          })
        });
      }
    });
    LazyLog_defineProperty(LazyLog_assertThisInitialized(_this), "handleFormatPart", function (lineNumber) {
      var _this$state5 = _this.state,
        isSearching = _this$state5.isSearching,
        searchKeywords = _this$state5.searchKeywords,
        resultLines = _this$state5.resultLines,
        currentResultsPosition = _this$state5.currentResultsPosition;
      var enableSearchNavigation = _this.props.enableSearchNavigation;
      if (isSearching) {
        // If browser-search has started and we're on the line
        // that has the search term that is selected
        if (enableSearchNavigation && resultLines && currentResultsPosition !== undefined && resultLines[currentResultsPosition] === lineNumber) {
          var locationInLine = 0;
          // Find the first occurrence of the line number
          // We use this to make sure we're only searching from where
          // the line number first occurs to the currentResultsPosition below
          var initialOccurrence = resultLines.findIndex(function (element) {
            return element === resultLines[currentResultsPosition];
          });

          // This finds which word in the line should be the highlighted one.
          // For example, if we should be highlighting the 2nd match on line 18,
          // this would set locationInLine to 2.
          for (var i = initialOccurrence; i <= currentResultsPosition; i += 1) {
            if (resultLines[i] === lineNumber) {
              locationInLine += 1;
            }
          }
          return searchFormatPart({
            searchKeywords: searchKeywords,
            nextFormatPart: undefined,
            caseInsensitive: _this.props.caseInsensitive,
            replaceJsx: function replaceJsx(text, key) {
              return /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                className: components_LazyLog_index_module.searchMatch,
                children: text
              }, key);
            },
            selectedLine: true,
            replaceJsxHighlight: function replaceJsxHighlight(text, key) {
              return /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
                className: components_LazyLog_index_module.searchMatchHighlighted,
                children: text
              }, key);
            },
            highlightedWordLocation: locationInLine
          });
        }
        return searchFormatPart({
          searchKeywords: searchKeywords,
          nextFormatPart: undefined,
          caseInsensitive: _this.props.caseInsensitive,
          replaceJsx: function replaceJsx(text, key) {
            return /*#__PURE__*/(0,jsx_runtime.jsx)("span", {
              className: components_LazyLog_index_module.searchMatch,
              children: text
            }, key);
          },
          selectedLine: undefined,
          replaceJsxHighlight: undefined,
          highlightedWordLocation: undefined
        });
      }
      return _this.props.formatPart;
    });
    LazyLog_defineProperty(LazyLog_assertThisInitialized(_this), "renderRow", function (options) {
      var _this$props4 = _this.props,
        rowHeight = _this$props4.rowHeight,
        selectableLines = _this$props4.selectableLines,
        lineClassName = _this$props4.lineClassName,
        highlightLineClassName = _this$props4.highlightLineClassName,
        _onLineNumberClick = _this$props4.onLineNumberClick,
        gutter = _this$props4.gutter,
        enableGutters = _this$props4.enableGutters,
        enableLineNumbers = _this$props4.enableLineNumbers;
      var _ref2 = _this.state,
        highlight = _ref2.highlight,
        lines = _ref2.lines,
        offset = _ref2.offset,
        isFilteringLinesWithMatches = _ref2.isFilteringLinesWithMatches,
        filteredLines = _ref2.filteredLines,
        resultLineUniqueIndexes = _ref2.resultLineUniqueIndexes;
      var linesToRender = isFilteringLinesWithMatches ? filteredLines : lines;
      var number = isFilteringLinesWithMatches ? resultLineUniqueIndexes[options.index] : options.index + 1 + offset;
      if ((linesToRender === null || linesToRender === void 0 ? void 0 : linesToRender.size) <= 0) {
        return _this.renderNoRows();
      }
      return /*#__PURE__*/(0,jsx_runtime.jsx)(Line, {
        className: "log-line ".concat(lineClassName),
        highlightClassName: "log-highlight ".concat(highlightLineClassName),
        rowHeight: rowHeight,
        style: options.style,
        number: number,
        enableLineNumbers: enableLineNumbers,
        enableGutters: enableGutters,
        formatPart: _this.handleFormatPart(number),
        selectable: selectableLines,
        highlight: highlight === null || highlight === void 0 ? void 0 : highlight.includes(number),
        onLineNumberClick: function onLineNumberClick(e) {
          var highlighted = _this.handleHighlight(e);
          _onLineNumberClick === null || _onLineNumberClick === void 0 ? void 0 : _onLineNumberClick({
            lineNumber: number,
            highlightRange: highlighted
          });
        },
        gutter: gutter ? gutter[number] : undefined,
        data: Utils_ansiparse(decode(linesToRender === null || linesToRender === void 0 ? void 0 : linesToRender.get(options.index)))
      }, options.index);
    });
    LazyLog_defineProperty(LazyLog_assertThisInitialized(_this), "renderNoRows", function () {
      var _this$props5 = _this.props,
        lineClassName = _this$props5.lineClassName,
        highlightLineClassName = _this$props5.highlightLineClassName;
      var _this$state6 = _this.state,
        error = _this$state6.error,
        count = _this$state6.count,
        loaded = _this$state6.loaded;
      if (error) {
        return _this.renderError();
      }

      // Handle case where log is empty
      if (!count && loaded) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)(jsx_runtime.Fragment, {});
      }

      // We don't do `if (loaded) {}` in order to handle
      // the edge case where the log is streaming
      if (count) {
        return /*#__PURE__*/(0,jsx_runtime.jsx)(Line, {
          className: lineClassName,
          highlightClassName: highlightLineClassName,
          data: [{
            bold: true,
            text: "No filter matches"
          }]
        });
      }
      return _this.props.loadingComponent || /*#__PURE__*/(0,jsx_runtime.jsx)(Loading, {});
    });
    LazyLog_defineProperty(LazyLog_assertThisInitialized(_this), "calculateListHeight", function (autoSizerHeight) {
      var _this$props6 = _this.props,
        height = _this$props6.height,
        enableSearch = _this$props6.enableSearch;
      if (enableSearch) {
        return height === "auto" ? autoSizerHeight - SEARCH_BAR_HEIGHT : Number(height) - SEARCH_BAR_HEIGHT;
      }
      return height === "auto" ? autoSizerHeight : height;
    });
    LazyLog_defineProperty(LazyLog_assertThisInitialized(_this), "getItemSize", function (index) {
      return _this.props.rowHeight || 19;
    });
    return _this;
  }
  LazyLog_createClass(LazyLog, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        listRef: /*#__PURE__*/react.createRef()
      });
      this.request();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;
      if (prevProps.url !== this.props.url || prevState.url !== this.state.url || prevProps.text !== this.props.text) {
        this.request();
      }

      // Reset scroll position when there's new data, otherwise the screen goes blank for some reason
      if (prevProps.text !== this.props.text && !this.props.follow && this.state.scrollOffset > 0) {
        var update = function update() {
          var _this2$state$listRef, _this2$state$listRef2;
          var newPosition = _this2.state.scrollOffset;
          (_this2$state$listRef = _this2.state.listRef) === null || _this2$state$listRef === void 0 || (_this2$state$listRef = _this2$state$listRef.current) === null || _this2$state$listRef === void 0 ? void 0 : _this2$state$listRef.scrollToItem(newPosition, "auto");
          (_this2$state$listRef2 = _this2.state.listRef) === null || _this2$state$listRef2 === void 0 || (_this2$state$listRef2 = _this2$state$listRef2.current) === null || _this2$state$listRef2 === void 0 ? void 0 : _this2$state$listRef2.forceUpdate();
        };
        update();
      }
      if (!this.state.loaded && prevState.loaded !== this.state.loaded && this.props.onLoad) {
        this.props.onLoad();
      } else if (this.state.error && prevState.error !== this.state.error && this.props.onError) {
        this.props.onError(this.state.error);
      }
      if (this.props.highlight && prevProps.highlight !== this.props.highlight && this.props.onHighlight) {
        this.props.onHighlight(this.state.highlight);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.endRequest();
    }
  }, {
    key: "initEmitter",
    value: function initEmitter() {
      var _this$props7 = this.props,
        isStream = _this$props7.stream,
        isWebsocket = _this$props7.websocket,
        url = _this$props7.url,
        fetchOptions = _this$props7.fetchOptions,
        websocketOptions = _this$props7.websocketOptions;
      if (isWebsocket) {
        return websocket(url, websocketOptions);
      }
      if (isStream) {
        return stream(url, fetchOptions);
      }
      return request(url, fetchOptions);
    }
  }, {
    key: "request",
    value: function request() {
      var _this$props8 = this.props,
        text = _this$props8.text,
        url = _this$props8.url;
      this.endRequest();
      if (text) {
        var encodedLog = encode(text);
        var _convertBufferToLines = convertBufferToLines(encodedLog),
          lines = _convertBufferToLines.lines;
        this.handleUpdate({
          lines: lines,
          encodedLog: encodedLog
        });
        this.handleEnd(encodedLog);
      }
      if (url) {
        this.emitter = this.initEmitter();
        this.emitter.on("update", this.handleUpdate);
        this.emitter.on("end", this.handleEnd);
        this.emitter.on("error", this.handleError);
        this.emitter.emit("start");
      }
    }
  }, {
    key: "endRequest",
    value: function endRequest() {
      if (this.emitter) {
        this.emitter.emit("abort");
        this.emitter.off("update", this.handleUpdate);
        this.emitter.off("end", this.handleEnd);
        this.emitter.off("error", this.handleError);
        this.emitter = null;
      }
    }
  }, {
    key: "handleScrollToLine",
    value: function handleScrollToLine() {
      var _this$state$listRef, _this$state$listRef2;
      var scrollToLine = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var scrollToIndex = getScrollIndex({
        scrollToLine: scrollToLine
      });
      this.setState({
        scrollToIndex: scrollToIndex,
        scrollToLine: scrollToLine
      });
      (_this$state$listRef = this.state.listRef) === null || _this$state$listRef === void 0 || (_this$state$listRef = _this$state$listRef.current) === null || _this$state$listRef === void 0 ? void 0 : _this$state$listRef.scrollToItem(scrollToLine, "auto");
      (_this$state$listRef2 = this.state.listRef) === null || _this$state$listRef2 === void 0 || (_this$state$listRef2 = _this$state$listRef2.current) === null || _this$state$listRef2 === void 0 ? void 0 : _this$state$listRef2.forceUpdate();
    }
  }, {
    key: "renderError",
    value: function renderError() {
      var _this$props9 = this.props,
        url = _this$props9.url,
        lineClassName = _this$props9.lineClassName,
        selectableLines = _this$props9.selectableLines,
        highlightLineClassName = _this$props9.highlightLineClassName;
      var error = this.state.error;
      return /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsx)(Line, {
          selectable: selectableLines,
          className: lineClassName,
          highlightClassName: highlightLineClassName,
          number: "Error",
          data: [{
            bold: true,
            foreground: "red",
            text: error.status ? "".concat(error.message, " (HTTP ").concat(error.status, ")") : error.message || "Network Error"
          }]
        }, "error-line-0"), /*#__PURE__*/(0,jsx_runtime.jsx)(Line, {
          selectable: selectableLines,
          className: lineClassName,
          highlightClassName: highlightLineClassName,
          data: [{
            bold: true,
            text: "An error occurred attempting to load the provided log."
          }]
        }, "error-line-1"), /*#__PURE__*/(0,jsx_runtime.jsx)(Line, {
          selectable: selectableLines,
          className: lineClassName,
          highlightClassName: highlightLineClassName,
          data: [{
            bold: true,
            text: "Please check the URL and ensure it is reachable."
          }]
        }, "error-line-2"), /*#__PURE__*/(0,jsx_runtime.jsx)(Line, {
          selectable: selectableLines,
          className: lineClassName,
          highlightClassName: highlightLineClassName,
          data: []
        }, "error-line-3"), /*#__PURE__*/(0,jsx_runtime.jsx)(Line, {
          selectable: selectableLines,
          className: lineClassName,
          highlightClassName: highlightLineClassName,
          data: [{
            foreground: "blue",
            text: url
          }]
        }, "error-line-4")]
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;
      var enableSearch = this.props.enableSearch;
      var _this$state7 = this.state,
        resultLines = _this$state7.resultLines,
        isFilteringLinesWithMatches = _this$state7.isFilteringLinesWithMatches,
        _this$state7$filtered = _this$state7.filteredLines,
        filteredLines = _this$state7$filtered === void 0 ? (0,immutable_es/* List */.aV)() : _this$state7$filtered,
        count = _this$state7.count,
        currentResultsPosition = _this$state7.currentResultsPosition;
      var rowCount = isFilteringLinesWithMatches ? filteredLines.size : count;
      return /*#__PURE__*/(0,jsx_runtime.jsxs)(react.Fragment, {
        children: [enableSearch && /*#__PURE__*/(0,jsx_runtime.jsx)(SearchBar, {
          filterActive: isFilteringLinesWithMatches,
          onSearch: this.handleSearch,
          onClearSearch: this.handleClearSearch,
          onFilterLinesWithMatches: this.handleFilterLinesWithMatches,
          resultsCount: resultLines.length,
          disabled: count === 0,
          enableHotKeys: this.props.enableHotKeys,
          onEnter: this.handleEnterPressed,
          onShiftEnter: this.handleShiftEnterPressed,
          enableSearchNavigation: this.props.enableSearchNavigation,
          currentResultsPosition: currentResultsPosition
        }), /*#__PURE__*/(0,jsx_runtime.jsx)(react_virtualized_auto_sizer_esm/* default */.ZP, {
          disableHeight: this.props.height !== "auto",
          disableWidth: this.props.width !== "auto",
          children:
          // @ts-ignore
          function children(_ref3) {
            var height = _ref3.height,
              width = _ref3.width;
            return /*#__PURE__*/(0,jsx_runtime.jsx)(index_esm/* VariableSizeList */.S_, LazyLog_objectSpread(LazyLog_objectSpread({
              ref: _this3.state.listRef,
              className: "react-lazylog ".concat(components_LazyLog_index_module.lazyLog)
            }, _this3.props), {}, {
              height: _this3.calculateListHeight(height),
              width: _this3.props.width === "auto" ? width : _this3.props.width,
              itemSize: _this3.getItemSize,
              initialScrollOffset: _this3.state.scrollToIndex,
              itemCount: rowCount === 0 ? rowCount : rowCount + _this3.props.extraLines,
              onScroll: function onScroll(options) {
                _this3.setState({
                  scrollOffset: options.scrollOffset
                });
              },
              children: _this3.renderRow
            }));
          }
        })]
      });
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(_ref4, _ref5) {
      var highlight = _ref4.highlight,
        follow = _ref4.follow,
        scrollToLine = _ref4.scrollToLine,
        nextUrl = _ref4.url,
        nextText = _ref4.text;
      var count = _ref5.count,
        offset = _ref5.offset,
        previousUrl = _ref5.url,
        previousText = _ref5.text,
        previousHighlight = _ref5.highlight,
        isSearching = _ref5.isSearching,
        scrollToIndex = _ref5.scrollToIndex;
      var newScrollToIndex = isSearching ? scrollToIndex : getScrollIndex({
        follow: follow,
        scrollToLine: scrollToLine,
        count: count,
        offset: offset
      });
      var shouldUpdate = nextUrl && nextUrl !== previousUrl || nextText && nextText !== previousText;
      return LazyLog_objectSpread({
        scrollToIndex: newScrollToIndex,
        highlight: previousHighlight === (0,immutable_es/* Range */.e6)(0, 0) ? getHighlightRange(highlight) : previousHighlight || getHighlightRange(previousHighlight)
      }, shouldUpdate ? {
        url: nextUrl,
        text: nextText,
        lines: (0,immutable_es/* List */.aV)(),
        count: 0,
        offset: 0,
        loaded: false,
        error: null
      } : null);
    }
  }]);
  return LazyLog;
}(react.Component);
LazyLog_defineProperty(LazyLog, "defaultProps", {
  containerStyle: {
    width: "auto",
    maxWidth: "initial",
    overflow: "initial"
  },
  enableHotKeys: false,
  caseInsensitive: false,
  enableMultilineHighlight: true,
  enableSearch: false,
  enableGutters: false,
  enableLineNumbers: true,
  extraLines: 0,
  fetchOptions: {
    credentials: "omit"
  },
  follow: false,
  formatPart: undefined,
  height: "auto",
  highlight: undefined,
  highlightLineClassName: "",
  lineClassName: "",
  onError: undefined,
  onHighlight: undefined,
  onLineNumberClick: undefined,
  onLoad: undefined,
  overscanRowCount: 100,
  rowHeight: 19,
  scrollToLine: 0,
  searchLikeBrowser: true,
  selectableLines: false,
  stream: false,
  style: {},
  websocket: false,
  websocketOptions: {},
  width: "auto"
});
LazyLog.displayName = "LazyLog";

try {
    // @ts-ignore
    LazyLog.displayName = "LazyLog";
    // @ts-ignore
    LazyLog.__docgenInfo = { "description": "React component that loads and views remote text in the browser lazily and efficiently.\nLogs can be loaded from static text, a URL, or a WebSocket and including ANSI highlighting.", "displayName": "LazyLog", "props": { "caseInsensitive": { "defaultValue": { value: "false" }, "description": "Flag to enable/disable case insensitive search", "name": "caseInsensitive", "required": false, "type": { "name": "boolean" } }, "enableHotKeys": { "defaultValue": { value: "false" }, "description": "If true, capture system hotkeys for searching the page (Cmd-F, Ctrl-F,\netc.)", "name": "enableHotKeys", "required": false, "type": { "name": "boolean" } }, "containerStyle": { "defaultValue": { value: "{\r\n            width: \"auto\",\r\n            maxWidth: \"initial\",\r\n            overflow: \"initial\",\r\n        }" }, "description": "Optional custom inline style to attach to element which contains\nthe interior scrolling container.", "name": "containerStyle", "required": false, "type": { "name": "CSSProperties" } }, "enableGutters": { "defaultValue": { value: "false" }, "description": "Enable the line gutters to be displayed. Default is false", "name": "enableGutters", "required": false, "type": { "name": "boolean" } }, "enableLineNumbers": { "defaultValue": { value: "true" }, "description": "Enable the line numbers to be displayed. Default is true.", "name": "enableLineNumbers", "required": false, "type": { "name": "boolean" } }, "enableSearch": { "defaultValue": { value: "false" }, "description": "Enable the search feature.", "name": "enableSearch", "required": false, "type": { "name": "boolean" } }, "enableSearchNavigation": { "defaultValue": null, "description": "If true, search like a browser search - enter jumps to the next line\nwith the searched term, shift + enter goes backwards.\nAlso adds up and down arrows to search bar to jump\nto the next and previous result.\nIf false, enter toggles the filter instead.\nDefaults to true.", "name": "enableSearchNavigation", "required": false, "type": { "name": "boolean" } }, "enableMultilineHighlight": { "defaultValue": { value: "true" }, "description": "Enable the ability to select multiple lines using shift + click.\nDefaults to true.", "name": "enableMultilineHighlight", "required": false, "type": { "name": "boolean" } }, "extraLines": { "defaultValue": { value: "0" }, "description": "Number of extra lines to show at the bottom of the log.\nSet this to 1 so that Linux users can see the last line\nof the log output.", "name": "extraLines", "required": false, "type": { "name": "number" } }, "fetchOptions": { "defaultValue": { value: "{ credentials: \"omit\" as RequestCredentials }" }, "description": "Options object which will be passed through to the `fetch` request.\nDefaults to `{ credentials: 'omit' }`.", "name": "fetchOptions", "required": false, "type": { "name": "RequestInit" } }, "follow": { "defaultValue": { value: "false" }, "description": "Scroll to the end of the component after each update to the content.\nCannot be used in combination with `scrollToLine`.", "name": "follow", "required": false, "type": { "name": "boolean" } }, "formatPart": { "defaultValue": { value: "undefined" }, "description": "Execute a function against each string part of a line,\nreturning a new line part. Is passed a single argument which is\nthe string part to manipulate, should return a new string\nwith the manipulation completed.", "name": "formatPart", "required": false, "type": { "name": "((text: string) => ReactNode)" } }, "gutter": { "defaultValue": null, "description": "The Line Gutter component", "name": "gutter", "required": false, "type": { "name": "ReactNode[]" } }, "height": { "defaultValue": { value: "auto" }, "description": "Set the height in pixels for the component.\nDefaults to `'auto'` if unspecified. When the `height` is `'auto'`,\nthe component will expand vertically to fill its container.", "name": "height", "required": false, "type": { "name": "string | number" } }, "highlight": { "defaultValue": { value: "undefined" }, "description": "Line number (e.g. `highlight={10}`) or line number range to highlight\ninclusively (e.g. `highlight={[5, 10]}` highlights lines 5-10).\nThis is 1-indexed, i.e. line numbers start at `1`.", "name": "highlight", "required": false, "type": { "name": "number | number[]" } }, "highlightLineClassName": { "defaultValue": { value: "" }, "description": "Specify an additional className to append to highlighted lines.", "name": "highlightLineClassName", "required": false, "type": { "name": "string" } }, "lineClassName": { "defaultValue": { value: "" }, "description": "Specify an additional className to append to lines.", "name": "lineClassName", "required": false, "type": { "name": "string" } }, "loadingComponent": { "defaultValue": null, "description": "Specify an alternate component to use when loading.", "name": "loadingComponent", "required": false, "type": { "name": "ReactNode | ((props: any) => ReactNode)" } }, "onError": { "defaultValue": { value: "undefined" }, "description": "Execute a function if the provided `url` has encountered an error\nduring loading.", "name": "onError", "required": false, "type": { "name": "((error: any) => any)" } }, "onHighlight": { "defaultValue": { value: "undefined" }, "description": "Execute a function when the highlighted range has changed.\nIs passed a single argument which is an `Immutable.Range`\nof the highlighted line numbers.", "name": "onHighlight", "required": false, "type": { "name": "((range: Indexed<number>) => any)" } }, "onLoad": { "defaultValue": { value: "undefined" }, "description": "Execute a function if/when the provided `url` has completed loading.", "name": "onLoad", "required": false, "type": { "name": "(() => any)" } }, "onLineNumberClick": { "defaultValue": { value: "undefined" }, "description": "Additional function called when a line number is clicked.\nOn click, the line will always be highlighted.\nThis function is to provide additional actions.\nReceives an object with lineNumber and highlightRange.\nDefaults to null.", "name": "onLineNumberClick", "required": false, "type": { "name": "((event: LineNumberClickEvent) => any)" } }, "overscanRowCount": { "defaultValue": { value: "100" }, "description": "Number of rows to render above/below the visible bounds of the list.\nThis can help reduce flickering during scrolling on\ncertain browsers/devices. Defaults to `100`.", "name": "overscanRowCount", "required": false, "type": { "name": "number" } }, "rowHeight": { "defaultValue": { value: "19" }, "description": "A fixed row height in pixels. Controls how tall a line is,\nas well as the `lineHeight` style of the line's text.\nDefaults to `19`.", "name": "rowHeight", "required": false, "type": { "name": "number" } }, "scrollToLine": { "defaultValue": { value: "0" }, "description": "Scroll to a particular line number once it has loaded.\nThis is 1-indexed, i.e. line numbers start at `1`.\nCannot be used in combination with `follow`.", "name": "scrollToLine", "required": false, "type": { "name": "number" } }, "selectableLines": { "defaultValue": { value: "false" }, "description": "Make the text selectable, allowing to copy & paste. Defaults to `false`.", "name": "selectableLines", "required": false, "type": { "name": "boolean" } }, "stream": { "defaultValue": { value: "false" }, "description": "Set to `true` to specify remote URL will be streaming chunked data.\nDefaults to `false` to download data until completion.", "name": "stream", "required": false, "type": { "name": "boolean" } }, "style": { "defaultValue": { value: "{}" }, "description": "Optional custom inline style to attach to root\nvirtual `LazyList` element.", "name": "style", "required": false, "type": { "name": "CSSProperties" } }, "text": { "defaultValue": null, "description": "String containing text to display.", "name": "text", "required": false, "type": { "name": "string" } }, "url": { "defaultValue": null, "description": "The URL from which to fetch content. Subject to same-origin policy,\nso must be accessible via fetch on same domain or via CORS.", "name": "url", "required": false, "type": { "name": "string" } }, "websocket": { "defaultValue": { value: "false" }, "description": "Set to `true` to specify that url is a websocket URL.\nDefaults to `false` to download data until completion.", "name": "websocket", "required": false, "type": { "name": "boolean" } }, "websocketOptions": { "defaultValue": { value: "{}" }, "description": "Options object which will be passed through to websocket.", "name": "websocketOptions", "required": false, "type": { "name": "WebsocketOptions" } }, "width": { "defaultValue": { value: "auto" }, "description": "Set the width in pixels for the component.\nDefaults to `'auto'` if unspecified.\nWhen the `width` is `'auto'`, the component will expand\nhorizontally to fill its container.", "name": "width", "required": false, "type": { "name": "string | number" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/LazyLog/index.tsx#LazyLog"] = { docgenInfo: LazyLog.__docgenInfo, name: "LazyLog", path: "src/components/LazyLog/index.tsx#LazyLog" };
}
catch (__react_docgen_typescript_loader_error) { }
;// CONCATENATED MODULE: ./src/components/ScrollFollow/index.tsx
function ScrollFollow_typeof(obj) { "@babel/helpers - typeof"; return ScrollFollow_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, ScrollFollow_typeof(obj); }
function ScrollFollow_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function ScrollFollow_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, ScrollFollow_toPropertyKey(descriptor.key), descriptor); } }
function ScrollFollow_createClass(Constructor, protoProps, staticProps) { if (protoProps) ScrollFollow_defineProperties(Constructor.prototype, protoProps); if (staticProps) ScrollFollow_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function ScrollFollow_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) ScrollFollow_setPrototypeOf(subClass, superClass); }
function ScrollFollow_setPrototypeOf(o, p) { ScrollFollow_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return ScrollFollow_setPrototypeOf(o, p); }
function ScrollFollow_createSuper(Derived) { var hasNativeReflectConstruct = ScrollFollow_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = ScrollFollow_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = ScrollFollow_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return ScrollFollow_possibleConstructorReturn(this, result); }; }
function ScrollFollow_possibleConstructorReturn(self, call) { if (call && (ScrollFollow_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return ScrollFollow_assertThisInitialized(self); }
function ScrollFollow_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function ScrollFollow_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function ScrollFollow_getPrototypeOf(o) { ScrollFollow_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return ScrollFollow_getPrototypeOf(o); }
function ScrollFollow_defineProperty(obj, key, value) { key = ScrollFollow_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function ScrollFollow_toPropertyKey(arg) { var key = ScrollFollow_toPrimitive(arg, "string"); return ScrollFollow_typeof(key) === "symbol" ? key : String(key); }
function ScrollFollow_toPrimitive(input, hint) { if (ScrollFollow_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (ScrollFollow_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }


var ScrollFollow = /*#__PURE__*/function (_Component) {
  ScrollFollow_inherits(ScrollFollow, _Component);
  var _super = ScrollFollow_createSuper(ScrollFollow);
  function ScrollFollow() {
    var _this;
    ScrollFollow_classCallCheck(this, ScrollFollow);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    _this = _super.call.apply(_super, [this].concat(args));
    ScrollFollow_defineProperty(ScrollFollow_assertThisInitialized(_this), "state", {
      follow: false
    });
    ScrollFollow_defineProperty(ScrollFollow_assertThisInitialized(_this), "handleScroll", function (_ref) {
      var scrollTop = _ref.scrollTop,
        scrollHeight = _ref.scrollHeight,
        clientHeight = _ref.clientHeight;
      if (_this.state.follow && scrollHeight - scrollTop !== clientHeight) {
        _this.setState({
          follow: false
        });
      }
    });
    ScrollFollow_defineProperty(ScrollFollow_assertThisInitialized(_this), "startFollowing", function () {
      _this.setState({
        follow: true
      });
    });
    ScrollFollow_defineProperty(ScrollFollow_assertThisInitialized(_this), "stopFollowing", function () {
      _this.setState({
        follow: false
      });
    });
    return _this;
  }
  ScrollFollow_createClass(ScrollFollow, [{
    key: "render",
    value: function render() {
      var render = this.props.render;
      var follow = this.state.follow;
      return /*#__PURE__*/(0,jsx_runtime.jsx)(react.Fragment, {
        children: render({
          follow: follow,
          onScroll: this.handleScroll,
          startFollowing: this.startFollowing,
          stopFollowing: this.stopFollowing
        })
      });
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps) {
      return {
        follow: nextProps.startFollowing
      };
    }
  }]);
  return ScrollFollow;
}(react.Component);
ScrollFollow_defineProperty(ScrollFollow, "defaultProps", {
  startFollowing: false
});
ScrollFollow.displayName = "ScrollFollow";

try {
    // @ts-ignore
    ScrollFollow.displayName = "ScrollFollow";
    // @ts-ignore
    ScrollFollow.__docgenInfo = { "description": "", "displayName": "ScrollFollow", "props": { "render": { "defaultValue": null, "description": "Render a component based on the function's arguments\n\n  - `follow: bool` This value is `true` or `false`\n  based on whether the component should be auto-following.\n  This value can be passed directly to the Lazy component's\n  `follow` prop.\n\n  - `onScroll: func`: This function is used to listen for scrolling\n  events and turn off auto-following (`follow`).\n  This value can be passed directly to the Lazy component's\n  `onScroll` prop.\n\n  - `startFollowing: func`: A helper function for manually re-starting\n  `follow`ing. Is not used by a Lazy component;\n  rather this can be invoked whenever you need to turn back on\n  auto-following, but cannot reliably do this from the `startFollowing`\n  prop. e.g `startFollowing();`\n\n  - `stopFollowing: func`: A helper function for manually stopping\n  `follow`ing. Is not used by a Lazy component;\n  rather this can be invoked whenever you need to turn off\n  auto-following, but cannot reliably do this from the `startFollowing`\n  prop. e.g `stopFollowing();`", "name": "render", "required": true, "type": { "name": "(props: ScrollFollowRenderProps) => ReactNode" } }, "startFollowing": { "defaultValue": { value: "false" }, "description": "The initial follow action; defaults to `false`.\nThe value provided here will inform the initial `follow`\nproperty passed to the child function.", "name": "startFollowing", "required": false, "type": { "name": "boolean" } } } };
    // @ts-ignore
    if (typeof STORYBOOK_REACT_CLASSES !== "undefined")
        // @ts-ignore
        STORYBOOK_REACT_CLASSES["src/components/ScrollFollow/index.tsx#ScrollFollow"] = { docgenInfo: ScrollFollow.__docgenInfo, name: "ScrollFollow", path: "src/components/ScrollFollow/index.tsx#ScrollFollow" };
}
catch (__react_docgen_typescript_loader_error) { }
;// CONCATENATED MODULE: ./src/components/index.ts












;// CONCATENATED MODULE: ./src/stories/LazyLog.stories.tsx
var _TextLog$parameters, _TextLog$parameters2, _URLLog$parameters, _URLLog$parameters2;
function LazyLog_stories_typeof(obj) { "@babel/helpers - typeof"; return LazyLog_stories_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, LazyLog_stories_typeof(obj); }
function LazyLog_stories_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function LazyLog_stories_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? LazyLog_stories_ownKeys(Object(source), !0).forEach(function (key) { LazyLog_stories_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : LazyLog_stories_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function LazyLog_stories_defineProperty(obj, key, value) { key = LazyLog_stories_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function LazyLog_stories_toPropertyKey(arg) { var key = LazyLog_stories_toPrimitive(arg, "string"); return LazyLog_stories_typeof(key) === "symbol" ? key : String(key); }
function LazyLog_stories_toPrimitive(input, hint) { if (LazyLog_stories_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (LazyLog_stories_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



var meta = {
  component: LazyLog,
  render: function render(args) {
    return /*#__PURE__*/(0,jsx_runtime.jsx)(LazyLog, LazyLog_stories_objectSpread({}, args));
  }
};
/* harmony default export */ const LazyLog_stories = (meta);
var DefaultStory = {
  caseInsensitive: true,
  enableGutters: false,
  enableHotKeys: true,
  enableLineNumbers: true,
  enableMultilineHighlight: true,
  enableSearch: true,
  enableSearchNavigation: true,
  extraLines: 1,
  height: "520",
  loadingComponent: undefined,
  onError: undefined,
  onHighlight: undefined,
  onLineNumberClick: undefined,
  onLoad: undefined,
  selectableLines: true,
  width: "auto"
};

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
var TextLog = {
  args: LazyLog_stories_objectSpread(LazyLog_stories_objectSpread({}, DefaultStory), {}, {
    text: "\x1B[4;1mRunning \"clean:all\" (clean) task\x1B[0m\n\x1B[32m>> \x1B[39m0 paths cleaned.\n\n\x1B[4;1mRunning \"copy:base\" (copy) task\x1B[0m\nCreated 188 directories, copied 1433 files\n\n\x1B[4;1mRunning \"copy:app\" (copy) task\x1B[0m\nCreated 40 directories, copied 233 files\n\n\x1B[4;1mRunning \"processhtml:dist\" (processhtml) task\x1B[0m\n\n\x1B[4;1mRunning \"ngAnnotate:dist\" (ngAnnotate) task\x1B[0m\n\x1B[32m>> \x1B[39m52 files successfully generated.\n\n\x1B[4;1mRunning \"uglify:dist\" (uglify) task\x1B[0m\n\x1B[32m>> \x1B[39m2 sourcemaps created.\n\x1B[32m>> \x1B[39m2 files created.\n\n\x1B[4;1mRunning \"less:app\" (less) task\x1B[0m\n\x1B[32mFile target/dist/css/alertEvents.css created\x1B[39m\n\x1B[32mFile target/dist/css/application.css created\x1B[39m\n\n\x1B[4;1mRunning \"less:libs\" (less) task\x1B[0m\n\x1B[31mCreate file target/dist/css/libs.css failed\x1B[39m"
  })
};
var URLLog = {
  args: LazyLog_stories_objectSpread(LazyLog_stories_objectSpread({}, DefaultStory), {}, {
    url: "https://gist.githubusercontent.com/helfi92/96d4444aa0ed46c5f9060a789d316100/raw/ba0d30a9877ea5cc23c7afcd44505dbc2bab1538/typical-live_backing.log"
  })
};
TextLog.parameters = LazyLog_stories_objectSpread(LazyLog_stories_objectSpread({}, TextLog.parameters), {}, {
  docs: LazyLog_stories_objectSpread(LazyLog_stories_objectSpread({}, (_TextLog$parameters = TextLog.parameters) === null || _TextLog$parameters === void 0 ? void 0 : _TextLog$parameters.docs), {}, {
    source: LazyLog_stories_objectSpread({
      originalSource: "{\n  args: {\n    ...DefaultStory,\n    text: `\\x1b[4;1mRunning \"clean:all\" (clean) task\\x1b[0m\\n\\x1b[32m>> \\x1b[39m0 paths cleaned.\\n\\n\\x1b[4;1mRunning \"copy:base\" (copy) task\\x1b[0m\\nCreated 188 directories, copied 1433 files\\n\\n\\x1b[4;1mRunning \"copy:app\" (copy) task\\x1b[0m\\nCreated 40 directories, copied 233 files\\n\\n\\x1b[4;1mRunning \"processhtml:dist\" (processhtml) task\\x1b[0m\\n\\n\\x1b[4;1mRunning \"ngAnnotate:dist\" (ngAnnotate) task\\x1b[0m\\n\\x1b[32m>> \\x1b[39m52 files successfully generated.\\n\\n\\x1b[4;1mRunning \"uglify:dist\" (uglify) task\\x1b[0m\\n\\x1b[32m>> \\x1b[39m2 sourcemaps created.\\n\\x1b[32m>> \\x1b[39m2 files created.\\n\\n\\x1b[4;1mRunning \"less:app\" (less) task\\x1b[0m\\n\\x1b[32mFile target/dist/css/alertEvents.css created\\x1b[39m\\n\\x1b[32mFile target/dist/css/application.css created\\x1b[39m\\n\\n\\x1b[4;1mRunning \"less:libs\" (less) task\\x1b[0m\\n\\x1b[31mCreate file target/dist/css/libs.css failed\\x1b[39m`\n  }\n}"
    }, (_TextLog$parameters2 = TextLog.parameters) === null || _TextLog$parameters2 === void 0 || (_TextLog$parameters2 = _TextLog$parameters2.docs) === null || _TextLog$parameters2 === void 0 ? void 0 : _TextLog$parameters2.source)
  })
});
URLLog.parameters = LazyLog_stories_objectSpread(LazyLog_stories_objectSpread({}, URLLog.parameters), {}, {
  docs: LazyLog_stories_objectSpread(LazyLog_stories_objectSpread({}, (_URLLog$parameters = URLLog.parameters) === null || _URLLog$parameters === void 0 ? void 0 : _URLLog$parameters.docs), {}, {
    source: LazyLog_stories_objectSpread({
      originalSource: "{\n  args: {\n    ...DefaultStory,\n    url: \"https://gist.githubusercontent.com/helfi92/96d4444aa0ed46c5f9060a789d316100/raw/ba0d30a9877ea5cc23c7afcd44505dbc2bab1538/typical-live_backing.log\"\n  }\n}"
    }, (_URLLog$parameters2 = URLLog.parameters) === null || _URLLog$parameters2 === void 0 || (_URLLog$parameters2 = _URLLog$parameters2.docs) === null || _URLLog$parameters2 === void 0 ? void 0 : _URLLog$parameters2.source)
  })
});
var __namedExportsOrder = ["TextLog", "URLLog"];

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/components/LazyLog/index.module.css":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".mwcQB6MiHERlY01Dguac {\n    overflow: auto !important;\n    font-family: \"Monaco\", monospace;\n    font-size: 12px;\n    margin: 0;\n    white-space: pre;\n    background-color: #222222;\n    color: #ffffff;\n    font-weight: 400;\n    will-change: initial;\n    outline: none;\n}\n\n.Y6CaaC0yKve7KWp0kBVu {\n    background-color: #ffff00;\n    color: #222222;\n}\n\n.n7ZbVUs0ZqCsjPWJxQz1 {\n    background-color: #ff10f0;\n    color: #222222;\n}\n", "",{"version":3,"sources":["webpack://./src/components/LazyLog/index.module.css"],"names":[],"mappings":"AAAA;IACI,yBAAyB;IACzB,gCAAgC;IAChC,eAAe;IACf,SAAS;IACT,gBAAgB;IAChB,yBAAyB;IACzB,cAAc;IACd,gBAAgB;IAChB,oBAAoB;IACpB,aAAa;AACjB;;AAEA;IACI,yBAAyB;IACzB,cAAc;AAClB;;AAEA;IACI,yBAAyB;IACzB,cAAc;AAClB","sourcesContent":[".lazyLog {\n    overflow: auto !important;\n    font-family: \"Monaco\", monospace;\n    font-size: 12px;\n    margin: 0;\n    white-space: pre;\n    background-color: #222222;\n    color: #ffffff;\n    font-weight: 400;\n    will-change: initial;\n    outline: none;\n}\n\n.searchMatch {\n    background-color: #ffff00;\n    color: #222222;\n}\n\n.searchMatchHighlighted {\n    background-color: #ff10f0;\n    color: #222222;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"lazyLog": "mwcQB6MiHERlY01Dguac",
	"searchMatch": "Y6CaaC0yKve7KWp0kBVu",
	"searchMatchHighlighted": "n7ZbVUs0ZqCsjPWJxQz1"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/components/LineContent/index.module.css":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".d3v5nUP2ymrR7xpAsXiO {\n  user-select: initial;\n}\n", "",{"version":3,"sources":["webpack://./src/components/LineContent/index.module.css"],"names":[],"mappings":"AAAA;EACE,oBAAoB;AACtB","sourcesContent":[".lineContent {\n  user-select: initial;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"lineContent": "d3v5nUP2ymrR7xpAsXiO"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/components/LineGutter/index.module.css":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".huJAM1ITwkQTnpM4LoaE {\n  display: inline-flex;\n  overflow: hidden;\n  min-width: 20px;\n  padding-right: 0.5em;\n\n  color: #a7a7a7;\n  text-decoration: none;\n  user-select: none;\n}\n", "",{"version":3,"sources":["webpack://./src/components/LineGutter/index.module.css"],"names":[],"mappings":"AAAA;EACE,oBAAoB;EACpB,gBAAgB;EAChB,eAAe;EACf,oBAAoB;;EAEpB,cAAc;EACd,qBAAqB;EACrB,iBAAiB;AACnB","sourcesContent":[".lineGutter {\n  display: inline-flex;\n  overflow: hidden;\n  min-width: 20px;\n  padding-right: 0.5em;\n\n  color: #a7a7a7;\n  text-decoration: none;\n  user-select: none;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"lineGutter": "huJAM1ITwkQTnpM4LoaE"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/components/LineNumber/index.module.css":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".DMh7HyMQwlCtuVLXTCmn {\n  display: inline-block;\n  width: 55px;\n  margin-left: 15px;\n  margin-right: 15px;\n  color: #7e7e7e;\n  user-select: none;\n  text-align: right;\n  min-width: 40px;\n  cursor: pointer;\n  text-decoration: none;\n  padding-right: 1em\n}\n\n.DMh7HyMQwlCtuVLXTCmn::before {\n  content: attr(id);\n}\n\n.HrRLdt1xPwxruiDaCGYD {\n  color: #ffffff;\n}\n", "",{"version":3,"sources":["webpack://./src/components/LineNumber/index.module.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB;EACrB,WAAW;EACX,iBAAiB;EACjB,kBAAkB;EAClB,cAAc;EACd,iBAAiB;EACjB,iBAAiB;EACjB,eAAe;EACf,eAAe;EACf,qBAAqB;EACrB;AACF;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EAEE,cAAc;AAChB","sourcesContent":[".lineNumber {\n  display: inline-block;\n  width: 55px;\n  margin-left: 15px;\n  margin-right: 15px;\n  color: #7e7e7e;\n  user-select: none;\n  text-align: right;\n  min-width: 40px;\n  cursor: pointer;\n  text-decoration: none;\n  padding-right: 1em\n}\n\n.lineNumber::before {\n  content: attr(id);\n}\n\n.lineNumberHighlight {\n  composes: lineNumber;\n  color: #ffffff;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"lineNumber": "DMh7HyMQwlCtuVLXTCmn",
	"lineNumberHighlight": "HrRLdt1xPwxruiDaCGYD DMh7HyMQwlCtuVLXTCmn"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/components/LinePart/index.module.css":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".leEWKOOGbRrFk9oLyGJw { font-weight: bold; }\n.cwO6m9RD3FtcLp6R2zWJ { text-decoration: underline; }\n.Mbi0PXbaAM2cw26mMfI7 { font-style: italic; }\n\n.vSJtg8oPUNXM7GO7izKr { color: #4e4e4e; }\n.cY7MIihzPxGdT3pSiFLA { color: #ff6c60; }\n.rF8fdIFbwCaruUEwRiyC { color: #00aa00; }\n.HEaQ5ZAB4kn0y6zMPLyg { color: #ffffb6; }\n.lom08i464eBC88nvhRtP { color: #96cbfe; }\n.Ag55Pv0J9ipGERCQk1_B { color: #ff73fd; }\n.HhUnxMrRT46TWatIMOpg { color: #00aaaa; }\n.FgIiS2dgrTvd6dkkbrEW { color: #eeeeee; }\n.MoPvpbuRME6zEx1VEX0o { color: #969696; }\n\n.TgRAFPTvMPnmRV8HkK48 { color: #7c7c7c; }\n.DQ54Hg3iw5YdW2jONxmc { color: #ff9b93; }\n.pWIiXmmlCcXEyMOk81d5 { color: #ceffab }\n.qVuukjdBH7Tg7lCEr85z { color: #ffffcb; }\n.DqNvuTvrbh61MBCnqhL8 { color: #b5dcfe; }\n.kIaV4TsQ6gXhZrVWvyOg { color: #ff9cfe; }\n.YbTYPQsOncZq0gb0Lx_e { color: #55ffff; }\n.hOsYCSNPcZ3aP_vGpdzS { color: #ffffff; }\n.injFD873JuoTKj70V6gQ { color: #969696; }\n\n.t6SQhRMUQAy3KkIY7RCz { background-color: #4e4e4e; }\n.qlHBoKNuVChBd1JYaOFA { background-color: #ff6c60; }\n.ZdytVHvo7LKp4Is0nN5b { background-color: #00aa00; }\n.TtJOE4V_zQLe6UV2nbNS { background-color: #ffffb6; }\n.Z2rcIVsUGQTiKPpS59AY { background-color: #96cbfe; }\n.Wpqn06yNsnnmv1fGa8Kg { background-color: #ff73fd; }\n.MdfUwTNEZDl254kb_dBU { background-color: #00aaaa; }\n.DTVXVkiOMiCPgzQKdnRu { background-color: #eeeeee; }\n.h0YIHLxzbLqY4Gy5urXg { background-color: #969696; }\n", "",{"version":3,"sources":["webpack://./src/components/LinePart/index.module.css"],"names":[],"mappings":"AAAA,wBAAQ,iBAAiB,EAAE;AAC3B,wBAAa,0BAA0B,EAAE;AACzC,wBAAU,kBAAkB,EAAE;;AAE9B,wBAAS,cAAc,EAAE;AACzB,wBAAO,cAAc,EAAE;AACvB,wBAAS,cAAc,EAAE;AACzB,wBAAU,cAAc,EAAE;AAC1B,wBAAQ,cAAc,EAAE;AACxB,wBAAW,cAAc,EAAE;AAC3B,wBAAQ,cAAc,EAAE;AACxB,wBAAS,cAAc,EAAE;AACzB,wBAAQ,cAAc,EAAE;;AAExB,wBAAa,cAAc,EAAE;AAC7B,wBAAW,cAAc,EAAE;AAC3B,wBAAa,eAAe;AAC5B,wBAAc,cAAc,EAAE;AAC9B,wBAAY,cAAc,EAAE;AAC5B,wBAAe,cAAc,EAAE;AAC/B,wBAAY,cAAc,EAAE;AAC5B,wBAAa,cAAc,EAAE;AAC7B,wBAAY,cAAc,EAAE;;AAE5B,wBAAW,yBAAyB,EAAE;AACtC,wBAAS,yBAAyB,EAAE;AACpC,wBAAW,yBAAyB,EAAE;AACtC,wBAAY,yBAAyB,EAAE;AACvC,wBAAU,yBAAyB,EAAE;AACrC,wBAAa,yBAAyB,EAAE;AACxC,wBAAU,yBAAyB,EAAE;AACrC,wBAAW,yBAAyB,EAAE;AACtC,wBAAU,yBAAyB,EAAE","sourcesContent":[".bold { font-weight: bold; }\n.underline { text-decoration: underline; }\n.italic { font-style: italic; }\n\n.black { color: #4e4e4e; }\n.red { color: #ff6c60; }\n.green { color: #00aa00; }\n.yellow { color: #ffffb6; }\n.blue { color: #96cbfe; }\n.magenta { color: #ff73fd; }\n.cyan { color: #00aaaa; }\n.white { color: #eeeeee; }\n.grey { color: #969696; }\n\n.blackBold { color: #7c7c7c; }\n.redBold { color: #ff9b93; }\n.greenBold { color: #ceffab }\n.yellowBold { color: #ffffcb; }\n.blueBold { color: #b5dcfe; }\n.magentaBold { color: #ff9cfe; }\n.cyanBold { color: #55ffff; }\n.whiteBold { color: #ffffff; }\n.greyBold { color: #969696; }\n\n.blackBg { background-color: #4e4e4e; }\n.redBg { background-color: #ff6c60; }\n.greenBg { background-color: #00aa00; }\n.yellowBg { background-color: #ffffb6; }\n.blueBg { background-color: #96cbfe; }\n.magentaBg { background-color: #ff73fd; }\n.cyanBg { background-color: #00aaaa; }\n.whiteBg { background-color: #eeeeee; }\n.greyBg { background-color: #969696; }\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"bold": "leEWKOOGbRrFk9oLyGJw",
	"underline": "cwO6m9RD3FtcLp6R2zWJ",
	"italic": "Mbi0PXbaAM2cw26mMfI7",
	"black": "vSJtg8oPUNXM7GO7izKr",
	"red": "cY7MIihzPxGdT3pSiFLA",
	"green": "rF8fdIFbwCaruUEwRiyC",
	"yellow": "HEaQ5ZAB4kn0y6zMPLyg",
	"blue": "lom08i464eBC88nvhRtP",
	"magenta": "Ag55Pv0J9ipGERCQk1_B",
	"cyan": "HhUnxMrRT46TWatIMOpg",
	"white": "FgIiS2dgrTvd6dkkbrEW",
	"grey": "MoPvpbuRME6zEx1VEX0o",
	"blackBold": "TgRAFPTvMPnmRV8HkK48",
	"redBold": "DQ54Hg3iw5YdW2jONxmc",
	"greenBold": "pWIiXmmlCcXEyMOk81d5",
	"yellowBold": "qVuukjdBH7Tg7lCEr85z",
	"blueBold": "DqNvuTvrbh61MBCnqhL8",
	"magentaBold": "kIaV4TsQ6gXhZrVWvyOg",
	"cyanBold": "YbTYPQsOncZq0gb0Lx_e",
	"whiteBold": "hOsYCSNPcZ3aP_vGpdzS",
	"greyBold": "injFD873JuoTKj70V6gQ",
	"blackBg": "t6SQhRMUQAy3KkIY7RCz",
	"redBg": "qlHBoKNuVChBd1JYaOFA",
	"greenBg": "ZdytVHvo7LKp4Is0nN5b",
	"yellowBg": "TtJOE4V_zQLe6UV2nbNS",
	"blueBg": "Z2rcIVsUGQTiKPpS59AY",
	"magentaBg": "Wpqn06yNsnnmv1fGa8Kg",
	"cyanBg": "MdfUwTNEZDl254kb_dBU",
	"whiteBg": "DTVXVkiOMiCPgzQKdnRu",
	"greyBg": "h0YIHLxzbLqY4Gy5urXg"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/components/Line/index.module.css":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".DtUnj6RbYL2EfbHanFmG {\n  margin: 0;\n  user-select: none;\n}\n\n.DtUnj6RbYL2EfbHanFmG:hover {\n  background-color: #444444;\n}\n\n.XOQNF430MiSY9Ai6MvxM {\n  background-color: #666666;\n}\n\n.HOxYa7ivGH4mSwdyhCZg {\n  user-select: text;\n}\n", "",{"version":3,"sources":["webpack://./src/components/Line/index.module.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,iBAAiB;AACnB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,iBAAiB;AACnB","sourcesContent":[".line {\n  margin: 0;\n  user-select: none;\n}\n\n.line:hover {\n  background-color: #444444;\n}\n\n.lineHighlight {\n  background-color: #666666;\n}\n\n.lineSelectable {\n  user-select: text;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"line": "DtUnj6RbYL2EfbHanFmG",
	"lineHighlight": "XOQNF430MiSY9Ai6MvxM",
	"lineSelectable": "HOxYa7ivGH4mSwdyhCZg"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/components/Loading/index.module.css":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".d1Ny9UfcA85Y1JU7LpSw {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translateX(-50%) translateY(-50%);\n}\n", "",{"version":3,"sources":["webpack://./src/components/Loading/index.module.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,4CAA4C;AAC9C","sourcesContent":[".loading {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translateX(-50%) translateY(-50%);\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"loading": "d1Ny9UfcA85Y1JU7LpSw"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/components/SearchBar/ArrowIcons/DownArrowIcon/index.module.css":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".nUoEkz_AFUyXnER9IH9x {\n    height: 15px;\n    cursor: pointer;\n}\n", "",{"version":3,"sources":["webpack://./src/components/SearchBar/ArrowIcons/DownArrowIcon/index.module.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,eAAe;AACnB","sourcesContent":[".downArrowIcon {\n    height: 15px;\n    cursor: pointer;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"downArrowIcon": "nUoEkz_AFUyXnER9IH9x"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/components/SearchBar/ArrowIcons/UpArrowIcon/index.module.css":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".KrrOfU4wyyouhNdb7sr5 {\n    height: 15px;\n    cursor: pointer;\n}\n", "",{"version":3,"sources":["webpack://./src/components/SearchBar/ArrowIcons/UpArrowIcon/index.module.css"],"names":[],"mappings":"AAAA;IACI,YAAY;IACZ,eAAe;AACnB","sourcesContent":[".upArrowIcon {\n    height: 15px;\n    cursor: pointer;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"upArrowIcon": "KrrOfU4wyyouhNdb7sr5"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/components/SearchBar/FilterLinesIcon/index.module.css":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".beIYAGOiZxZ5c9B8EwjG {\n  height: 15px;\n  cursor: pointer;\n}\n", "",{"version":3,"sources":["webpack://./src/components/SearchBar/FilterLinesIcon/index.module.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,eAAe;AACjB","sourcesContent":[".filterLinesIcon {\n  height: 15px;\n  cursor: pointer;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"filterLinesIcon": "beIYAGOiZxZ5c9B8EwjG"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[8].use[1]!./src/components/SearchBar/index.module.css":
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".oKZDMpzpjrZiU_Nr0inQ {\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    font-family: \"Monaco\", monospace;\n    font-size: 12px;\n    background-color: #222222;\n    color: #d6d6d6;\n    padding: 10px;\n}\n\n.xpuWeYsCEzX4Ee9rYk9x {\n    background-color: #464646;\n    color: #d6d6d6;\n    height: 20px;\n    min-width: 200px;\n    font-size: 12px;\n    padding: 2px 5px;\n    border: 1px solid #4e4e4e;\n    margin-right: 10px;\n}\n\n.WsrNQAZ1YHXm1JFohLR3 {\n    color: #d6d6d6;\n    fill: #d6d6d6;\n}\n\n.Cn6DUMz7rI_7ph0mUwwa:hover {\n    border-radius: 5px;\n    background: #666666;\n}\n\n.BZ5myiH_qfgJr9VfoojF {\n    color: #464646;\n    fill: #464646;\n    padding: 3px;\n    padding-bottom: 1px;\n}\n\n.Pr6Y85_7Zoy3TIUwTs1R {\n    background: none;\n    border: none;\n    margin-right: 10px;\n}\n", "",{"version":3,"sources":["webpack://./src/components/SearchBar/index.module.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,mBAAmB;IACnB,yBAAyB;IACzB,gCAAgC;IAChC,eAAe;IACf,yBAAyB;IACzB,cAAc;IACd,aAAa;AACjB;;AAEA;IACI,yBAAyB;IACzB,cAAc;IACd,YAAY;IACZ,gBAAgB;IAChB,eAAe;IACf,gBAAgB;IAChB,yBAAyB;IACzB,kBAAkB;AACtB;;AAEA;IACI,cAAc;IACd,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;AACvB;;AAEA;IACI,cAAc;IACd,aAAa;IACb,YAAY;IACZ,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,kBAAkB;AACtB","sourcesContent":[".searchBar {\n    display: flex;\n    align-items: center;\n    justify-content: flex-end;\n    font-family: \"Monaco\", monospace;\n    font-size: 12px;\n    background-color: #222222;\n    color: #d6d6d6;\n    padding: 10px;\n}\n\n.searchInput {\n    background-color: #464646;\n    color: #d6d6d6;\n    height: 20px;\n    min-width: 200px;\n    font-size: 12px;\n    padding: 2px 5px;\n    border: 1px solid #4e4e4e;\n    margin-right: 10px;\n}\n\n.active {\n    color: #d6d6d6;\n    fill: #d6d6d6;\n}\n\n.clickable:hover {\n    border-radius: 5px;\n    background: #666666;\n}\n\n.inactive {\n    color: #464646;\n    fill: #464646;\n    padding: 3px;\n    padding-bottom: 1px;\n}\n\n.button {\n    background: none;\n    border: none;\n    margin-right: 10px;\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {
	"searchBar": "oKZDMpzpjrZiU_Nr0inQ",
	"searchInput": "xpuWeYsCEzX4Ee9rYk9x",
	"active": "WsrNQAZ1YHXm1JFohLR3",
	"clickable": "Cn6DUMz7rI_7ph0mUwwa",
	"inactive": "BZ5myiH_qfgJr9VfoojF",
	"button": "Pr6Y85_7Zoy3TIUwTs1R"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

}]);
//# sourceMappingURL=stories-LazyLog-stories.f0f3a9f3.iframe.bundle.js.map