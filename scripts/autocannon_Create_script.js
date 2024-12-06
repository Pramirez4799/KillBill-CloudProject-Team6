const autocannon = require("autocannon");

const test = autocannon(
  {
    //local
    url: "http://admin:password@127.0.0.1:8080/1.0/kb/tenants",
    //azure
    // url: "http://admin:password@104.43.200.88:8080/1.0/kb/tenants",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      "X-Killbill-CreatedBy": "admin",
      "X-Killbill-Reason": "Performance testing",
      "X-Killbill-Comment": "Using Autocannon Web UI",
    },
    body: JSON.stringify({
      apiKey: "Micheal",
      apiSecret: "Mike",
    }),
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
