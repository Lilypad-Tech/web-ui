import { describe, expect, test } from "vitest";
import {
	parseUtcYearAndMonth,
	enrichMetricsTimeSeriesData,
	toChartData,
} from "./metrics";

const TEST_DATA = {
	TotalJobs: 2000,
	TotalNodes: 10000,
	TotalModules: 17,
	JobsCompleted: [
		{ Year: "2024", Month: "January", Count: 300 },
		{ Year: "2024", Month: "February", Count: 450 },
		{ Year: "2024", Month: "March", Count: 441 },
		{ Year: "2024", Month: "April", Count: 410 },
		{ Year: "2024", Month: "May", Count: 530 },
		{ Year: "2024", Month: "June", Count: 612 },
		{ Year: "2024", Month: "July", Count: 714 },
		{ Year: "2024", Month: "August", Count: 765 },
		{ Year: "2024", Month: "September", Count: 701 },
		{ Year: "2024", Month: "October", Count: 890 },
		{ Year: "2024", Month: "November", Count: 866 },
		{ Year: "2024", Month: "December", Count: 944 },
	],
	Nodes: [
		{ Year: "2024", Month: "January", Count: 244 },
		{ Year: "2024", Month: "February", Count: 333 },
		{ Year: "2024", Month: "March", Count: 476 },
		{ Year: "2024", Month: "April", Count: 434 },
		{ Year: "2024", Month: "May", Count: 531 },
		{ Year: "2024", Month: "June", Count: 621 },
		{ Year: "2024", Month: "July", Count: 741 },
		{ Year: "2024", Month: "August", Count: 765 },
		{ Year: "2024", Month: "September", Count: 771 },
		{ Year: "2024", Month: "October", Count: 801 },
		{ Year: "2024", Month: "November", Count: 826 },
		{ Year: "2024", Month: "December", Count: 924 },
	],
};

describe("parseUtcYearAndMonth", () => {
	test("sample 01", () => {
		const result = TEST_DATA.Nodes.map((td) => parseUtcYearAndMonth(td));
		expect(result).toMatchInlineSnapshot(`
			[
			  "2024-01-01T00:00:00.000Z",
			  "2024-02-01T00:00:00.000Z",
			  "2024-03-01T00:00:00.000Z",
			  "2024-04-01T00:00:00.000Z",
			  "2024-05-01T00:00:00.000Z",
			  "2024-06-01T00:00:00.000Z",
			  "2024-07-01T00:00:00.000Z",
			  "2024-08-01T00:00:00.000Z",
			  "2024-09-01T00:00:00.000Z",
			  "2024-10-01T00:00:00.000Z",
			  "2024-11-01T00:00:00.000Z",
			  "2024-12-01T00:00:00.000Z",
			]
		`);
	});
});

describe("enrichMetricsTimeSeriesData", () => {
	test("sample 01", () => {
		const result = enrichMetricsTimeSeriesData(TEST_DATA.Nodes);
		expect(result).toMatchInlineSnapshot(`
			[
			  {
			    "Count": 244,
			    "Month": "January",
			    "Year": "2024",
			    "dateTime": "2024-01-01T00:00:00.000Z",
			    "epochMillis": 1704067200000,
			  },
			  {
			    "Count": 333,
			    "Month": "February",
			    "Year": "2024",
			    "dateTime": "2024-02-01T00:00:00.000Z",
			    "epochMillis": 1706745600000,
			  },
			  {
			    "Count": 476,
			    "Month": "March",
			    "Year": "2024",
			    "dateTime": "2024-03-01T00:00:00.000Z",
			    "epochMillis": 1709251200000,
			  },
			  {
			    "Count": 434,
			    "Month": "April",
			    "Year": "2024",
			    "dateTime": "2024-04-01T00:00:00.000Z",
			    "epochMillis": 1711929600000,
			  },
			  {
			    "Count": 531,
			    "Month": "May",
			    "Year": "2024",
			    "dateTime": "2024-05-01T00:00:00.000Z",
			    "epochMillis": 1714521600000,
			  },
			  {
			    "Count": 621,
			    "Month": "June",
			    "Year": "2024",
			    "dateTime": "2024-06-01T00:00:00.000Z",
			    "epochMillis": 1717200000000,
			  },
			  {
			    "Count": 741,
			    "Month": "July",
			    "Year": "2024",
			    "dateTime": "2024-07-01T00:00:00.000Z",
			    "epochMillis": 1719792000000,
			  },
			  {
			    "Count": 765,
			    "Month": "August",
			    "Year": "2024",
			    "dateTime": "2024-08-01T00:00:00.000Z",
			    "epochMillis": 1722470400000,
			  },
			  {
			    "Count": 771,
			    "Month": "September",
			    "Year": "2024",
			    "dateTime": "2024-09-01T00:00:00.000Z",
			    "epochMillis": 1725148800000,
			  },
			  {
			    "Count": 801,
			    "Month": "October",
			    "Year": "2024",
			    "dateTime": "2024-10-01T00:00:00.000Z",
			    "epochMillis": 1727740800000,
			  },
			  {
			    "Count": 826,
			    "Month": "November",
			    "Year": "2024",
			    "dateTime": "2024-11-01T00:00:00.000Z",
			    "epochMillis": 1730419200000,
			  },
			  {
			    "Count": 924,
			    "Month": "December",
			    "Year": "2024",
			    "dateTime": "2024-12-01T00:00:00.000Z",
			    "epochMillis": 1733011200000,
			  },
			]
		`);
	});
});

describe("toChartData", () => {
	test("empty array", () => {
		expect(toChartData([])).toEqual([]);
	});
	test("sample 01", () => {
		const result = toChartData(TEST_DATA.Nodes);
		expect(result).toMatchInlineSnapshot(`
			[
			  {
			    "Count": 244,
			    "Month": "January",
			    "Year": "2024",
			    "dateTime": "2024-01-01T00:00:00.000Z",
			    "epochMillis": 1704067200000,
			  },
			  {
			    "Count": 333,
			    "Month": "February",
			    "Year": "2024",
			    "dateTime": "2024-02-01T00:00:00.000Z",
			    "epochMillis": 1706745600000,
			  },
			  {
			    "Count": 476,
			    "Month": "March",
			    "Year": "2024",
			    "dateTime": "2024-03-01T00:00:00.000Z",
			    "epochMillis": 1709251200000,
			  },
			  {
			    "Count": 434,
			    "Month": "April",
			    "Year": "2024",
			    "dateTime": "2024-04-01T00:00:00.000Z",
			    "epochMillis": 1711929600000,
			  },
			  {
			    "Count": 531,
			    "Month": "May",
			    "Year": "2024",
			    "dateTime": "2024-05-01T00:00:00.000Z",
			    "epochMillis": 1714521600000,
			  },
			  {
			    "Count": 621,
			    "Month": "June",
			    "Year": "2024",
			    "dateTime": "2024-06-01T00:00:00.000Z",
			    "epochMillis": 1717200000000,
			  },
			  {
			    "Count": 741,
			    "Month": "July",
			    "Year": "2024",
			    "dateTime": "2024-07-01T00:00:00.000Z",
			    "epochMillis": 1719792000000,
			  },
			  {
			    "Count": 765,
			    "Month": "August",
			    "Year": "2024",
			    "dateTime": "2024-08-01T00:00:00.000Z",
			    "epochMillis": 1722470400000,
			  },
			  {
			    "Count": 771,
			    "Month": "September",
			    "Year": "2024",
			    "dateTime": "2024-09-01T00:00:00.000Z",
			    "epochMillis": 1725148800000,
			  },
			  {
			    "Count": 801,
			    "Month": "October",
			    "Year": "2024",
			    "dateTime": "2024-10-01T00:00:00.000Z",
			    "epochMillis": 1727740800000,
			  },
			  {
			    "Count": 826,
			    "Month": "November",
			    "Year": "2024",
			    "dateTime": "2024-11-01T00:00:00.000Z",
			    "epochMillis": 1730419200000,
			  },
			  {
			    "Count": 924,
			    "Month": "December",
			    "Year": "2024",
			    "dateTime": "2024-12-01T00:00:00.000Z",
			    "epochMillis": 1733011200000,
			  },
			]
		`);
	});
});
