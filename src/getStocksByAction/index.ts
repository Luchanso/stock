import {
  Action,
  ActionTypes,
  AddStockAction,
  RemoveStockAction
} from "../types";

export type StockShareMap = {
  [symbol: string]: number;
};

const initialState: StockShareMap = {};

export const addStock = (state: StockShareMap, { lot }: AddStockAction) => {
  const newState = {
    ...state
  };

  if (state[lot.symbol]) {
    newState[lot.symbol] = newState[lot.symbol] + lot.count;
  } else {
    newState[lot.symbol] = lot.count;
  }

  return newState;
};

export const removeStock = (
  state: StockShareMap,
  action: RemoveStockAction
) => {
  const { lot } = action;
  const newState = {
    ...state
  };

  if (state[lot.symbol]) {
    newState[lot.symbol] = newState[lot.symbol] - lot.count;
  } else {
    throw new Error(
      `Not found stock in history ${JSON.stringify(action, null, 2)}`
    );
  }

  return newState;
};

export const getStocksByAction = (actions: Action[]) =>
  actions.reduce((state, action) => {
    switch (action.type) {
      case ActionTypes.add:
        return addStock(state, action);
      case ActionTypes.remove:
        return removeStock(state, action);
    }

    return state;
  }, initialState);
