import { DateTime, Interval } from "luxon";
import { describe, expect, test } from "vitest";
import { getTimeDiff } from "./time";

describe("getTimeDiff", () => {
	test("minutes precision", () => {
		const i1 = DateTime.fromISO("1982-05-25T09:45"),
			i2 = DateTime.fromISO("1983-10-14T10:30:01.001");
		const result = getTimeDiff(i1, i2, [
			"years",
			"months",
			"days",
			"minutes",
		]).toObject();
		expect(result).toMatchInlineSnapshot(`
			{
			  "days": 19,
			  "minutes": 45.01668333333333,
			  "months": 4,
			  "years": 1,
			}
		`);
	});
});
