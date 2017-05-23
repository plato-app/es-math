require("papi"); // Init PAPI stubs

const tape = require("tape");
const Random = require("../Random");

tape("rangeInt distribution", (t) => {
	const COUNT = 6;
	const ITERATIONS = 100000;
	const EXPECTED = ITERATIONS / COUNT;
	const THRESHOLD = 540; // Standard deviation, must updated when COUNT or ITERATIONS change

	// Roll a COUNT-sided die ITERATIONS times and record the results
	let r = new Random();
	let values = new Array(COUNT).fill(0);
	for (let i = 0; i < ITERATIONS; ++i) {
		let n = r.rangeInt(0, COUNT - 1);
		values[n]++;
	}

	// Verify that all the distribution of rolls is within expected ranges
	t.plan(COUNT);
	for (let i = 0; i < values.length; ++i) {
		t.ok(Math.abs(values[i] - EXPECTED) < THRESHOLD);
	}
});
