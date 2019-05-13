import { actions } from "./data";
import { getStocksByAction, StockShareMap } from "./getStocksByAction";
import { prettyPrint } from "./prettyPrint";
import { getStockInformation } from "./model";
import { Quotes } from "yahoo-finance";
import { getTotalProfit } from "./getTotalProfit";

(async () => {
  const stocks = getStocksByAction(actions);
  prettyPrint(stocks, "Stock list from actions");

  const quotes = await getStockInformation(Object.keys(stocks));
  prettyPrint(quotes, "Quotes information");

  const total = getTotalProfit(stocks, quotes);
  prettyPrint(total, "Total profit");
})();
