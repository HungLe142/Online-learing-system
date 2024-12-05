const { Connection } = require('tedious');

const config = {
    server: 'server241cs.database.windows.net', 
    authentication: {
        type: 'default',
        options: {
            userName: 'adminOLS', 
            password: '1944!#ASDF!a'  
        }
    },
    options: {
        encrypt: true, 
        database: 'ELS' 
    }
};

const connection = new Connection(config);

connection.on('connect', (err) => {
    if (err) {
        console.error('Connection failed:', err);
    } else {
        console.log('Connected');
    }
});

connection.connect();

module.exports = connection;
