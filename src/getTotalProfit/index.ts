import { Quotes } from "yahoo-finance";
import { StockShareMap } from "../getStocksByAction";

// TODO: Покрыть тестами
// TODO: Нужно учитывать комиссии, дивиденды и налоги
export const getTotalProfit = (stocks: StockShareMap, quotes: Quotes) =>
  Object.keys(quotes).reduce((total, symbol) => {
    const summaryDetail = quotes[symbol].summaryDetail;

    if (summaryDetail && summaryDetail.bid) {
      return total + summaryDetail.bid * stocks[symbol];
    }

    return total;
  }, 0);
