var key = 'adboardbookingsecretkey';

var encryptor = require('simple-encryptor')(key);

var encrypted = encryptor.encrypt('pi');

console.log(encrypted)
