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
