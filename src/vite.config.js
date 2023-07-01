import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
    server: {
        host: true,
        hmr: {
            host: "localhost",
        },
    },
    plugins: [
        laravel({
            input: ["resources/js/app.jsx"],
            refresh: true,
        }),
        react(),
    ],
    build: {
        outDir: "public/build",
        manifest: true,
        rollupOptions: {
            input: ["resources/js/app.jsx", "resources/css/app.css"],
        },
    },
});
