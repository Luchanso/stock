import * as finance from "yahoo-finance";
import * as fs from 'fs';
import { actions } from "./data";
import { getStocksByAction } from "./getStocksByAction";
import { prettyPrint } from "./prettyPrint";

prettyPrint(getStocksByAction(actions), "Portfolio");

(async () => {
  const data = await finance.quote({
    symbol: "AAPL",
    modules: [
      "price",
      "summaryDetail",
      "calendarEvents",
      "defaultKeyStatistics",
      "earnings",
      "financialData",
      "recommendationTrend",
      "upgradeDowngradeHistory"
    ] // see the docs for the full list
  })



  // console.log();
  fs.writeFile('./data.json', JSON.stringify(data, null, 2), () => {})
})();
