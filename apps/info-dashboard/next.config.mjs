import { paraglide } from "@inlang/paraglide-js-adapter-next/plugin";

/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    images: {
        unoptimized: true 
    },
    webpack: (config) => {
        config.resolve.fallback = { fs: false, path: false };
        return config;
    }
};

export default paraglide({
    paraglide: {
        project: "./project.inlang",
        outdir: "./src/paraglide",
    },
    ...nextConfig,
<<<<<<< Updated upstream
});
=======
});
>>>>>>> Stashed changes
