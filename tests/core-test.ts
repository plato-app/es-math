import * as tape from "tape";
import {
	TAU,
	approximately,
	average,
	clamp,
	degreesToRadians,
	distance,
	lerpAngle,
	radiansToDegrees,
	sign,
	wrapRadians,
} from "../lib";

tape("TAU", t => {
	t.plan(1);
	t.equal(TAU, Math.PI * 2);
});

tape("approximately", t => {
	t.plan(2);
	t.equal(approximately(100, 100 - (Number.EPSILON / 2)), true);
	t.equal(approximately(100, 100.0001), false);
});

tape("average", t => {
	t.equal(average([1, 2, 3, 4, 5]), 3);
	t.equal(average([10, 80, 14, 6, 100]), 42);
	t.equal(average([8000, 4, 25, 3245, 1501]), 2555);
	t.end();
});

tape("clamp", t => {
	t.plan(3);
	t.equal(clamp(25, 50, 100), 50);
	t.equal(clamp(125, 50, 100), 100);
	t.equal(clamp(75, 50, 100), 75);
});

tape("degreesToRadians", t => {
	t.plan(4);
	t.equal(degreesToRadians(45), Math.PI / 4);
	t.equal(degreesToRadians(90), Math.PI / 2);
	t.equal(degreesToRadians(180), Math.PI);
	t.equal(degreesToRadians(270), Math.PI * 1.5);
});

tape("distance", t => {
	t.plan(1);
	t.equal(distance(0, 0, 1, 1), Math.sqrt(Math.pow(1, 2) + Math.pow(1, 2)));
});

tape("lerpAngle", t => {
	t.equal(lerpAngle(0, Math.PI / 2, 0.5), Math.PI * 0.25);
	t.equal(lerpAngle(0, Math.PI, 0.5), -Math.PI / 2);
	t.equal(lerpAngle(0, Math.PI * 1.5, 0.5), -Math.PI * 0.25);
	t.end();
});

tape("radiansToDegrees", t => {
	t.plan(4);
	t.equal(radiansToDegrees(Math.PI / 4), 45);
	t.equal(radiansToDegrees(Math.PI / 2), 90);
	t.equal(radiansToDegrees(Math.PI), 180);
	t.equal(radiansToDegrees(Math.PI * 1.5), 270);
});

tape("sign", t => {
	t.plan(3);
	t.equal(sign(-100), -1);
	t.equal(sign(0), 0);
	t.equal(sign(100), 1);
});

tape("wrapRadians", t => {
	const quarter = Math.PI / 2;
	t.equal(wrapRadians(-quarter), quarter * 3);
	t.equal(wrapRadians(-Math.PI), Math.PI);
	t.equal(wrapRadians(-quarter * 3), quarter);
	t.ok(approximately(wrapRadians(quarter * 7), quarter * 3, 0.00000000000001));
	t.end();
});
