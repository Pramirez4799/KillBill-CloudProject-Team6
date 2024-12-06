const autocannon = require("autocannon");

const test = autocannon(
  {
    //local
    url: "http://admin:password@127.0.0.1:8080/1.0/kb/accounts/3d396e31-78b1-4ce3-9875-0c436265606a",
    //azure
    // url: "http://admin:password@104.43.200.88:8080/1.0/kb/accounts/84918e8a-97f3-4c33-a2ea-f56561824aa1",
    method: "GET",
    headers: {
      "X-Killbill-ApiKey": "Carl",
      "X-Killbill-ApiSecret": "lazar",
      Accept: "application/json",
    },
    connections: 10, // Number of connections
    pipelining: 1, // Pipelining factor
    duration: 5, // Test duration in seconds
  },
  (err, results) => {
    if (err) {
      console.error("Error during testing:", err);
    } else {
      console.log("Performance Test Results:", results);
    }
  }
);

autocannon.track(test);
