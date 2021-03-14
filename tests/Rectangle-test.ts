import * as tape from "tape";
import { Rectangle } from "../lib";

tape("Rectangle", (t) => {
	const rect = new Rectangle(10, 20, 30, 40);
	t.equal(rect.x, 10);
	t.equal(rect.y, 20);
	t.equal(rect.width, 30);
	t.equal(rect.height, 40);
	t.equal(rect.right, 40);
	t.equal(rect.bottom, 60);
	t.end();
});

tape("Rectangle.fit", (t) => {
	const rect = new Rectangle(10, 10, 100, 100);
	rect.fit({ x: 20, y: 20, width: 60, height: 60 });
	t.equal(rect.x, 20);
	t.equal(rect.y, 20);
	t.equal(rect.width, 60);
	t.equal(rect.height, 60);
	t.equal(rect.right, 80);
	t.equal(rect.bottom, 80);
	t.end();
});
