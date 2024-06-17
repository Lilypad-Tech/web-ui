import { ascending, sort } from "d3";
import { DateTime } from "luxon";

type TimeSeriesCount = {
	Year: string;
	Month: string;
	Count: number;
};

type TimeSeriesCountEnriched = TimeSeriesCount & {
	dateTime: DateTime;
	epochMillis: number;
};

export type MetricsEndpointReturnType = {
	TotalJobs: number;
	TotalNodes: number;
	TotalModules: number;
	JobsCompleted: TimeSeriesCount[];
	Nodes: TimeSeriesCount[];
};

export async function fetchMetrics() {
	const API_HOST = process.env.NEXT_PUBLIC_API_HOST;
	const METRICS_URL = `${API_HOST}metrics-dashboard/metrics`;
	const raw = await fetch(METRICS_URL);
	const res = (await raw.json()) as MetricsEndpointReturnType;
	return res;
}

// Takes "August" as month
export function parseUtcYearAndMonth({
	Year,
	Month,
}: {
	Year: string;
	Month: string;
}) {
	return DateTime.fromFormat(`${Month} ${Year}`, "LLLL yyyy", {
		zone: "utc",
	});
}

export function enrichMetricsTimeSeriesData(ts: TimeSeriesCount[]) {
	return ts.map((e) => {
		const dateTime = parseUtcYearAndMonth(e);
		return {
			...e,
			dateTime,
			epochMillis: dateTime.toMillis(),
		};
	}) as TimeSeriesCountEnriched[];
}

export function toChartData(ts: TimeSeriesCount[]) {
	const enrichedTs = enrichMetricsTimeSeriesData(ts);
	const sortedByTime = sort(enrichedTs, (a, b) =>
		ascending(a.epochMillis, b.epochMillis)
	);
	return sortedByTime;
}
