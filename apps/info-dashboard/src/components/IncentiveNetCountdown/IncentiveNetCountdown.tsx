import { getTimeDiff } from "@/lib/time/time";
import { DateTime } from "luxon";
import { useEffect, useState } from "react";
import * as m from "@/paraglide/messages.js";

const INCENTIVENET_LAUNCH = DateTime.fromISO(
  m.incentivenet_launch_timestamptz()
);

export default function IncentiveNetCountdown() {
  const [durationToIncentivenet, setDurationToIncentivenet] = useState(
    getTimeDiff(DateTime.now(), INCENTIVENET_LAUNCH, [
      "days",
      "hours",
      "minutes",
      "seconds",
    ])
  );
  // Update time to incentivenet every minute
  useEffect(() => {
    const interval = setInterval(() => {
      setDurationToIncentivenet(
        getTimeDiff(DateTime.now(), INCENTIVENET_LAUNCH, [
          "days",
          "hours",
          "minutes",
          "seconds",
        ])
      );
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <span>
      {durationToIncentivenet.toMillis() > 0
        ? m.incentivenet_launch_countdown_before_launch({
            time: durationToIncentivenet.toHuman({
              maximumFractionDigits: 0,
              unitDisplay: "narrow",
            }),
          })
        : durationToIncentivenet.days > -1
        ? m.incentivenet_launch_countdown_at_launch()
        : m.incentivenet_launch_countdown_after_launch({
            time: INCENTIVENET_LAUNCH.toLocaleString(),
          })}
    </span>
  );
}
