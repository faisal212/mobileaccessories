
const axios = require('axios');
exports.handler = function(event,context,callback){
   const API_URL = 'https://api.github.com/users';
    const API_CLIET_ID = 'e2f02798325da16069e6';
    const API_CLIENT_SECRET = 'a20f42dd962cef721e47c3898951f5dc7ac1e4b5';

    const URL = `${API_URL}?client_id=${API_CLIET_ID}&client_secret=${API_CLIENT_SECRET}`;

    const send = body => {
        callback(null, {
            statusCode:200,
            body: JSON.stringify(body)
        });
    }

    const getUsers = () => {
        axios.get(URL)
            .then(res => send(res.data))
            .catch(err => send(err));
    }
    if(event.httpMethod == 'GET'){
        //
        getUsers();
    }
}