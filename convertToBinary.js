let publicKey = "Ehjdbchjfbirc384ud34dbdj34idj83hnx89x3h98r3hci4";

const binaryRepresentation = new TextEncoder().encode(publicKey); // it returns a uint array coz uint array takes less space over native arrays
console.log(binaryRepresentation);