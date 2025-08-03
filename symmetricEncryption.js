//same key is used for encryption and decryption

const crypto = require('crypto');
const key = crypto.randomBytes(32);
const iv = crypto.randomBytes(16); //initialization vector

function encrypt(text) {
    const cipher = crypto.createCipheriv('aes-256-cbc',key,iv);
    let encrypted = cipher.update(text,'utf8','hex');
    encrypted += cipher.final('hex');
    return encrypted;
}

function decrypt(encryptedText) {
    const decipher = crypto.createDecipheriv('aes-256-cbc',key,iv);
    let decrypted = decipher.update(encryptedText,'hex','utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

const text = "Hello, World!";
const encryptedText = encrypt(text);
const decryptedText = decrypt(encryptedText);

console.log("text: ", text);
console.log("encrypted text: ", encryptedText);
console.log("decrypted text: ", decryptedText);