import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const INTER = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Lilypad Network",
	description:
		"Lilypad Network: Experience the Power of Decentralized Computing",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="uui-dark">
			<body className={INTER.className}>{children}</body>
		</html>
	);
}
