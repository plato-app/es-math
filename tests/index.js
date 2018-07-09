const tape = require("tape");
const math = require("../dist");

tape("TAU", t => {
	t.plan(1);
	t.equal(math.TAU, Math.PI * 2);
});

tape("approximately", t => {
	t.plan(2);
	t.equal(math.approximately(100, 100 - (Number.EPSILON / 2)), true);
	t.equal(math.approximately(100, 100.0001), false);
});

tape("average", t => {
	t.equal(math.average([1, 2, 3, 4, 5]), 3);
	t.equal(math.average([10, 80, 14, 6, 100]), 42);
	t.equal(math.average([8000, 4, 25, 3245, 1501]), 2555);
	t.end();
});

tape("clamp", t => {
	t.plan(3);
	t.equal(math.clamp(25, 50, 100), 50);
	t.equal(math.clamp(125, 50, 100), 100);
	t.equal(math.clamp(75, 50, 100), 75);
});

tape("degreesToRadians", t => {
	t.plan(4);
	t.equal(math.degreesToRadians(45), Math.PI / 4);
	t.equal(math.degreesToRadians(90), Math.PI / 2);
	t.equal(math.degreesToRadians(180), Math.PI);
	t.equal(math.degreesToRadians(270), Math.PI * 1.5);
});

tape("distance", t => {
	t.plan(1);
	t.equal(math.distance(0, 0, 1, 1), Math.sqrt(Math.pow(1, 2) + Math.pow(1, 2)));
});

tape("lerpAngle", t => {
	t.equal(math.lerpAngle(0, Math.PI / 2, 0.5), Math.PI * 0.25);
	t.equal(math.lerpAngle(0, Math.PI, 0.5), -Math.PI / 2);
	t.equal(math.lerpAngle(0, Math.PI * 1.5, 0.5), -Math.PI * 0.25);
	t.end();
});

tape("sign", t => {
	t.plan(3);
	t.equal(math.sign(-100), -1);
	t.equal(math.sign(0), 0);
	t.equal(math.sign(100), 1);
});
