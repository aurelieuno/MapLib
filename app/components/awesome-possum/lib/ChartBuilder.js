'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _chart = require('chart.js');

var _chart2 = _interopRequireDefault(_chart);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var REV_CHART_SPEC = {
  bar: {
    defaultOptions: {
      // Whether the scale should start at zero, or an order of magnitude down from the lowest value
      scaleBeginAtZero: true,
      scaleShowGridLines: true,
      scaleGridLineColor: 'rgba(0,0,0,.05)',
      scaleGridLineWidth: 1,
      // Whether to show horizontal lines (except X axis)
      scaleShowHorizontalLine: true,
      // Whether to show vertical lines (except Y axis)
      scaleShowVerticalLine: false,
      barShowStroke: true,
      barStrokeWidth: 2,
      // Spacing between each of the X value sets
      barValueSpacing: 5,
      // Spacing between data sets within X values
      barDatasetSpacing: 1,
      // Amount extra to add to the radius to cater for hit detection outside the drawn point
      pointHitDetectionRadius: 20,
      // Whether to show a stroke for datasets
      datasetStroke: true,
      datasetStrokeWidth: 2,
      datasetFill: false
    }
  },
  donut: {
    defaultOptions: {
      segmentShowStroke: true,
      segmentStrokeColor: '#fff',
      segmentStrokeWidth: 2,
      percentageInnerCutout: 50,
      animationSteps: 100,
      animationEasing: 'easeOutBounce',
      animateRotate: true,
      animateScale: false
    }
  },
  line: {
    defaultOptions: {
      scaleShowGridLines: true,
      scaleGridLineColor: 'rgba(0,0,0,.05)',
      scaleGridLineWidth: 1,
      scaleShowHorizontalLine: true,
      scaleShowVerticalLine: false,
      bezierCurve: false,
      bezierCurveTension: 0.4,
      pointDot: true,
      pointDotRadius: 4,
      pointDotStrokeWidth: 1,
      pointHitDetectionRadius: 20,
      datasetStroke: true,
      datasetStrokeWidth: 2,
      datasetFill: false
    }
  },
  pie: {
    defaultOptions: {
      segmentShowStroke: true,
      segmentStrokeColor: '#fff',
      segmentStrokeWidth: 2,
      percentageInnerCutout: 0,
      animationSteps: 100,
      animationEasing: 'easeOutBounce',
      animateRotate: true,
      animateScale: false
    }
  },
  radar: {
    defaultOptions: {
      // Whether to show lines for each scale point
      scaleShowLine: true,
      // Whether we show the angle lines out of the radar
      angleShowLineOut: true,
      scaleShowLabels: false,
      scaleBeginAtZero: true,
      // Colour of the angle line
      angleLineColor: 'rgba(0,0,0,.1)',
      // Pixel width of the angle line
      angleLineWidth: 1,
      pointLabelFontFamily: 'Arial',
      pointLabelFontStyle: 'normal',
      pointLabelFontSize: 10,
      pointLabelFontColor: '#666',
      pointDot: true,
      pointDotRadius: 3,
      pointDotStrokeWidth: 1,
      // amount extra to add to the radius to cater for hit detection outside the drawn point
      pointHitDetectionRadius: 20,
      datasetStroke: true,
      datasetStrokeWidth: 2,
      datasetFill: true
    }
  }
};

var ChartBuilder = function (_Component) {
  _inherits(ChartBuilder, _Component);

  function ChartBuilder() {
    _classCallCheck(this, ChartBuilder);

    return _possibleConstructorReturn(this, (ChartBuilder.__proto__ || Object.getPrototypeOf(ChartBuilder)).apply(this, arguments));
  }

  _createClass(ChartBuilder, [{
    key: 'createChart',
    value: function createChart() {
      if (this._chart) {
        throw new Error('`createChart` may only be called once.`');
      }
      this._chart = new _chart2.default(this.ctx, {
        type: this.props.type,
        data: this.props.data,
        options: this.options
      });
    }
  }, {
    key: 'destroyChart',
    value: function destroyChart() {
      this._chart.destroy();
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.createChart();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.destroyChart();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h3',
          { className: 'ChartTitle' },
          this.props.title
        ),
        _react2.default.createElement('canvas', { ref: function ref(self) {
            _this2.canvas = self;
          },
          width: this.props.width,
          height: this.props.height
        })
      );
    }
  }, {
    key: 'ctx',
    get: function get() {
      return this.canvas.getContext('2d');
    }
  }, {
    key: 'chartSpec',
    get: function get() {
      return REV_CHART_SPEC[this.props.type];
    }
  }, {
    key: 'chartFuncName',
    get: function get() {
      return this.props.type;
    }
  }, {
    key: 'options',
    get: function get() {
      var opts = Object.assign({}, this.chartSpec.defaultOptions);

      return Object.assign(opts, this.props.options);
    }
  }], [{
    key: 'propTypes',
    get: function get() {
      return {
        data: _propTypes2.default.object.isRequired,
        type: _propTypes2.default.oneOf(Object.keys(REV_CHART_SPEC)).isRequired,
        options: _propTypes2.default.object,
        width: _propTypes2.default.number,
        height: _propTypes2.default.number,
        title: _propTypes2.default.string
      };
    }
  }, {
    key: 'defaultProps',
    get: function get() {
      return {
        title: 'Chart Title',
        width: 300,
        height: 300
      };
    }
  }]);

  return ChartBuilder;
}(_react.Component);

exports.default = ChartBuilder;
//# sourceMappingURL=ChartBuilder.js.map