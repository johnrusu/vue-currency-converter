const CURRENCY_API_URL =
  "https://v6.exchangerate-api.com/v6/53b3dd5f8fb5f0aa696c6eef/latest/USD";

const LABELS = {
  CONVERT: "Convert",
  FROM: "From",
  TO: "To",
  CONVERTED_AMOUNT: "Converted Amount",
};

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

export {
  CURRENCY_API_URL,
  APP_NAME,
  LABELS,
  ERROR_MESSAGES,
  DEFAULTS_CURRENCY,
};
