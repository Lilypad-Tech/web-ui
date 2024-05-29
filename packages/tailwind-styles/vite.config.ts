import { defineConfig } from "vite";
import path from "path";
import dts from "vite-plugin-dts";

export const fileName = {
	es: `index.mjs`,
	cjs: `index.cjs`,
	iife: `index.iife.js`,
};

export const formats = Object.keys(fileName) as Array<keyof typeof fileName>;

export default defineConfig({
	build: {
		lib: {
			entry: path.resolve(__dirname, "src/index.ts"),
			name: "index",
			formats,
			fileName: (format) => fileName[format],
		},
	},
	plugins: [dts()],
});
