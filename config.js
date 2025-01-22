export const config = {
  domainSource: "https://f69a71f6-9fd8-443b-a040-78beb5d404d4.weweb-preview.io", // Your WeWeb app preview link
  patterns: [
    {
      pattern: "/p/([^/]+)/([^/]+)", // Matches /p/{var1}/{var2}
      metaDataEndpoint: "https://xjm9-lcbm-rrfq.d7.xano.io/api:01e6Wae5/experiments/{experiments_id}/metadata"
    }
  ]
};
