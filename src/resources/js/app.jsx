import React from "react";
import { render } from "react-dom";
import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import GeneralLayout from "./Layouts/GeneralLayout";

const appName =
    window.document.getElementsByTagName("title")[0]?.innerText || "Laravel";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
        let page = pages[`./Pages/${name}.jsx`]
        // TODO: The design is corrupted when connecting the top page and the event list page.
        page.default.layout = name.startsWith('Main/Index') || name.startsWith('Top/Index') ? undefined : (page => <GeneralLayout children={page} />)
        return page
    },
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
    progress: {
        color: "#4B5563",
    },
});
