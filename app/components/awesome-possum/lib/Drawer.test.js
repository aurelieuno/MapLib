'use strict';

var _Drawer = require('./Drawer');

var _Drawer2 = _interopRequireDefault(_Drawer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Drawer', function () {
  it('should render', function () {
    shallow(React.createElement(_Drawer2.default, null));
  });

  it('can handle boolean props', function () {
    var expander = shallow(React.createElement(_Drawer2.default, { left: true })).find(_Drawer.Expander);

    expect(expander.prop('className')).to.contain('rev-Drawer--left');
  });

  it('can expand and collapse', function () {
    var drawer = mount(React.createElement(_Drawer2.default, { left: true }));
    var expander = drawer.find(_Drawer.Expander);
    var closer = expander.find('.rev-Drawer-closer');
    closer.simulate('click');

    expect(expander.find('.rev-Drawer').prop('className')).to.not.contain('rev-Drawer--open');

    expander.find('.rev-Drawer-expander').simulate('click');
    drawer.update();

    expect(drawer.find('.rev-Drawer').prop('className')).to.contain('rev-Drawer--open');
  });

  it('should add className to child', function () {
    var testClassName = '__TEST__';

    var input = shallow(React.createElement(_Drawer2.default, { className: testClassName })).find('.' + testClassName);

    expect(input.exists()).to.equal(true);
  });
});
//# sourceMappingURL=Drawer.test.js.map