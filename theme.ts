import { buildLegacyTheme } from "sanity";

const props = {
    "--my-white" : "#fff",
    "--my-black" : "#1a1a1a",
    "--thuta-brand" : "#2C6269",
    "--my-red" : "#db4437",
    "--my-yellow" : "#f4b400",
    "--my-green" : "#0f9d68"
}

export const myTheme = buildLegacyTheme({
    "--gray-base" : "#666",

    "--component-bg" : props["--my-black"],
    "--component-text-color" : props["--my-white"],

    // brand
    "--brand-primary" : props["--thuta-brand"],

    // Default Button
    "--default-button-color" : '#666',
    "--default-button-primary-color" : props["--thuta-brand"],
    "--default-button-success-color" : props["--my-green"],
    "--default-button-warning-color" : props["--my-yellow"],
    "--default-button-danger-color" : props["--my-red"],

    // State
    "--state-info-color" : props["--thuta-brand"],
    "--state-success-color" : props["--my-green"],
    "--state-warning-color" : props["--my-yellow"],
    "--state-danger-color" : props["--my-red"],

    // Navbar
    "--main-navigation-color" : props["--my-black"],
    "--main-navigation-color--inverted" : props["--my-white"],

    "--focus-color" : props["--thuta-brand"]
});