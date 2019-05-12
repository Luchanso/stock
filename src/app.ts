import { actions } from "./data";
import { getStocksByAction } from "./getStocksByAction";
import { prettyPrint } from "./prettyPrint";
import { getStockInformation } from "./model";

prettyPrint(getStocksByAction(actions), "Portfolio");

(async () => {
  getStockInformation(['AAPL', 'T']);
})();
