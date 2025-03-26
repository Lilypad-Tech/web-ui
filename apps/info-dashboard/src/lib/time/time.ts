import { DateTime, DurationLikeObject, Interval, _ToObjectUnit } from 'luxon'

export function getTimeDiff(
    start: DateTime,
    end: DateTime,
    units: keyof DurationLikeObject | (keyof DurationLikeObject)[]
) {
    const interval = Interval.fromDateTimes(start, end)
    return interval.toDuration(units)
}
