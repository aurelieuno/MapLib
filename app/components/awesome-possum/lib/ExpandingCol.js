'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ExpandingColStateContainer = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _grid = require('./grid');

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// An expanding column that manages its own state. This is to be used in
// non-Redux applications where the state is not managed by another component
// If you are using Redux, or if a different component controls whether the
// column is open or not, use an ExpandingCol instead
var ExpandingColStateContainer = exports.ExpandingColStateContainer = function (_React$Component) {
  _inherits(ExpandingColStateContainer, _React$Component);

  function ExpandingColStateContainer(props) {
    _classCallCheck(this, ExpandingColStateContainer);

    var _this = _possibleConstructorReturn(this, (ExpandingColStateContainer.__proto__ || Object.getPrototypeOf(ExpandingColStateContainer)).call(this, props));

    _this.expandPane = function () {
      _this.setState({ open: true });
    };

    _this.closePane = function () {
      _this.setState({ open: false });
    };

    _this.state = {
      open: false
    };
    return _this;
  }

  _createClass(ExpandingColStateContainer, [{
    key: 'render',


    // Feeds open state, closer and opener down to an ExpandingCol. Note that
    // we clone the closer and expander so that we can accept them as props
    // from up the tree but still inject our onClick handlers for open/close
    value: function render() {
      var _props = this.props,
          children = _props.children,
          closer = _props.closer,
          expander = _props.expander,
          remainingProps = _objectWithoutProperties(_props, ['children', 'closer', 'expander']);

      return _react2.default.createElement(
        ExpandingCol,
        _extends({
          open: this.state.open,
          closer: (0, _react.cloneElement)(closer, { onClick: this.closePane }),
          expander: (0, _react.cloneElement)(expander, { onClick: this.expandPane })
        }, remainingProps),
        children
      );
    }
  }]);

  return ExpandingColStateContainer;
}(_react2.default.Component);

ExpandingColStateContainer.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  closer: _propTypes2.default.element,
  expander: _propTypes2.default.element
};
ExpandingColStateContainer.defaultProps = {
  // intentionally blank to override the 'expanderless' class of the stateless
  // version of the component
  className: '',
  closer: _react2.default.createElement(
    _Button2.default,
    { className: 'rev-ExpandingCol-closer rev-Button rev-Button--small rev-Button--secondary' },
    '-'
  ),
  expander: _react2.default.createElement(
    _Button2.default,
    { className: 'rev-ExpandingCol-expander rev-Button rev-Button--small rev-Button--secondary' },
    '+'
  )
};

var ExpandingCol = function (_React$Component2) {
  _inherits(ExpandingCol, _React$Component2);

  function ExpandingCol() {
    _classCallCheck(this, ExpandingCol);

    return _possibleConstructorReturn(this, (ExpandingCol.__proto__ || Object.getPrototypeOf(ExpandingCol)).apply(this, arguments));
  }

  _createClass(ExpandingCol, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          children = _props2.children,
          closer = _props2.closer,
          expander = _props2.expander,
          open = _props2.open,
          className = _props2.className,
          remainingProps = _objectWithoutProperties(_props2, ['children', 'closer', 'expander', 'open', 'className']);

      var openClass = open ? 'is-open' : 'is-closed';

      return _react2.default.createElement(
        _grid.Col,
        _extends({}, remainingProps, {
          className: 'rev-ExpandingCol-pane ' + className + ' ' + openClass
        }),
        open ? closer : expander,
        _react2.default.createElement(
          'div',
          { className: 'rev-ExpandingCol-pane-content' },
          children
        )
      );
    }
  }]);

  return ExpandingCol;
}(_react2.default.Component);

ExpandingCol.defaultProps = {
  className: 'rev-ExpandingCol--expanderless'
};
ExpandingCol.propTypes = {
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  closer: _propTypes2.default.node,
  open: _propTypes2.default.bool
};
exports.default = ExpandingCol;


ExpandingCol.ExpandingCol = ExpandingCol;
ExpandingCol.Stateful = ExpandingColStateContainer;
ExpandingCol.ExpandingColStateContainer = ExpandingColStateContainer;
exports.ExpandingCol = ExpandingCol;
exports.Stateful = ExpandingColStateContainer;
exports.ExpandingColStateContainer = ExpandingColStateContainer;
//# sourceMappingURL=ExpandingCol.js.map