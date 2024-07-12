import { Inter } from "next/font/google";
import "./globals.css";
import { Metadata } from "next";
import ClientLayout from "./clientLayout";

const INTER = Inter({ subsets: ["latin"] });

// metadata isn't allowed on a client layout
export const metadata: Metadata = {
	title: "Lilypad Network",
	description:
		"Lilypad Network: Experience the Power of Decentralized Computing",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <ClientLayout>{children}</ClientLayout>;
}
