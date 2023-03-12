declare module "__STATIC_CONTENT_MANIFEST" {
  const manifestJSON: string;
  export default manifestJSON;
}

interface Env {
  X_MICROCMS_API_KEY: string;
  MICROCMS_BASE_URL: string;
  __STATIC_CONTENT: KVNamespace;
  API_FETCH_KV: KVNamespace;
  DB: D1Database;
}
