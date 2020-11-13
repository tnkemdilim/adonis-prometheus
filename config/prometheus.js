"use strict";

module.exports = {
  /*
  |--------------------------------------------------------------------------
  | Expose prometheus metrics via HTTP endpoint.
  |--------------------------------------------------------------------------
  */
  exposeHttpEndpoint: true,

  /*
  |--------------------------------------------------------------------------
  | Endpoint to GET prometheus metrics.
  |--------------------------------------------------------------------------
  */
  endpoint: "/metrics",

  /*
   |--------------------------------------------------------------------------
   | System Metric.
   |--------------------------------------------------------------------------
   | 
   | Collect overall performance metrics of the entire application.
   */
  systemMetrics: {
    enabled: false,
    prefix: "",
  },

  /*
   |--------------------------------------------------------------------------
   | HTTP Metric
   |--------------------------------------------------------------------------
   | 
   | Measures the performance of HTTP request based on status codes returned.
   */
  httpMetric: {
    enabled: true,
    name: "adonis_http_request_durations",
    includeQueryParams: true,
    help: "Total time each HTTP request takes.",
    labelNames: ["method", "url", "statusCode"],
    buckets: [0.003, 0.03, 0.1, 0.3, 1.5, 10],
    prefix: "",
  },

  /*
   |--------------------------------------------------------------------------
   | Uptime
   |--------------------------------------------------------------------------
   | 
   | Track the uptime of the entire application.
   */
  uptimeMetric: {
    enabled: false,
    name: "adonis_uptime_metrics",
    help: "Uptime performance of the application (1 = up, 0 = down)",
    prefix: "",
  },

  /*
   |--------------------------------------------------------------------------
   | Throughput Performance
   |--------------------------------------------------------------------------
   | 
   | Measures throughput for every request received into the application.
   */
  throughputMetric: {
    enabled: false,
    name: "adonis_throughput_metrics",
    help: "No. of request handled.",
    prefix: "",
  },
};
