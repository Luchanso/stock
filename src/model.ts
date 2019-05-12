import * as finance from "yahoo-finance";

const memoryDatabase: any = {};

const setValue = (key: string, value: any) => {
  memoryDatabase[key] = value;
  return value;
}

const getValue = (key: string): any => {
  return JSON.parse(JSON.stringify(memoryDatabase[key]));
}

export const getStockInformation = async (symbols: string[]) => {
  const data: finance.Quotes = (await finance.quote({
    symbols,
    modules: ['price']
  })) as finance.Quotes;

  Object.values((quote) => {

  });
};
