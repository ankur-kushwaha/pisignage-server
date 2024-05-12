var key = 'adboardbookingsecretkey';

var encryptor = require('simple-encryptor')(key);

var encrypted = encryptor.encrypt('adboardbooking');

console.log(encrypted)
