export type RequestContract =
  | {
      body?: BodyInit | null;
      headers?: HeadersInit;
      method?: string;
      url: string;
    }
  | Request;

export type ResponseContract = {
  body: ReadableStream<Uint8Array> | null;
  headers: [string, string][];
  status: number;
  statusText: string;
};
