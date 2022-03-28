const http = require("http");
let i = 0;
const app = http.createServer((req, res) => {
  console.log(i);
  res.end(String(i));
  i += 1;
});

app.listen(8080);
