'use strict';

module.exports = {
    env: 'production',
    https: false,
    port: process.env.PORT || 3000,
    mongo: {
        uri: process.env.MONGOLAB_URI ||
            'mongodb+srv://ankur:ankur@cluster0.wgb6k.mongodb.net/pisignage-server?retryWrites=true&w=majority&appName=Cluster0'
    }
};