import { Method, Option, RequestApiOptions } from "./types";
import {
  createEndpoint,
  getBody,
  getContentType,
  resolveRequestOptions,
} from "./utils";

const defaultRequestApiOptions: RequestApiOptions = {
  contentType: "json",
  path: "",
  withAppAuth: true,
  responseContentType: "json",
};

export async function request<Res = unknown, Req = unknown>(
  endpoint: string,
  method: Method,
  requestBody?: Req,
  requestOptions?: RequestApiOptions,
) {
  let opts = { ...defaultRequestApiOptions, ...requestOptions };
  const contentType = getContentType(opts?.contentType);
  let headers: HeadersInit = {};

  if (contentType) {
    headers["Content-Type"] = contentType;
  }

  if (opts.bearerToken && typeof opts.bearerToken === "string") {
    headers["Authorization"] = `Bearer ${opts.bearerToken}`;
  }

  if (opts.headers) {
    headers = {
      ...headers,
      ...opts.headers,
    };
  }

  const res: Response = await fetch(endpoint, {
    method,
    headers,
    ...(opts?.signal && { signal: opts.signal }),
    body: getBody(method, opts.contentType, requestBody) as RequestInit["body"],
  });

  let result;

  switch (opts.responseContentType) {
    case "json":
      result = await res.json();
      break;
    case "text":
      result = await res.text();
      break;
    case "blob":
      result = await res.blob();
      break;
    default:
      result = await res.json();
      break;
  }

  if (!res.ok) {
    throw (await res.json()) as Res;
  }

  return result as Res;
}

export const createRequest = async <Res, Req>(
  endpoint: string,
  method: Method,
  body?: Req,
  requestOpts?: Option,
  initialOpts?: Option,
) => {
  const initialOptions = await resolveRequestOptions(initialOpts);
  const requestOptions = await resolveRequestOptions(requestOpts);

  const ep = createEndpoint(
    endpoint,
    requestOptions?.path || initialOptions?.path || "",
    {
      ...initialOptions?.metaParams,
      ...initialOptions?.params,
      ...requestOptions?.metaParams,
      ...requestOptions?.params,
    },
  );

  const opts = { ...initialOptions, ...requestOptions };

  return request<Res, Req>(ep, method, body, opts);
};
