'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TabsTitle = function (_Component) {
  _inherits(TabsTitle, _Component);

  function TabsTitle() {
    _classCallCheck(this, TabsTitle);

    return _possibleConstructorReturn(this, (TabsTitle.__proto__ || Object.getPrototypeOf(TabsTitle)).apply(this, arguments));
  }

  _createClass(TabsTitle, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          onClick = _props.onClick,
          href = _props.href,
          title = _props.title,
          active = _props.active;

      var className = (0, _classnames2.default)('rev-TabsTitle', {
        'rev-TabsTitle--selected': active
      });
      return _react2.default.createElement(
        'li',
        { className: className },
        _react2.default.createElement(
          'a',
          { className: 'rev-TabsTitle-link', href: href || '#', onClick: onClick, 'aria-selected': active },
          title
        )
      );
    }
  }]);

  return TabsTitle;
}(_react.Component);

var TabsPanel = function (_Component2) {
  _inherits(TabsPanel, _Component2);

  function TabsPanel() {
    _classCallCheck(this, TabsPanel);

    return _possibleConstructorReturn(this, (TabsPanel.__proto__ || Object.getPrototypeOf(TabsPanel)).apply(this, arguments));
  }

  _createClass(TabsPanel, [{
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          children = _props2.children,
          active = _props2.active,
          renderHiddenTabs = _props2.renderHiddenTabs;


      var className = (0, _classnames2.default)('rev-TabsItem-panel--selected', 'rev-TabsItem-panel');
      if (renderHiddenTabs) {
        if (!active) return _react2.default.createElement(
          'div',
          { style: { display: "none" }, className: className },
          children
        );
      } else {
        if (!active) return null;
      }

      return _react2.default.createElement(
        'div',
        { style: { display: "block" }, className: className },
        children
      );
    }
  }]);

  return TabsPanel;
}(_react.Component);

var TabsItem = function (_Component3) {
  _inherits(TabsItem, _Component3);

  function TabsItem() {
    _classCallCheck(this, TabsItem);

    return _possibleConstructorReturn(this, (TabsItem.__proto__ || Object.getPrototypeOf(TabsItem)).apply(this, arguments));
  }

  _createClass(TabsItem, [{
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          renderTitle = _props3.renderTitle,
          props = _objectWithoutProperties(_props3, ['renderTitle']);

      return renderTitle ? _react2.default.createElement(TabsTitle, props) : _react2.default.createElement(TabsPanel, props);
    }
  }]);

  return TabsItem;
}(_react.Component);

var Tabs = function (_Component4) {
  _inherits(Tabs, _Component4);

  function Tabs() {
    _classCallCheck(this, Tabs);

    return _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).apply(this, arguments));
  }

  _createClass(Tabs, [{
    key: 'render',
    value: function render() {
      var _props4 = this.props,
          children = _props4.children,
          className = _props4.className,
          active = _props4.active,
          renderHiddenTabs = _props4.renderHiddenTabs;


      var activeKey = active;
      var rewriteItem = function rewriteItem(child) {
        activeKey = activeKey || child.props.contentKey; // default to first child
        var contentKey = child.props.contentKey;

        return (0, _react.cloneElement)(child, { active: activeKey === contentKey, renderHiddenTabs: renderHiddenTabs });
      };

      var rewriteItemToTitle = function rewriteItemToTitle(item) {
        return (0, _react.cloneElement)(item, { renderTitle: true });
      };

      var items = _react.Children.map(children, rewriteItem);
      var titles = items.map(rewriteItemToTitle);

      var divClassName = (0, _classnames2.default)(className, 'rev-Tabs');

      return _react2.default.createElement(
        'div',
        { className: divClassName },
        _react2.default.createElement(
          'ul',
          { className: 'rev-Tabs-titles' },
          titles
        ),
        _react2.default.createElement(
          'div',
          { className: 'rev-Tabs-content' },
          items
        )
      );
    }
  }]);

  return Tabs;
}(_react.Component);

exports.default = Tabs;

var StatefulTabs = function (_Component5) {
  _inherits(StatefulTabs, _Component5);

  function StatefulTabs(props) {
    _classCallCheck(this, StatefulTabs);

    var _this5 = _possibleConstructorReturn(this, (StatefulTabs.__proto__ || Object.getPrototypeOf(StatefulTabs)).call(this, props));

    _this5.setActive = function (contentKey) {
      _this5.setState({ active: contentKey });
    };

    _this5.rewriteChild = function (child) {
      var _child$props = child.props,
          contentKey = _child$props.contentKey,
          onClick = _child$props.onClick;

      var newOnClick = function newOnClick(e) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        e.preventDefault();
        _this5.setActive(contentKey);
        if (onClick) {
          return onClick.apply(undefined, [e].concat(args));
        }
      };
      return (0, _react.cloneElement)(child, { onClick: newOnClick });
    };

    _this5.state = {
      active: props.defaultActive || _react.Children.toArray(props.children)[0].props.contentKey
    };
    return _this5;
  }

  _createClass(StatefulTabs, [{
    key: 'render',
    value: function render() {
      var active = this.state.active;

      var _props5 = this.props,
          children = _props5.children,
          props = _objectWithoutProperties(_props5, ['children']);

      return _react2.default.createElement(
        Tabs,
        _extends({}, props, { active: this.state.active }),
        _react.Children.map(children, this.rewriteChild)
      );
    }
  }]);

  return StatefulTabs;
}(_react.Component);

Tabs.Stateful = StatefulTabs;
Tabs.Item = TabsItem;
//# sourceMappingURL=Tabs.js.map