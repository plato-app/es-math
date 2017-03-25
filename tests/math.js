var tape = require("tape");
var math = require("../index");

tape("TAU", (t) => {
	t.plan(1);
	t.equal(math.TAU, Math.PI * 2);
});

tape("approximately", (t) => {
	t.plan(2);
	t.equal(math.approximately(100, 100 - (Number.EPSILON / 2)), true);
	t.equal(math.approximately(100, 100.0001), false);
});

tape("clamp", (t) => {
	t.plan(3);
	t.equal(math.clamp(25, 50, 100), 50);
	t.equal(math.clamp(125, 50, 100), 100);
	t.equal(math.clamp(75, 50, 100), 75);
});

tape("sign", (t) => {
	t.plan(3);
	t.equal(math.sign(-100), -1);
	t.equal(math.sign(0), 0);
	t.equal(math.sign(100), 1);
});
