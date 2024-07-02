import type { Config } from "tailwindcss";
import { preset } from "@lilypad/uui-tailwind-styles/js";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
		// add shared-component styles
		"../../packages/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {},
	plugins: [],
	presets: [preset],
};
export default config;
