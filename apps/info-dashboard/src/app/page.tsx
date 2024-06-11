"use client";
import React from "react";
import * as m from "@/paraglide/messages.js";
import Head from "next/head";
import Badge from "@/components/Badge/Badge";
import MetricsCard from "@/components/MetricsCard/MetricsCard";
import HeadingSection from "@/components/HeadingSection";
import SectionContainer from "@/components/SectionContainer";
import { arrowsArrowDown, arrowsArrowUp } from "@frontline-hq/untitledui-icons";

const metricsData = [
  {
    title: m.metrics_card_1_title(),
    header: "2.000",
    percentage: "100%",
  },
  {
    title: m.metrics_card_2_title(),
    header: "2.000",
    percentage: "0%",
  },
  {
    title: m.metrics_card_3_title(),
    header: "2.000",
    percentage: "-100%",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Lilypad Metrics Dashboard - Monitor the Lilypad Network!</title>
        <meta
          name="description"
          content="Explore the metrics dashboard for the Lilypad network. Gain insights into the decentralized world of compute."
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="/" />
        <meta
          property="og:title"
          content="Node Provider Metrics Dashboard - Monitor the Lilypad Network!"
        />
        <meta
          property="og:description"
          content="Explore the metrics dashboard for the Lilypad network. Gain insights into the decentralized world of compute."
        />
        <meta property="og:url" content="/" />
        <meta property="og:type" content="website" />
      </Head>
      {/* <Helmet encodeSpecialCharacters={true}>
				<script type="application/ld+json">
					{JSON.stringify(jsonLd)}
				</script>
			</Helmet> */}
      <div className=" ">
        <HeadingSection
          className="pt-uui-6xl"
          title={m.metrics_heading_title()}
          subtitle={m.metrics_heading_subtitle()}
        />
        <SectionContainer className="sm:pt-uui-container-padding-desktop mx-auto pt-uui-container-padding-mobile w-full justify-between flex space-x-uui-3xl">
          {metricsData.map((data, index) => {
            const percentage = Number(data.percentage.replace("%", ""));

            return (
              <MetricsCard key={index} title={data.title} header={data.header}>
                {{
                  badge: (
                    <Badge
                      icon={{
                        type: "icon",
                        leading:
                          percentage > 0
                            ? arrowsArrowUp
                            : percentage === 0
                            ? undefined
                            : arrowsArrowDown,
                      }}
                      badgeType="Pill color"
                      color={
                        percentage > 0
                          ? "success"
                          : percentage === 0
                          ? "warning"
                          : "error"
                      }
                      size="md"
                    >
                      {data.percentage}
                    </Badge>
                  ),
                }}
              </MetricsCard>
            );
          })}
        </SectionContainer>
      </div>
    </>
  );
}
