import type { DataFunctionArgs as RemixDataFunctionArgs, Session } from "@remix-run/cloudflare";

export interface AppLoadContext {
  env: Env;
  session: Session;
}

export interface DataFunctionArgs extends Omit<RemixDataFunctionArgs, "context"> {
  context: AppLoadContext;
}

export interface ActionFunction {
  // eslint-disable-next-line no-unused-vars
  (args: DataFunctionArgs): null | Response | Promise<Response>;
}

export interface LoaderFunction {
  // eslint-disable-next-line no-unused-vars
  (args: DataFunctionArgs): null | Response | Promise<Response>;
}
