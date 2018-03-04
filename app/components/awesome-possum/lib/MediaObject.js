'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PARENT_CLASS_NAMES = {
  stackForSmall: ['stack-for-small', 'rev-MediaObject--stackForSmall'],
  stackForMedium: ['stack-for-medium', 'rev-MediaObject--stackForMedium'],
  stackForLarge: ['stack-for-large', 'rev-MediaObject--stackForLarge'],

  right: ['align-right', 'rev-MediaObject--right'],
  center: ['align-center', 'rev-MediaObject--center'],
  justify: ['align-justify', 'rev-MediaObject--justify'],
  spaced: ['align-spaced', 'rev-MediaObject--spaced'],
  top: ['align-top', 'rev-MediaObject--top'],
  middle: ['middle', 'align-middle', 'rev-MediaObject--middle'],
  bottom: ['bottom', 'align-bottom', 'rev-MediaObject--bottom'],
  stretch: ['align-stretch', 'rev-MediaObject--stretch']
};

var PARENT_PROP_TYPES = {
  children: _propTypes2.default.node
};
Object.keys(PARENT_CLASS_NAMES).forEach(function (key) {
  return PARENT_PROP_TYPES[key] = _propTypes2.default.bool;
});

var MediaObject = function (_Component) {
  _inherits(MediaObject, _Component);

  function MediaObject() {
    _classCallCheck(this, MediaObject);

    return _possibleConstructorReturn(this, (MediaObject.__proto__ || Object.getPrototypeOf(MediaObject)).apply(this, arguments));
  }

  _createClass(MediaObject, [{
    key: 'render',
    value: function render() {
      // Extract props that won't pass through
      var _props = this.props,
          className = _props.className,
          children = _props.children,
          props = _objectWithoutProperties(_props, ['className', 'children']);

      // Start building the className


      var classNameList = [];
      Object.keys(PARENT_CLASS_NAMES).forEach(function (name) {
        if (props[name]) {
          classNameList.push(PARENT_CLASS_NAMES[name]);
        }
        delete props[name];
      });

      // Finish building the className
      var mediaObjectClassNames = (0, _classnames2.default)(classNameList, 'media-object', 'rev-MediaObject', className);

      return _react2.default.createElement(
        'div',
        _extends({}, props, { className: mediaObjectClassNames }),
        this.props.children
      );
    }
  }]);

  return MediaObject;
}(_react.Component);

MediaObject.propTypes = PARENT_PROP_TYPES;
exports.default = MediaObject;


var SECTION_CLASS_NAMES = {
  main: ['main-section', 'rev-MediaObject-section--main'],

  right: ['align-self-right', 'rev-MediaObject-section--right'],
  center: ['align-self-center', 'rev-MediaObject-section--center'],
  justify: ['align-self-justify', 'rev-MediaObject-section--justify'],
  spaced: ['align-self-spaced', 'rev-MediaObject-section--spaced'],
  top: ['align-self-top', 'rev-MediaObject-section--top'],
  middle: ['middle', 'align-self-middle', 'rev-MediaObject-section--middle'],
  bottom: ['bottom', 'align-self-bottom', 'rev-MediaObject-section--bottom'],
  stretch: ['align-self-stretch', 'rev-MediaObject-section--stretch']
};

var SECTION_PROP_TYPES = {
  children: _propTypes2.default.node
};
Object.keys(SECTION_CLASS_NAMES).forEach(function (key) {
  return SECTION_PROP_TYPES[key] = _propTypes2.default.bool;
});

var MediaObjectSection = function (_Component2) {
  _inherits(MediaObjectSection, _Component2);

  function MediaObjectSection() {
    _classCallCheck(this, MediaObjectSection);

    return _possibleConstructorReturn(this, (MediaObjectSection.__proto__ || Object.getPrototypeOf(MediaObjectSection)).apply(this, arguments));
  }

  _createClass(MediaObjectSection, [{
    key: 'render',
    value: function render() {
      // Extract props that won't pass through
      var _props2 = this.props,
          className = _props2.className,
          children = _props2.children,
          props = _objectWithoutProperties(_props2, ['className', 'children']);

      // Start building the className


      var classNameList = [];
      Object.keys(SECTION_CLASS_NAMES).forEach(function (name) {
        if (props[name]) {
          classNameList.push(SECTION_CLASS_NAMES[name]);
        }
        delete props[name];
      });

      // Finish building the className
      var sectionClassNames = (0, _classnames2.default)(classNameList, 'media-object-section', 'rev-MediaObject-section', className);

      return _react2.default.createElement(
        'div',
        _extends({}, props, { className: sectionClassNames }),
        children
      );
    }
  }]);

  return MediaObjectSection;
}(_react.Component);

MediaObjectSection.propTypes = SECTION_PROP_TYPES;

MediaObject.Section = MediaObjectSection;
//# sourceMappingURL=MediaObject.js.map