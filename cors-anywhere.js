import { createServer } from "cors-anywhere";
// Listen on a specific host via the HOST environment variable
var host = "0.0.0.0";
// Listen on a specific port via the PORT environment variable
var port = 8080;

createServer({
  originWhitelist: [], // Allow all origins
  requireHeader: ["origin", "x-requested-with"],
  removeHeaders: ["cookie", "cookie2"],
}).listen(port, host, function () {
  console.log("Running CORS Anywhere on " + host + ":" + port);
});
