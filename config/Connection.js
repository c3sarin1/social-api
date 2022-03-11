const { connect, connection } = require('mongoose');


connect('mongodb://localhost/social-api', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

module.exports = connection;