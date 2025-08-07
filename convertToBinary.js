let publicKey = "Ehjdbchjfbirc384ud34dbdj34idj83hnx89x3h98r3hci4";// this is not ascii it's in base 58 format

const binaryRepresentation = new TextEncoder().encode(publicKey); // it returns a uint array coz uint array takes less space over native arrays
console.log(binaryRepresentation);

function arrayToHex(byteArray) {
  let hexString = '';
  for(let i=0;i<byteArray.length;i++) {
    hexString += byteArray[i].toString(16).padStart(2,'0');
  }
  return hexString;
}

const str = "hello";
const byteArray = new TextEncoder().encode(str);
const hexString = arrayToHex(byteArray);
console.log(hexString);   