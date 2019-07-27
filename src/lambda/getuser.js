

const snipcart = require('snipcart-api');

exports.handler =  function(event,context,callback){

    
     const values = event.queryStringParameters;
     snipcart.configure('SECRET_API_KEY', process.env.SNIPCART_SECRET);

    snipcart.api.userSessions.getOne({
        urlParams: {
            token: values.session,
        }
    }).then((response) => {
        console.log('success');
        console.log(response.data);
        console.log(response.status);
        console.log(response.statusText); 
        console.log(response.headers);
        console.log(response.config);

        callback(null, {
            statusCode:200,
            body:   JSON.stringify(response.data)
        });
    })
    .catch((error) => {
        if (error.response) {
            console.log('error')
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
            console.error('Error', error.message);
            callback(null, {
                statusCode:error.response.status,
                body: error.message
            });
        }
    });
  
 
}