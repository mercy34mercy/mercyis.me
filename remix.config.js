/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  server: "./server.js",
  devServerBroadcastDelay: 1000,
  ignoredRouteFiles: ["**/.*"],
  future: {
    // eslint-disable-next-line camelcase
    v2_routeConvention: true,
  },
  publicPath: "/build/",
  serverBuildPath: "build/index.js",
  serverConditions: ["worker"],
  serverMainFields: ["browser", "module", "main"],
  serverModuleFormat: "esm",
  serverPlatform: "neutral",
  serverDependenciesToBundle: "all",
  serverMinify: true,
};
