"use client";
import React, { useEffect, useState } from "react";
import Table from "@/components/Table/Table";
import FeaturedIcon from "@/components/FeaturedIcon";
import { NextPage } from "next";
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
import { useSearchParams } from "next/navigation";
import HeadingSection from "@/components/HeadingSection";
import SocialIcon from "@/components/SocialIcon";

const Leaderboard: NextPage = () => {
  const ths = [
    "Rank",
    "Wallet ID",
    "Energy Provided (TFLOPS*s)",
    "Reward Points",
    "Share",
  ];

  const [originalTableValues, setOriginalTableValues] = useState(
    Array(200)
      .fill()
      .map((_, i) => ({
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

  // states for loading, error and empty table
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isEmpty, setIsEmpty] = useState(
    tableValues.length === 0 ? true : false
  );

  useEffect(() => {
    if (walletAddress) {
      const filteredTableValues = originalTableValues.filter((item) =>
        item["Wallet ID"].startsWith(walletAddress)
      );
      setTableValues(filteredTableValues);
    } else {
      setTableValues(originalTableValues);
    }
  }, [walletAddress]);

  const normalShareText = encodeURIComponent(
    "I'm running a node on the Lilypad network, check out my rank on the leaderboard!"
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

  return (
    <div className=" ">
      <HeadingSection
        className="pt-uui-6xl"
        title={"Lilypad Leaderboard"}
        subtitle={"Compete and Compare: Showcase Your Node's Performance"}
      />
      <SectionContainer className="sm:pt-uui-container-padding-desktop mx-auto pt-uui-container-padding-mobile">
        {/* Set max height & min height to make table scrollable & minimize layout shifts on state changes */}
        <Table className="max-h-[70vh] min-h-[70vh]">
          {{
            cardHeader: (
              <CardHeader
                className="sticky bg-uui-bg-primary left-0 right-0 top-0 z-10"
                headerTitle="Node Provider Leaderbord"
                subtitle="Enter your wallet address to see where you rank among the top Node providers."
                trailingField={
                  <div className="w-full md:w-[26.188rem] ">
                    <InputField
                      value={walletAddress}
                      onChange={(e) => setWalletAddress(e.target.value)}
                      placeholder="Enter wallet address"
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
                        ? "Loading entries ..."
                        : isError
                        ? "404 Error"
                        : "No entries found"}
                    </span>
                    <span className="text-uui-text-sm font-regular text-uui-text-tertiary-600 text-center">
                      {isLoading
                        ? "This might take a moment!"
                        : isError
                        ? "Something went wrong - try reloading the page!"
                        : "You can either come back later, reload the page or clear your searchbar."}
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
                        <TableLeadText>{{ title: row["Rank"] }}</TableLeadText>
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
                              <TableLeadText>{{ title: value }}</TableLeadText>
                            )}
                          </td>
                        ))}
                    </tr>
                  ))}
                </tbody>
              </>
            ),
            pagination: (
              <div className=" sticky bg-uui-bg-primary left-0 right-0 bottom-0 flex justify-between items-center z-10">
                <button>Left</button>
                <h1>Header</h1>
                <button>Right</button>
              </div>
            ),
          }}
        </Table>
      </SectionContainer>
    </div>
  );
};

export default Leaderboard;
