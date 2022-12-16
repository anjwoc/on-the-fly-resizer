const express = require('express');

const { createIPX, createIPXMiddleware } = require('ipx');

const ipx = createIPX({ dir: '/assets' });
const app = express();
app.use("/assets", createIPXMiddleware(ipx));

app.listen(3000, () => {
  console.log("server is listening on port 3000");
})