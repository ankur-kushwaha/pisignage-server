'use strict';

module.exports = {
    env: 'development',
    https: false,
    port: process.env.PORT || 4000,
    mongo: {
        uri: process.env.MONGOLAB_URI ||
            'mongodb+srv://ankur:ankur@cluster0.wgb6k.mongodb.net/pisignage-server-dev?retryWrites=true&w=majority&appName=Cluster0'
    }
};