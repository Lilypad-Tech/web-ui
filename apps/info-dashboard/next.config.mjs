import { paraglide } from "@inlang/paraglide-js-adapter-next/plugin"
/** @type {import('next').NextConfig} */
const nextConfig = {};

export default paraglide({
	paraglide: {
		project: "./project.inlang",
		outdir: "./src/paraglide"
	},
	...nextConfig
});
