
var key = 'adboardbookingsecretkey';

var encryptor = require('simple-encryptor')(key);



var decrypted = encryptor.decrypt('b546d4cd944d5a8b59aec2f5b56aca574d847140a63f1c5a3e074aec9bc3bac4451fcef39f4c60b2b5d2ca9a8a869545FWPfPgm3sZWu1auVVmofdl/l8xh0UIb1rcuRcjks+Kk=');
// Should print 'testing'
console.log('decrypted: %s', decrypted);