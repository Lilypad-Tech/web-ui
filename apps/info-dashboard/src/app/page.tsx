"use client";
import React, { useEffect, useState } from "react";
import Table from "@/components/Table/Table";
import FeaturedIcon from "@/components/FeaturedIcon";
import {
  generalLoading01,
  alertAndFeedbackAlertCircle,
  generalSearchLg,
  generalSearchMd,
} from "@frontline-hq/untitledui-icons";
import CardHeader from "@/components/CardHeader";
import InputField from "@/components/InputField/Inputfield";
import SectionContainer from "@/components/SectionContainer";
import TableLeadText from "@/components/Table/TableLeadText";
import TableHeaderCell from "@/components/Table/TableHeaderCell";
import Footer from "@/components/Footer";
import { useSearchParams } from "next/navigation";
import HeadingSection from "@/components/HeadingSection";
import SocialIcon from "@/components/SocialIcon";
import * as m from "@/paraglide/messages.js";
import Head from "next/head";
export default function Home() {
  // TODO add inlang to the values returned from the API after we receive the API
  const ths = [
    "Rank",
    "Wallet ID",
    "Energy Provided (TFLOPS*s)",
    "Reward Points",
    "Share",
  ];

  const [originalTableValues, setOriginalTableValues] = useState(
    Array.from({ length: 150 }, (_, i) => ({
      Rank: `#${i + 1}`,
      "Wallet ID":
        i === 0
          ? `0x8b01991078a3124a36b15381f76341991780163c`
          : `0x8b01991078a3124a56b15381f76341991780163c`,
      "Energy Provided (TFLOPS*s)": `${1310 / (i * 0.01 + 0.5)}`,
      "Reward Points": `${10991 / (i * 0.01 + 0.5)}`,
      Share: "share",
    }))
  );
  // If a wallet address is found within the search params, filter the table values
  const searchParams = useSearchParams();
  const walletParams = searchParams.get("wallet_id");
  const [walletAddress, setWalletAddress] = useState(walletParams ?? undefined);
  const [tableValues, setTableValues] = useState(originalTableValues);

  // Todo update temporary states for loading, error and empty table after receiving the API
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (walletAddress) {
      const filteredTableValues = originalTableValues.filter((item) =>
        item["Wallet ID"].startsWith(walletAddress)
      );
      setTableValues(filteredTableValues);
    } else {
      setTableValues(originalTableValues);
    }
  }, [walletAddress, originalTableValues]);

  const normalShareText = encodeURIComponent(
    m.leaderboard_node_provider_table_share_x_tweet_shareText()
  );

  const [twitterUrl, setTwitterUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const currentUrl = encodeURIComponent(
        window.location.origin + window.location.pathname
      );
      setTwitterUrl(
        `https://twitter.com/intent/tweet?text=${normalShareText}&url=${currentUrl}`
      );
    }
  }, [normalShareText]);
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Leaderboard - Become the Top Node Provider!",
    description:
      "Check out the leaderboard for decentralized compute network node providers. Compare your rank, see your reward points, and aim to be the best!",
    url: "https://leaderboard.lilypad.tech",
    mainEntity: {
      "@type": "ItemList",
      name: "Node Provider Leaderboard",
      description:
        "Ranking of top-performing node providers. Join the competition and climb to the top!",
      numberOfItems: tableValues.length,
      itemListElement: tableValues.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "Organization",
          name: item["Wallet ID"],
          description: `Rank: ${item["Rank"]}, Energy Provided: ${item["Energy Provided (TFLOPS*s)"]} TFLOPS*s, Reward Points: ${item["Reward Points"]} points`,
          identifier: item["Wallet ID"],
        },
      })),
    },
  };
  return (
    <>
      <Head>
        <title>Lilypad Leaderboard - Become the Top Node Provider!</title>
        <meta
          name="description"
          content="Check out the leaderboard for decentralized compute network node providers. Compare your rank, see your reward points, and aim to be the best!"
        />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://yourwebsite.com/leaderboard" />
        <meta
          property="og:title"
          content="Node Provider Leaderboard - Become the Top Node Provider!"
        />
        <meta
          property="og:description"
          content="Check out the leaderboard for decentralized compute network node providers. Compare your rank, see your reward points, and aim to be the best!"
        />
        <meta property="og:url" content="https://yourwebsite.com/leaderboard" />
        <meta property="og:type" content="website" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>
      <div className=" ">
        <HeadingSection
          className="pt-uui-6xl"
          title={m.leaderboard_heading_title()}
          subtitle={m.leaderboard_heading_subtitle()}
        />
        <SectionContainer className="sm:pt-uui-container-padding-desktop mx-auto pt-uui-container-padding-mobile">
          {/* Set max height & min height to make table scrollable & minimize layout shifts on state changes */}
          <Table className="max-h-[70vh] min-h-[70vh]">
            {{
              cardHeader: (
                <CardHeader
                  className="sticky bg-uui-bg-primary left-0 right-0 top-0 z-10"
                  headerTitle={m.leaderboard_node_provider_table_cardHeader_headerTitle()}
                  subtitle={m.leaderboard_node_provider_table_cardHeader_subtitle()}
                  trailingField={
                    <div className="w-full md:w-[26.188rem] ">
                      <InputField
                        value={walletAddress}
                        onChange={(e) => setWalletAddress(e.target.value)}
                        placeholder={m.leaderboard_node_provider_table_inputField_placeholder()}
                        iconUrl={generalSearchMd}
                      />
                    </div>
                  }
                />
              ),
              tableSubstitute:
                isLoading || isError || tableValues.length === 0 ? (
                  <div className="w-full h-[70vh] flex items-center flex-col justify-center space-y-uui-lg">
                    <div className="max-w-uui-width-xxs h-full px-uui-xs md:max-w-uui-width-xs flex flex-col items-center justify-center">
                      <FeaturedIcon
                        spinIcon={isLoading}
                        iconUrl={
                          isLoading
                            ? generalLoading01
                            : isError
                            ? alertAndFeedbackAlertCircle
                            : generalSearchLg
                        }
                      />
                      <span className="mt-uui-md text-uui-text-md font-semibold text-center text-uui-text-primary-900">
                        {isLoading
                          ? m.leaderboard_node_provider_table_loadingState_loadingText()
                          : isError
                          ? m.leaderboard_node_provider_table_errorState_errorText()
                          : m.leaderboard_node_provider_table_emptyState_emptyText()}
                      </span>
                      <span className="text-uui-text-sm font-regular text-uui-text-tertiary-600 text-center">
                        {isLoading
                          ? m.leaderboard_node_provider_table_loadingState_loadingHint()
                          : isError
                          ? m.leaderboard_node_provider_table_errorState_errorHint()
                          : m.leaderboard_node_provider_table_emptyState_emptyHint()}
                      </span>
                    </div>
                  </div>
                ) : null,
              tableRows: (
                <>
                  <thead>
                    {/* Translate -translate-y-[0.063rem] to close the 1px padding gap when sticky */}
                    <tr className="sticky top-0 -translate-y-[0.063rem] bg-uui-bg-secondary z-20 w-full after:w-full after:absolute after:inset-x-0 after:bottom-0 after:translate-y-1/2 after:border-t-uui-1 after:border-t-uui-border-secondary">
                      {ths.map((header, i) => (
                        <th
                          key={header}
                          className=""
                          colSpan={i === ths.length - 1 ? 2 : 1}
                        >
                          <TableHeaderCell>{{ title: header }}</TableHeaderCell>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {tableValues.map((row, rowIndex) => (
                      <tr key={rowIndex}>
                        <td>
                          <TableLeadText>
                            {{ title: row["Rank"] }}
                          </TableLeadText>
                        </td>
                        {Object.entries(row)
                          .slice(1)
                          .map(([key, value], i) => (
                            <td key={i}>
                              {i === Object.entries(row).length - 2 ? (
                                <TableLeadText>
                                  {{
                                    title: (
                                      <a
                                        href={
                                          `${twitterUrl}` +
                                          "?wallet_id=" +
                                          row["Wallet ID"]
                                        }
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        {/* TODO replace with button/social icon component */}
                                        <SocialIcon
                                          className="[&&]:h-uui-xl [&&]:w-uui-xl"
                                          iconUrl="/x.svg"
                                        />
                                      </a>
                                    ),
                                  }}
                                </TableLeadText>
                              ) : key === "Energy Provided (TFLOPS*s)" ||
                                key === "Reward Points" ? (
                                <TableLeadText>
                                  {{ title: Number(value).toFixed(0) }}
                                </TableLeadText>
                              ) : (
                                <TableLeadText>
                                  {{ title: value }}
                                </TableLeadText>
                              )}
                            </td>
                          ))}
                      </tr>
                    ))}
                  </tbody>
                </>
              ),
              // Todo add in pagination after we receive the paginated API
              // pagination: (
              //   <div className=" sticky bg-uui-bg-primary left-0 right-0 bottom-0 flex justify-between items-center z-10">
              //     <button>Left</button>
              //     <h1>Header</h1>
              //     <button>Right</button>
              //   </div>
              // ),
            }}
          </Table>
        </SectionContainer>
      </div>
    </>
  );
}
