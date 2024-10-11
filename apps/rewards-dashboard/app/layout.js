import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Lilypad Community Rewards",
  description: "Lilypad Community Rewards",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
		<Head>
			<title>
				Lilypad Community Rewards
			</title>
			<link rel="icon" href="/LilypadIcon.svg" type="image/svg+xml" />
			<meta
				name="description"
				content="Check out the rewards tables for open-source contributors and Lilypad advocates!"
			/>
			<meta name="robots" content="index, follow" />
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1"
			/>
			<link rel="canonical" href="/" />
			<meta
				property="og:title"
				content="Lilypad Community Rewards"
			/>
			<meta
				property="og:description"
				content="Check out the rewards tables for open-source contributors and Lilypad advocates!"
			/>
			<meta property="og:url" content="/" />
			<meta property="og:type" content="website" />
		</Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
