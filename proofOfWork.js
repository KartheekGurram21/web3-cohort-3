const crypto = require('crypto');

for(let i=0;i<1000000000;i++) {
  let val = crypto.createHash('sha256').update(i.toString()).digest('hex');
  if(val.startsWith('00000')) {
    console.log(i);
    break;
  }
}