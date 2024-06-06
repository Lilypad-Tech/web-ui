import { languageTag } from "@/paraglide/runtime.js";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ReactQueryProvider from "@/components/ReactQueryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Lilypad Network ",
  description:
    "Track your progress and strive for the top spot on the Lilypad Network Leaderboard. ",
};

/* TODO check if the telegram is correct */

const socialLinks = [
  { href: "https://twitter.com/lilypad_tech", iconUrl: "/x.svg" },
  {
    href: "https://discord.gg/zWYTNZqB",
    iconUrl: "/discord.svg",
  },
  {
    href: "https://t.me/lilypadnetwork",
    iconUrl: "/telegram.svg",
  },
  {
    href: "https://github.com/Lilypad-Tech",
    iconUrl: "/github.svg",
  },
  {
    href: "https://www.linkedin.com/company/lilypad-network/",
    iconUrl: "/linkedin.svg",
  },
  {
    href: "https://www.youtube.com/@LilypadNetwork/featured",
    iconUrl: "/youtube.svg",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="uui-dark" lang={languageTag()}>
      <body className={inter.className}>
        <ReactQueryProvider>
          <NavBar />
          {children}
          <Footer
            footerIcon={{
              src: "lilypad-logo.svg",
              alt: "Lilypad logo",
              href: "#top",
            }}
            socialLinks={socialLinks}
          />
        </ReactQueryProvider>
      </body>
    </html>
  );
}
