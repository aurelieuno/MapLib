'use strict';

var _MediaObject = require('./MediaObject');

var _MediaObject2 = _interopRequireDefault(_MediaObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('MediaObject', function () {
  it('should render without throwing', function () {
    shallow(React.createElement(_MediaObject2.default, null));
  });

  it('it handles boolean props', function () {
    var mediaObject = shallow(React.createElement(_MediaObject2.default, { center: true }));

    expect(mediaObject.prop('className')).to.contain('align-center');
  });
});

describe('MediaObjectSection', function () {
  it('should render without throwing', function () {
    shallow(React.createElement(_MediaObject2.default.Section, null));
  });

  it('it handles boolean props', function () {
    var mediaObject = shallow(React.createElement(_MediaObject2.default.Section, { center: true }));

    expect(mediaObject.prop('className')).to.contain('align-self-center');
  });
});
//# sourceMappingURL=MediaObject.test.js.map