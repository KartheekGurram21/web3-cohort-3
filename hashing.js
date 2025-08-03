const crypto = require('crypto');

const input = "blockchain";
const hash = crypto.createHash('sha256').update(input).digest('hex');

console.log(hash)