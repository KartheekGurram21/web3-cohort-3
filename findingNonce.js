const crypto = require('crypto');

let prefix = `harkirat => Raman | Rs 100
Ram => Ankit | Rs 10`.toString();

let nonce = 0;

while(true) {
    let input = prefix+nonce;
    console.log('nonce: ', nonce);
    let hash = crypto.createHash('sha256').update(input).digest('hex');
    if(hash.startsWith("0000")) {
        console.log(prefix+" + "+nonce+" --> (sha256) =  "+hash);
        break;
    }
    nonce++;
}