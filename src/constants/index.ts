const CURRENCY_API_URL =
  "https://v6.exchangerate-api.com/v6/53b3dd5f8fb5f0aa696c6eef/latest/USD";

const LABELS = {
  CONVERT: "Convert",
  FROM: "From",
  TO: "To",
  CONVERTED_AMOUNT: "Converted Amount",
  LOADING: "Loading...",
  NO_ANIMATION: "No Animation Data Found",
  INVALID_JSON: "Invalid JSON Data",
  MISSING_DATA: "No Animation Data Provided",
  FOOTER_TEXT: () =>
    `© ${new Date().getFullYear()} Rusu Ionut. All rights reserved.`,
  TEXT_COPIED: "Text copied to clipboard!",
  COPY_TO_CLIPBOARD: "Copy amount to Clipboard",
};

const DEFAULT_TIMEOUT_COPY_CLIPBOARD = 1000;

const ERROR_MESSAGES = {
  INVALID_AMOUNT: "Please enter a valid amount greater than zero",
  SAME_CURRENCY: "Please select different currencies",
  NO_CURRENCY_DATA: "No currency data available",
  INVALID_CURRENCY: "Invalid currency selected",
};

const APP_NAME = "Currency Converter";

const DEFAULTS_CURRENCY = {
  TO: "EUR",
  FROM: "RON",
  AMOUNT: "100",
};

const CONTACT_URL = "https://www.rusu-ionut.ro/contact";

const ROUTER_LINKS = [
  { path: "/", name: "Home", icon: "fas fa-home" },
  { path: "/about", name: "About", icon: "fas fa-info-circle" },
];

export {
  CURRENCY_API_URL,
  APP_NAME,
  LABELS,
  ERROR_MESSAGES,
  DEFAULTS_CURRENCY,
  CONTACT_URL,
  ROUTER_LINKS,
  DEFAULT_TIMEOUT_COPY_CLIPBOARD,
};
