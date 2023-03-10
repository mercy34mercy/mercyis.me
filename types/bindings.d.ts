export {};

// cloudflare/workers-types
// https://github.com/cloudflare/workers-types#using-bindings
declare global {
  const API_FETCH_KV: KVNamespace;
}

global {
  // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
  const env: any;
}
