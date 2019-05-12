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

  export type Quote = any; // TODO: описать тип

  export type Callback = (err: any, quotes: Quote[]) => void;

  export type HttpRequestOptions = any | null; // TODO: описать тип

  export type QuoteOptions =
    | {
        symbol?: string;
        symbols?: string[];
        modules?: Module[];
      }
    | string;

  /**
   *  Get quote information
   *
   * @param options Request stock options
   * @param callback
   */
  function quote(options: QuoteOptions, callback?: Function): Promise<Quote[]>;

  /**
   *  Get quote information
   *
   * @param options Request stock options
   * @param httpRequestOptions Optionally request options (such as a proxy) can be specified by inserting an extra parameter just before the callback
   * @param callback
   */
  function quote(
    options: QuoteOptions,
    httpRequestOptions?: HttpRequestOptions,
    callback?: Function
  ): Promise<Quote[]>;
}
