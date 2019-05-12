import { Action, ActionTypes, Currency } from "../../types";
import { getStocksByAction } from "../index";

test("should return correct stock list", () => {
  const result = {
    AAA: 120,
    BBB: 4
  };
  const defaultActionList: Action[] = [
    {
      type: ActionTypes.add,
      lot: {
        count: 123,
        currency: Currency.usd,
        price: 10.999,
        symbol: "AAA"
      },
      time: new Date(2018).getTime() / 1000
    },
    {
      type: ActionTypes.add,
      lot: {
        count: 3,
        currency: Currency.rub,
        price: 3,
        symbol: "BBB"
      },
      time: new Date(2018).getTime() / 1000
    },
    {
      type: ActionTypes.remove,
      lot: {
        count: 3,
        currency: Currency.usd,
        price: 19,
        symbol: "AAA"
      },
      time: new Date(2019).getTime() / 1000
    },
    {
      type: ActionTypes.fee,
      amount: 10,
      currency: Currency.usd
    },
    {
      type: ActionTypes.add,
      lot: {
        count: 1,
        currency: Currency.rub,
        price: 2,
        symbol: "BBB"
      },
      time: new Date(2019).getTime() / 1000
    }
  ];

  expect(getStocksByAction(defaultActionList)).toStrictEqual(result);
});

test("Should return error when stock history incorrect", () => {
  const incorectActionList: Action[] = [
    {
      type: ActionTypes.remove,
      lot: {
        count: 123,
        currency: Currency.rub,
        price: 1,
        symbol: "AAA"
      },
      time: new Date(2018).getTime() / 1000
    }
  ];

  expect(
    () => { getStocksByAction(incorectActionList) }
  ).toThrowErrorMatchingSnapshot();
});
