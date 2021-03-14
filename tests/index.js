const tape = require("tape");
const math = require("../dist/cjs");

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

tape("radiansToDegrees", t => {
	t.plan(4);
	t.equal(math.radiansToDegrees(Math.PI / 4), 45);
	t.equal(math.radiansToDegrees(Math.PI / 2), 90);
	t.equal(math.radiansToDegrees(Math.PI), 180);
	t.equal(math.radiansToDegrees(Math.PI * 1.5), 270);
});

tape("sign", t => {
	t.plan(3);
	t.equal(math.sign(-100), -1);
	t.equal(math.sign(0), 0);
	t.equal(math.sign(100), 1);
});

tape("wrapRadians", t => {
	const quarter = Math.PI / 2;
	t.equal(math.wrapRadians(-quarter), quarter * 3);
	t.equal(math.wrapRadians(-Math.PI), Math.PI);
	t.equal(math.wrapRadians(-quarter * 3), quarter);
	t.ok(math.approximately(math.wrapRadians(quarter * 7), quarter * 3, 0.00000000000001));
	t.end();
});

tape("Rectangle", (t) => {
	const rect = new math.Rectangle(10, 20, 30, 40);
	t.equal(rect.x, 10);
	t.equal(rect.y, 20);
	t.equal(rect.width, 30);
	t.equal(rect.height, 40);
	t.equal(rect.right, 40);
	t.equal(rect.bottom, 60);
	t.end();
});

tape("Rectangle.fit", (t) => {
	const rect = new math.Rectangle(10, 10, 100, 100);
	rect.fit({ x: 20, y: 20, width: 60, height: 60 });
	t.equal(rect.x, 20);
	t.equal(rect.y, 20);
	t.equal(rect.width, 60);
	t.equal(rect.height, 60);
	t.equal(rect.right, 80);
	t.equal(rect.bottom, 80);
	t.end();
});
