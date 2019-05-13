import * as finance from "yahoo-finance";

export const memoryDatabase: any = {};

export const setValue = (key: string, value: any) => {
  memoryDatabase[key] = value;
  return value;
}

export const getValue = (key: string): any => {
  return JSON.parse(JSON.stringify(memoryDatabase[key]));
}

export const getStockInformation = async (symbols: string[]) => {
  const data: finance.Quotes = (await finance.quote({
    symbols,
    modules: ['summaryDetail']
  })) as finance.Quotes;

  Object.keys(data).forEach((symbol) => {
    setValue(symbol, data[symbol]);
  });

  return data;
};
