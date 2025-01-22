export const config = {
  domainSource: "https://0b9d0bbe-4407-47de-9831-6e2902a99c26.weweb-preview.io", // Your WeWeb app preview link
  patterns: [
    {
      pattern: "/p/([^/]+)/([^/]+)", // Matches /p/{var1}/{var2}
      metaDataEndpoint: "https://xjm9-lcbm-rrfq.d7.xano.io/api:01e6Wae5/experiments/{experiments_id}/metadata"
    }
  ]
};
