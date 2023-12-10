import express from "express";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory
const port = 3001;

const app = express();
app.use(express.static('public'));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'))
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});