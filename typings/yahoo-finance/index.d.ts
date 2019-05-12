// TODO: описать snapshot и historical
declare module "yahoo-finance" {
  export type Module =
    | "price"
    | "summaryDetail"
    | "recommendationTrend"
    | "earnings"
    | "calendarEvents"
    | "upgradeDowngradeHistory"
    | "defaultKeyStatistics"
    | "financialData";

  export type QuarterOfYear = "1Q2018" | "2Q2018" | "3Q2018" | "4Q2018";

  export type Quarter = '1Q' | '2Q' | '3Q' | '4Q';

  export type FinancialsChartItem<D> = {
    date?: D;
    revenue?: number;
    earnings?: number;
  };

  export type EarningsChart = {
    quarterly?: FinancialsChartItem<QuarterOfYear>[];
    currentQuarterEstimate?: number;
    currentQuarterEstimateDate?: Quarter;
    currentQuarterEstimateYear?: number;
    earningsDate?: number[];
  };

  export type FinancialsChart = {
    yearly?: FinancialsChartItem<number>[];
    quarterly?: FinancialsChartItem<QuarterOfYear>[];
  };

  export type Earnings = {
    maxAge?: number;
    earningsChart?: EarningsChart;
    financialsChart?: FinancialsChart;
    financialCurrency?: string;
  };

  export type Trend = {
    period?: string;
    strongBuy?: number;
    buy?: number;
    hold?: number;
    sell?: number;
    strongSell?: number;
  };

  export type RecommendationTrend = {
    trend?: Trend[];
    maxAge?: number;
  };

  export type SummaryDetail = {
    maxAge?: number;
    priceHint?: number;
    previousClose?: number;
    open?: number;
    dayLow?: number;
    dayHigh?: number;
    regularMarketPreviousClose?: number;
    regularMarketOpen?: number;
    regularMarketDayLow?: number;
    regularMarketDayHigh?: number;
    dividendRate?: number;
    dividendYield?: number;
    exDividendDate?: Date;
    payoutRatio?: number;
    fiveYearAvgDividendYield?: number;
    beta?: number;
    trailingPE?: number;
    forwardPE?: number;
    volume?: number;
    regularMarketVolume?: number;
    averageVolume?: number;
    averageVolume10days?: number;
    averageDailyVolume10Day?: number;
    bid?: number;
    ask?: number;
    bidSize?: number;
    askSize?: number;
    marketCap?: number;
    fiftyTwoWeekLow?: number;
    fiftyTwoWeekHigh?: number;
    priceToSalesTrailing12Months?: number;
    fiftyDayAverage?: number;
    twoHundredDayAverage?: number;
    trailingAnnualDividendRate?: number;
    trailingAnnualDividendYield?: number;
    currency?: string;
    fromCurrency?: any;
    lastMarket?: any;
    algorithm?: any;
    tradeable?: boolean;
  };

  export type Quote = {
    price?: any; // TODO: описать тип
    summaryDetail?: SummaryDetail;
    recommendationTrend?: RecommendationTrend;
    earnings?: Earnings;
    calendarEvents?: any; // TODO: описать тип
    upgradeDowngradeHistory?: any; // TODO: описать тип
    defaultKeyStatistics?: any; // TODO: описать тип
    financialData?: any; // TODO: описать тип
  };

  export type Quotes = {
    [key: string]: Quote;
  };

  export type Callback = (err: any, quotes: Quotes | Quote) => void;

  export type HttpRequestOptions = any | null; // TODO: описать тип

  export type QuoteOptions<S extends string, SS extends string[]> =
    | {
        symbol?: S;
        symbols?: S[];
        modules?: Module[];
      }
    | string;

  /**
   *  Get quote information
   *
   * @param options Request stock options
   * @param callback
   */
  function quote<S extends string, SS extends string[]>(
    options: QuoteOptions<S, SS>,
    callback?: Callback
  ): Promise<Quotes | Quote>;

  /**
   *  Get quote information
   *
   * @param options Request stock options
   * @param httpRequestOptions Optionally request options (such as a proxy) can be specified by inserting an extra parameter just before the callback
   * @param callback
   */
  function quote<S extends string, SS extends string[]>(
    options: QuoteOptions<S, SS>,
    httpRequestOptions?: HttpRequestOptions,
    callback?: Callback
  ): Promise<Quote[]>;
}
