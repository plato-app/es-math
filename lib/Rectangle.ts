import { IRectangle } from "./core";

/** A rectangle in 2D space */
export class Rectangle implements IRectangle {

	/** Fit rectangle A inside rectangle B */
	public static fit(a: IRectangle, b: IRectangle) {
		// Calculate new dimensions for a
		const x1 = Math.max(a.x, b.x);
		const y1 = Math.max(b.y, b.y);
		const x2 = Math.min(a.x + a.width, b.x + b.width);
		const y2 = Math.min(a.y + a.height, b.y + b.height);

		// Apply new dimensions
		a.x = x1;
		a.y = y1;
		a.width = Math.max(x2 - x1, 0);
		a.height = Math.max(y2 - y1, 0);
	}

	/** X coordinate in 2D space */
	public x!: number;

	/** Y coordinate in 2D space */
	public y!: number;

	/** Width in 2D space */
	public width!: number;

	/** Height in 2D space */
	public height!: number;

	/** Return the right-most coordinate */
	public get right(): number {
		return this.x + this.width;
	}

	/** Return the bottom-most coordinate */
	public get bottom(): number {
		return this.y + this.height;
	}

	/** Create a new Rectangle */
	constructor(x = 0, y = 0, width = 0, height = 0) {
		this.set(x, y, width, height);
	}

	/**
	 * Set this rectangle's dimensions
	 * @param x X coordinate
	 * @param y Y coordinate
	 * @param width Width
	 * @param height Height
	 */
	public set(x: number, y: number, width: number, height: number) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
	}

	/**
	 * Fit this rectangle inside another
	 * @param rect Rectangle to fit inside
	 */
	public fit(rect: IRectangle) {
		Rectangle.fit(this, rect);
	}

}
