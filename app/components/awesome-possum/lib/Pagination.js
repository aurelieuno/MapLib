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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// TODO: once icons are added to this repo, enable them here.
var Pagination = function (_Component) {
  _inherits(Pagination, _Component);

  function Pagination() {
    _classCallCheck(this, Pagination);

    return _possibleConstructorReturn(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).apply(this, arguments));
  }

  _createClass(Pagination, [{
    key: 'getAttributes',
    value: function getAttributes() {
      var _props = this.props,
          currentPage = _props.currentPage,
          totalPages = _props.totalPages,
          maxViewPages = _props.maxViewPages;

      var attributes = { beginArrows: false, endArrows: false };

      if (totalPages <= maxViewPages) {
        attributes.start = 1;
        attributes.end = totalPages;
      } else {
        if (currentPage <= Math.ceil(maxViewPages / 2)) {
          // Left end
          attributes.start = 1;
          attributes.end = maxViewPages;
          attributes.endArrows = true;
        } else if (currentPage > totalPages - Math.ceil(maxViewPages / 2)) {
          // Right end
          attributes.start = totalPages - (maxViewPages - 1);
          attributes.end = totalPages;
          attributes.beginArrows = true;
        } else {
          // Middle
          var buffer = Math.floor((maxViewPages - 2) / 2);
          var unevenAmount = (maxViewPages - 2) % 2;
          attributes.start = currentPage - (buffer + unevenAmount);
          attributes.end = currentPage + buffer;
          attributes.beginArrows = true;
          attributes.endArrows = true;
        }
      }

      return attributes;
    }
  }, {
    key: 'getArrowClass',
    value: function getArrowClass(relevant, samePage) {
      var hideArrows = this.props.hideArrows;


      if (!relevant && hideArrows && samePage) {
        return 'rev-Pagination-arrow rev-Pagination-arrow--hidden';
      } else if (!relevant && hideArrows) {
        return 'rev-Pagination-arrow rev-Pagination-arrow--hidden';
      } else if (samePage) {
        return 'rev-Pagination-arrow rev-Pagination-arrow--disabled';
      } else {
        return 'rev-Pagination-arrow';
      }
    }
  }, {
    key: 'numberLinks',
    value: function numberLinks(start, end) {
      var _this2 = this;

      var baseRange = Array.from(Array(end - start + 1).keys());
      var _props2 = this.props,
          currentPage = _props2.currentPage,
          href = _props2.href,
          currentPageText = _props2.currentPageText,
          anchorAriaLabel = _props2.anchorAriaLabel;


      return baseRange.map(function (e) {
        var page = e + start;

        if (page === currentPage) {
          return _react2.default.createElement(
            'li',
            { key: page, className: 'rev-Pagination-number rev-Pagination-number--selected' },
            _react2.default.createElement(
              'span',
              { className: 'ShowForSR' },
              currentPageText
            ),
            _react2.default.createElement(
              'a',
              null,
              page
            )
          );
        } else {
          return _react2.default.createElement(
            'li',
            { key: page, className: 'rev-Pagination-number' },
            _react2.default.createElement(
              'a',
              {
                href: href(page),
                onClick: _this2.createClickHandler(page),
                'aria-label': anchorAriaLabel(page)
              },
              page
            )
          );
        }
      });
    }
  }, {
    key: 'createClickHandler',
    value: function createClickHandler(pageNumber) {
      var _this3 = this;

      return function (e) {
        e.preventDefault();
        var _props3 = _this3.props,
            currentPage = _props3.currentPage,
            totalPages = _props3.totalPages,
            onPageClick = _props3.onPageClick;

        var samePage = pageNumber === currentPage;
        var invalidPage = pageNumber < 1 || pageNumber > totalPages;

        if (!samePage && !invalidPage) {
          onPageClick(pageNumber);
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _props4 = this.props,
          currentPage = _props4.currentPage,
          firstPageContent = _props4.firstPageContent,
          lastPageContent = _props4.lastPageContent,
          mobilePageListText = _props4.mobilePageListText,
          nextPageContent = _props4.nextPageContent,
          previousPageContent = _props4.previousPageContent,
          href = _props4.href,
          totalPages = _props4.totalPages;

      var _getAttributes = this.getAttributes(),
          beginArrows = _getAttributes.beginArrows,
          endArrows = _getAttributes.endArrows,
          start = _getAttributes.start,
          end = _getAttributes.end;

      var beginArrowsClass = this.getArrowClass(beginArrows, currentPage === 1);
      var endArrowsClass = this.getArrowClass(endArrows, currentPage === totalPages);

      if (totalPages === 1) {
        return null;
      } else {
        return _react2.default.createElement(
          'div',
          { className: (0, _classnames2.default)('rev-PaginationWrapper', this.props.className) },
          _react2.default.createElement(
            'ul',
            {
              className: 'rev-Pagination',
              role: 'navigation',
              'aria-label': 'Pagination'
            },
            _react2.default.createElement(
              'li',
              { className: beginArrowsClass },
              _react2.default.createElement(
                'a',
                { href: href(1), onClick: this.createClickHandler(1) },
                firstPageContent
              )
            ),
            _react2.default.createElement(
              'li',
              { className: beginArrowsClass },
              _react2.default.createElement(
                'a',
                {
                  href: href(currentPage - 1),
                  onClick: this.createClickHandler(currentPage - 1)
                },
                previousPageContent
              )
            ),
            _react2.default.createElement(
              'li',
              { className: (0, _classnames2.default)('rev-Pagination-dots', beginArrows ? '' : 'rev-Pagination-dots--hidden') },
              '...'
            ),
            this.numberLinks(start, end),
            _react2.default.createElement(
              'li',
              { className: (0, _classnames2.default)('rev-Pagination-dots', endArrows ? '' : 'rev-Pagination-dots--hidden') },
              '...'
            ),
            _react2.default.createElement(
              'li',
              { className: endArrowsClass },
              _react2.default.createElement(
                'a',
                {
                  href: href(currentPage + 1),
                  onClick: this.createClickHandler(currentPage + 1)
                },
                nextPageContent
              )
            ),
            _react2.default.createElement(
              'li',
              { className: endArrowsClass },
              _react2.default.createElement(
                'a',
                {
                  href: href(totalPages),
                  onClick: this.createClickHandler(totalPages)
                },
                lastPageContent
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'rev-PaginationWrapper-pageList' },
            _react2.default.createElement(
              'span',
              { className: 'Small' },
              '( ',
              mobilePageListText(currentPage, totalPages),
              ' )'
            )
          )
        );
      }
    }
  }]);

  return Pagination;
}(_react.Component);

Pagination.propTypes = {
  anchorAriaLabel: _propTypes2.default.func,
  className: _propTypes2.default.string,
  currentPage: _propTypes2.default.number.isRequired,
  currentPageText: _propTypes2.default.string,
  firstPageContent: _propTypes2.default.node,
  hideArrows: _propTypes2.default.bool,
  lastPageContent: _propTypes2.default.node,
  maxViewPages: _propTypes2.default.number,
  mobilePageListText: _propTypes2.default.func,
  nextPageContent: _propTypes2.default.node,
  onPageClick: _propTypes2.default.func.isRequired,
  previousPageContent: _propTypes2.default.node,
  href: _propTypes2.default.func,
  showFirstLast: _propTypes2.default.bool,
  totalPages: _propTypes2.default.number.isRequired
};
Pagination.defaultProps = {
  anchorAriaLabel: function anchorAriaLabel(page) {
    return 'Page ' + page;
  },
  currentPageText: "You're on page ",
  firstPageContent: _react2.default.createElement(
    'span',
    null,
    _react2.default.createElement('i', { className: 'icon-angle-double-left' }),
    'First',
    _react2.default.createElement(
      'span',
      { className: 'ShowForSR' },
      ' page'
    )
  ),
  hideArrows: false,
  lastPageContent: _react2.default.createElement(
    'span',
    null,
    'Last',
    _react2.default.createElement(
      'span',
      { className: 'ShowForSR' },
      ' page'
    ),
    _react2.default.createElement('i', { className: 'icon-angle-double-right' })
  ),
  maxViewPages: 5,
  mobilePageListText: function mobilePageListText(currentPage, totalPages) {
    return 'Page ' + currentPage + ' of ' + totalPages;
  },
  nextPageContent: _react2.default.createElement(
    'span',
    null,
    'Next',
    _react2.default.createElement(
      'span',
      { className: 'ShowForSR' },
      ' page'
    ),
    _react2.default.createElement('i', { className: 'icon-angle-right' })
  ),
  previousPageContent: _react2.default.createElement(
    'span',
    null,
    _react2.default.createElement('i', { className: 'icon-angle-left' }),
    'Previous',
    _react2.default.createElement(
      'span',
      { className: 'ShowForSR' },
      ' page'
    )
  ),
  href: function href(page) {
    return '#';
  },
  showFirstLast: true
};
exports.default = Pagination;
//# sourceMappingURL=Pagination.js.map