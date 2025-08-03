// Assignment #2
// What if I ask you that the input string should start with blockchain ? How would the code change?


const crypto = require('crypto');

const prefix = "blockchain";

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