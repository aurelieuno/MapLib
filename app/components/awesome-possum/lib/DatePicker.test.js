'use strict';

var _Calendar = require('./DatePicker/Calendar');

var _Calendar2 = _interopRequireDefault(_Calendar);

var _DatePicker = require('./DatePicker');

var _DatePicker2 = _interopRequireDefault(_DatePicker);

var _Input = require('./Input');

var _Input2 = _interopRequireDefault(_Input);

var _sinon = require('sinon');

var _sinon2 = _interopRequireDefault(_sinon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

describe('DatePicker', function () {
  it('should render without throwing', function () {
    shallow(React.createElement(_DatePicker2.default, null));
  });

  it('should add className to child', function () {
    var testClassName = '__TEST__';

    var input = shallow(React.createElement(_DatePicker2.default, { className: testClassName })).find('.' + testClassName);

    expect(input.exists()).to.equal(true);
  });

  it('should handle external date changes', function () {
    var input = mount(React.createElement(_DatePicker2.default, { defaultValue: '2018-03-12' }));
    input.setProps({ defaultValue: '2018-08-05' });
    input.update();

    expect(input.find(_Input2.default).prop('defaultValue')).to.equal('2018-08-05');
  });

  it('should handle external date changes', function () {
    var spy = _sinon2.default.spy();
    var input = mount(React.createElement(_DatePicker2.default, { defaultValue: '2018-03-12', onChange: spy }));
    input.find('input').simulate('change', { target: { value: '2018-08-05' } });
    input.update();

    expect(input.find(_Input2.default).prop('defaultValue')).to.equal('2018-08-05');
    expect(spy.called).to.equal(true);
  });

  it('should translate clicks on calendar cells into changes', function () {
    var spy = _sinon2.default.spy();
    var input = mount(React.createElement(_DatePicker2.default, { defaultValue: '2018-03-12', isOpen: true, onChange: spy }));
    input.find('.rev-Calendar-body-bodyCell').find('button').first().simulate('click');

    expect(input.find(_Input2.default).prop('defaultValue')).to.equal('2018-02-25');
    expect(spy.called).to.equal(true);
  });

  it('opens the calendar on focus and hides it on blur', function () {
    var focusSpy = _sinon2.default.spy();
    var blurSpy = _sinon2.default.spy();

    var input = mount(React.createElement(_DatePicker2.default, { onBlur: blurSpy, onFocus: focusSpy }));
    input.find('input').simulate('focus');
    input.update();

    expect(input.find(_Calendar2.default).prop('className')).to.contain('rev-Calendar--open');
    expect(focusSpy.called).to.equal(true);
    expect(blurSpy.called).to.equal(false);

    input.find('input').simulate('blur');
    input.update();

    expect(input.find(_Calendar2.default).prop('className')).to.contain('rev-Calendar--closed');
    expect(blurSpy.called).to.equal(true);
  });

  it('keeps the calendar open when you do not have focus, but the mouse is over', function () {
    var input = mount(React.createElement(_DatePicker2.default, null));
    input.find('input').simulate('focus');
    input.find('label').simulate('mouseOver');
    input.find('input').simulate('blur');
    input.update();

    expect(input.find(_Calendar2.default).prop('className')).to.contain('rev-Calendar--open');

    input.find('label').simulate('mouseOut');
    input.update();
    expect(input.find(_Calendar2.default).prop('className')).to.contain('rev-Calendar--closed');
  });

  it('can make items not selectable', function () {
    var spy = _sinon2.default.spy();
    var input = mount(React.createElement(_DatePicker2.default, {
      defaultValue: '2018-03-12',
      isOpen: true,
      onChange: spy,
      isSelectable: function isSelectable(date) {
        return date.day != 1;
      }
    }));

    expect(input.find('.rev-Calendar-body-bodyCell--unselectable').exists()).to.equal(true);

    input.find('.rev-Calendar-body-bodyCell--unselectable').find('button').first().simulate('click');

    expect(input.find(_Input2.default).prop('defaultValue')).to.equal('2018-03-12');
    expect(spy.called).to.equal(false);
  });

  it('handles an array of highlights', function () {
    var input = mount(React.createElement(_DatePicker2.default, { defaultValue: '2018-03-12', highlights: ['2018-03-15'], isOpen: true }));

    expect(input.find('.rev-Calendar-body-bodyCell--highlighted').exists()).to.equal(true);
  });

  it('handles a hash of highlights', function () {
    var input = mount(React.createElement(_DatePicker2.default, { defaultValue: '2018-03-12', highlights: { '2018-03-15': '__TEST__' }, isOpen: true }));

    expect(input.find('.__TEST__').exists()).to.equal(true);
  });

  it('handles a highlight function (that returns a class)', function () {
    var input = mount(React.createElement(_DatePicker2.default, {
      defaultValue: '2018-03-12',
      highlights: function highlights(date) {
        return date.day % 2 == 0 ? '__TEST__' : '';
      },
      isOpen: true
    }));

    expect(input.find('.__TEST__').exists()).to.equal(true);
  });

  it('handles a highlight function (that returns a class)', function () {
    var input = mount(React.createElement(_DatePicker2.default, { defaultValue: '2018-03-12', highlights: function highlights(date) {
        return date.day % 2 == 0;
      }, isOpen: true }));

    expect(input.find('.rev-Calendar-body-bodyCell--highlighted').exists()).to.equal(true);
  });

  it('does overrides', function () {
    var overrideComponent = function overrideComponent() {
      return React.createElement(
        'span',
        null,
        'AVeryUniqueString'
      );
    };
    var input = mount(React.createElement(_DatePicker2.default, { overrides: _defineProperty({}, _DatePicker2.default.Calendar, overrideComponent), isOpen: true }));

    expect(input.text()).to.contain('AVeryUniqueString');
  });
});
//# sourceMappingURL=DatePicker.test.js.map