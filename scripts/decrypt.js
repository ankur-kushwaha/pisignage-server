
var key = 'adboardbookingsecretkey';

var encryptor = require('simple-encryptor')(key);



var decrypted = encryptor.decrypt('e0a6aa03c61d85d81c5fd79ab2ff1c382ad85d0e45258e7b489764058d66a48b934e6ab74f7521f8140bcc2cb024eb4eIwhK4afRAZ3f8Ve6WmJt9A==');
// Should print 'testing'
console.log('decrypted: %s', decrypted);