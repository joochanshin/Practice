function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cat = function Cat() {
  _classCallCheck(this, Cat);

  this.name = 'Tom';
  this.state = {
    running: true
  };

  console.log(this.name, this.state.running);
};

new Cat(); // => Tom true

var _this = this;

var fetchData = function fetchData() {
  return regeneratorRuntime.async(function fetchData$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          return _context.abrupt("return", fetch('https://randomuser.me/api/'));

        case 1:
        case "end":
          return _context.stop();
      }
    }
  }, null, _this);
};

var printData = function printData() {
  var json;
  return regeneratorRuntime.async(function printData$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(fetchData());

        case 3:
          json = _context2.sent;

          console.log(json);
          _context2.next = 10;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);

          console.error("Problem", _context2.t0);

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, null, _this, [[0, 7]]);
};