'use strict';

var _Radio = require('./Radio');

var _Radio2 = _interopRequireDefault(_Radio);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Radio', function () {
  it('should render without throwing', function () {
    shallow(React.createElement(_Radio2.default, null));
  });

  it('should add className to child', function () {
    var testClassName = '__TEST__';

    var childClassName = shallow(React.createElement(_Radio2.default, { className: testClassName })).first().prop('className');

    expect(childClassName).to.contain(testClassName);
  });
});

describe('Radio.Fieldset', function () {
  var options = [{ label: 'Left', value: 'L' }, { label: 'Right', value: 'R' }];

  it('should render without throwing', function () {
    shallow(React.createElement(_Radio2.default.Fieldset, { options: options }));
  });

  it('should add className to child', function () {
    var testClassName = '__TEST__';

    var childClassName = shallow(React.createElement(_Radio2.default.Fieldset, { className: testClassName, options: options })).first().prop('className');

    expect(childClassName).to.contain(testClassName);
  });

  it('can handle the controlled case', function () {
    var radioFieldset = shallow(React.createElement(_Radio2.default.Fieldset, { value: 'L', options: options }));

    expect(radioFieldset.children().first().prop('checked')).to.eq(true);
  });

  it('can handle default values', function () {
    var radioFieldset = shallow(React.createElement(_Radio2.default.Fieldset, { defaultValue: 'L', options: options }));

    expect(radioFieldset.children().first().prop('defaultChecked')).to.eq(true);
  });

  it('should respect option values even when there is no value or defaultValue', function () {
    var value = 'OPTION_TEST_VALUE';
    var testOptions = [{ value: value }];
    var radioFieldset = mount(React.createElement(_Radio2.default.Fieldset, { options: testOptions }));
    expect(radioFieldset.find('input').prop('value')).to.eq(value);
  });
});
//# sourceMappingURL=Radio.test.js.map