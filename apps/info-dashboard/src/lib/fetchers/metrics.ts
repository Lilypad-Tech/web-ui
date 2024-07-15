import { ascending, sort } from "d3";
import { DateTime } from "luxon";
import * as m from "@/paraglide/messages.js";

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

export function addValueChange(
	enrichedTs: TimeSeriesCountEnriched[],
	totalAmount?: number
) {
	return sort(enrichedTs, (a, b) =>
		ascending(a.epochMillis, b.epochMillis)
	).map((val, index, arr) => {
		const change = arr[index].Count / (totalAmount ?? arr[index].Count);
		return { ...val, change };
	});
}

export function toFrontendData(data?: MetricsEndpointReturnType) {
	const withChangeCalculated = {
		nodes: addValueChange(
			enrichMetricsTimeSeriesData(data?.Nodes ?? []),
			data?.TotalNodes
		),
		jobsCompleted: addValueChange(
			enrichMetricsTimeSeriesData(data?.JobsCompleted ?? []),
			data?.TotalJobs
		),
	};

	return {
		nodesScalar: {
			...withChangeCalculated.nodes.slice(-1)[0],
			title: m.metrics_card_2_title(),
		},
		jobsCompletedScalar: {
			...withChangeCalculated.jobsCompleted.slice(-1)[0],
			title: m.metrics_card_1_title(),
		},
		totalHashrateScalar: {
			change: undefined,
			Count: undefined,
			title: m.metrics_card_3_title(),
		},
		Nodes: withChangeCalculated.nodes,
		JobsCompleted: withChangeCalculated.jobsCompleted,
	};
}

// Takes "August" as month
export function parseUtcYearAndMonth({
	Year,
	Month,
}: {
	Year: string;
	Month: string;
}) {
	return DateTime.fromObject(
		{ month: Number(Month), year: Number(Year) },
		{
			zone: "utc",
		}
	);
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
