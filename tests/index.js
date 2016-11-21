var tape = require("tape");
var math = require("../lib/");

tape("TAU", function (test) {
  test.plan(1);
  test.equal(math.TAU, Math.PI * 2);
});

tape("approximately", function (test) {
  test.plan(2);
  test.equal(math.approximately(Number.EPSILON / 2, 0), true);
  test.equal(math.approximately(0.001, 0.002), false);
});

tape("clamp", function (test) {
  test.plan(3);
  test.equal(math.clamp(50, 0, 100), 50);
  test.equal(math.clamp(-50, 0, 100), 0);
  test.equal(math.clamp(200, 0, 100), 100);
});

tape("lerp", function (test) {
  test.plan(3);
  test.equal(math.lerp(0, 100, 0.5), 50);
  test.equal(math.lerp(0, 100, 0), 0);
  test.equal(math.lerp(0, 100, 1), 100);
});

tape("sign", function (test) {
  test.plan(3);
  test.equal(math.sign(0), 0);
  test.equal(math.sign(-100), -1);
  test.equal(math.sign(100), 1);
});
