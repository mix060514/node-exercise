const fs = require('fs');
const path = require('path');

const filename = path.resolve(__dirname, 'file_wirte_target.txt');
if (fs.existsSync(filename)) {
    fs.unlinkSync(filename);
}
fs.writeFileSync(filename, 'Hello world!');
