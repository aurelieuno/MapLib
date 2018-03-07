'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _StatelessDrawer = require('./StatelessDrawer');

var _StatelessDrawer2 = _interopRequireDefault(_StatelessDrawer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BOOL_PROPS_TO_CLASS_NAMES = {
  left: 'rev-Drawer--left',
  right: 'rev-Drawer--right',
  top: 'rev-Drawer--top',
  scroll: 'rev-Drawer--scroll',
  fixed: 'rev-Drawer--fixed',
  overlay: 'rev-Drawer--overlay',
  collapsible: 'rev-Drawer--collapsible'
};

var BOOL_PROPS = Object.keys(BOOL_PROPS_TO_CLASS_NAMES);

var NewDrawer = function (_Component) {
  _inherits(NewDrawer, _Component);

  function NewDrawer(props) {
    _classCallCheck(this, NewDrawer);

    var _this = _possibleConstructorReturn(this, (NewDrawer.__proto__ || Object.getPrototypeOf(NewDrawer)).call(this, props));

    _this.expandDrawer = function () {
      _this.setState({ open: true });
    };

    _this.closeDrawer = function () {
      _this.setState({ open: false });
    };

    _this.state = {
      open: props.open
    };
    return _this;
  }

  _createClass(NewDrawer, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var open = this.state.open;

      var propClassNames = BOOL_PROPS.reduce(function (acc, key) {
        var value = BOOL_PROPS_TO_CLASS_NAMES[key];
        acc[value] = _this2.props[key];
        return acc;
      }, {});
      var newClassName = (0, _classnames2.default)(this.props.className, propClassNames);

      return _react2.default.createElement(
        _StatelessDrawer2.default,
        {
          open: open,
          className: newClassName,
          close: this.closeDrawer,
          expand: this.expandDrawer,
          expanderComponentClass: this.props.expanderComponentClass,
          expanderClassName: this.props.expanderClassName,
          expanderChildren: this.props.expanderChildren,
          closerChildren: this.props.closerChildren
        },
        this.props.children
      );
    }
  }]);

  return NewDrawer;
}(_react.Component);

NewDrawer.propTypes = {
  open: _propTypes2.default.bool,
  close: _propTypes2.default.func,
  expand: _propTypes2.default.func,
  children: _propTypes2.default.node,
  className: _propTypes2.default.string,
  closerChildren: _propTypes2.default.node,
  expanderChildren: _propTypes2.default.node,
  expanderComponentClass: _propTypes2.default.string
};
NewDrawer.defaultProps = {
  expanderComponentClass: 'a',
  expanderClassName: '',
  expanderChildren: 'Expand this',
  closerChildren: 'Close This',
  open: 'false'
};
exports.default = NewDrawer;
//# sourceMappingURL=NewDrawer.js.map