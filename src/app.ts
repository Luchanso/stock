import * as finance from "yahoo-finance";
import { actions } from "./data";
import { getStocksByAction } from "./getStocksByAction";
import { prettyPrint } from "./prettyPrint";

prettyPrint(getStocksByAction(actions), "Portfolio");

finance.quote(
  {
    symbol: "AAPL",
    modules: ["price", "summaryDetail"] // see the docs for the full list
  },
  function(err: any, quotes: any) {
    if (err) {
      console.log(err);
    }

    console.log(quotes);
  }
);

// finance
