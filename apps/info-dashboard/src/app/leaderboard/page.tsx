"use client";
import React, { useEffect, useState } from "react";
import Table from "@/components/Table";
import FeaturedIcon from "@/components/FeaturedIcon";
import { NextPage } from "next";
import {
  generalLoading01,
  alertAndFeedbackAlertCircle,
  generalSearchLg,
} from "@frontline-hq/untitledui-icons";
import CardHeader from "@/components/CardHeader";

const Leaderboard: NextPage = () => {
  const ths = [
    "Rank",
    "Wallet ID",
    "Energy Provided (TFLOPS*s)",
    "Reward Points",
  ];

  const [tableValues, setTableValues] = useState(
    Array(10)
      .fill()
      .map((_, i) => ({
        Rank: `#${i + 1}`,
        "Wallet ID": `0x8b01991078a3124a56b15381f76341991780163c`,
        "Energy Provided (TFLOPS*s)": `${1310 / (i * 0.01 + 0.5)}`,
        "Reward Points": `${10991 / (i * 0.01 + 0.5)}`,
        Share: "share",
      }))
  );

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isEmpty, setIsEmpty] = useState(
    tableValues.length === 0 ? true : false
  );

  // Uncomment below to see the empty error state
  // useEffect(() => {
  //   setTableValues([]);
  // }, []);

  return (
    <div className="min-h-screen flex w-full items-center justify-center">
      <div className="w-full bg-primary mx-auto max-w-[76rem] pl-uui-xl">
        <Table>
          {{
            cardHeader: (
              <CardHeader
                className="sticky bg-uui-bg-primary left-0 right-0 top-0    z-10"
                headerTitle="Node Provider Leaderbord"
                subtitle="Enter your wallet address to see where you rank among the top Node providers."
                inputField={
                  <input
                    type="text"
                    placeholder="sasdasdass"
                    className="placeholder:text-red-500"
                  />
                }
              />
            ),
            tableSubstitute:
              isLoading || isError || tableValues.length === 0 ? (
                <div className="w-full h-[25rem] flex items-center flex-col justify-center space-y-uui-lg">
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
                  <tr className="sticky box-border top-0 bg-uui-bg-primary z-20 w-full after:w-full after:absolute after:inset-x-0 after:bottom-0 after:translate-y-1/2 after:border-t-uui-1 after:border-t-uui-border-secondary">
                    {ths.map((header, i) => (
                      <th
                        key={header}
                        className="z-10 overflow-hidden first-of-type:rounded-tl-uui-xl last-of-type:rounded-tr-uui-xl"
                        colSpan={i === ths.length - 1 ? 2 : 1}
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tableValues.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      <td>{row["Rank"]}</td>
                      {Object.entries(row)
                        .slice(1)
                        .map(([key, value], i) => (
                          <td key={i}>
                            {i === Object.entries(row).length - 2 ? (
                              <button>{value}</button>
                            ) : key === "Energy Provided (TFLOPS*s)" ||
                              key === "Reward Points" ? (
                              Number(value).toFixed(0)
                            ) : (
                              value
                            )}
                          </td>
                        ))}
                    </tr>
                  ))}
                </tbody>
              </>
            ),
            pagination: (
              <div className="sticky bg-uui-bg-primary left-0 right-0 bottom-0 flex justify-between items-center z-10">
                <button>Left</button>
                <h1>Header</h1>
                <button>Right</button>
              </div>
            ),
          }}
        </Table>
      </div>
    </div>
  );
};

export default Leaderboard;
