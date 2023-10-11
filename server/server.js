import { createServer } from "http";
import express from "express";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
import bodyParser from "body-parser";

const port = process.env.PORT || 3000;
const app = express();

// Add middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Use Vite/Vue build
app.use(express.static(join(__dirname, "../client/dist")));

// Render index.html if vite build fails
app.get("/", function (req, res) {
  res.sendFile(join(__dirname, "index.html"));
});

var server = createServer(app);
server.listen(port);
console.log("Server is running at localhost:" + port);
