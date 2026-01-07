import fs from 'fs';
import http from 'http';
import sum, { a } from './app.js';
import { mul } from './app.js';
import { div } from './app.js';
import path from "path";

const server = http.createServer();

console.log(a);

sum(2 + 3, 80);
mul(2 + 3, 80);
div(2 + 3, 80);

const port = 100;
server.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

// ✅ Read file
const data = fs.readFileSync('C:/Users/HHC/Desktop/Ahtsham.docx', 'utf-8');

console.log('File read successfully');
console.log(data);

// ✅ Write file
const content = 'this is the content';

fs.appendFile(
  'C:/Users/HHC/Desktop/Ahtsham.docx','\n          '+
  content,
  (err) => {
    if (err) {
      console.error('Write error:', err);
    } else {
      console.log('File written successfully');
    }
  }
);
const extname =path.extname("A.js");
console.log(extname);