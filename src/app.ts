import { prettyPrint } from "./prettyPrint";
import { getStocksByAction } from "./getStocksByAction";
import { actions } from "./data";

prettyPrint(getStocksByAction(actions), 'Portfolio');
