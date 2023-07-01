import React from "react";
import { render } from "react-dom";
import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import GeneralLayout from "./Layouts/GeneralLayout";
import "../css/app.css";
import "preline";

const appName =
    window.document.getElementsByTagName("title")[0]?.innerText || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => {
        return resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob("./Pages/**/*.jsx")
        ).then((module) => {
            const page = module.default;
            if (page) {
                if (
                    name.startsWith("Main/Index") ||
                    name.startsWith("Top/Index")
                ) {
                    page.layout = null;
                } else {
                    page.layout = (page) => <GeneralLayout children={page} />;
                }
            }
            return page;
        });
    },
    setup: ({ el, App, props }) => {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
    progress: {
        color: "#4B5563",
    },
});
