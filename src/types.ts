export enum Currency {
  usd = 'USD',
  rub = 'RUB'
}

export enum ActionTypes {
  add,
  remove,
  fee
}

export type StockShareLot = {
  count: number;
  price: number;
  currency: Currency;
  symbol: string;
};

export type BasicAction = {
  lot: StockShareLot;
  time: number;
  description?: string;
};

export type AddStockAction = {
  type: ActionTypes.add;
} & BasicAction;

export type RemoveStockAction = {
  type: ActionTypes.remove;
} & BasicAction;

export type FeeAction = {
  type: ActionTypes.fee;
  amount: number;
  currency: Currency;
  description?: string;
};

export type Action = AddStockAction | RemoveStockAction | FeeAction;
