
const request = require('request');
const querystring = require('querystring');

exports.handler = function(event,context,callback){

 try {
     const values = event.queryStringParameters;
    request({
        url: `https://app.snipcart.com/api/usersessions/${values.session}`,
        auth: {
            'user': process.env.SNIPCART_SECRET
        },
        method: "GET",
        json: true,
    }, function (error, response, body) {
       try {
        if(error !== null){
            console.log(error);
            callback(null, {
                statusCode: 400,
                body: error
            });
        }else{
            if(typeof body.errors !== 'undefined'){
                const response = JSON.stringify(body);
                callback(null, {
                    statusCode: 401,
                    body: response
                });
            }else{
                const res = JSON.stringify( {
                    creationDate: body.creationDate,
                    billingAddressName: body.billingAddressName,
                    id: body.userId,
                    email: body.email,
                    
                });
                callback(null, {
                    statusCode: 200,
                    body:res
                });
               
            }
            
            
        }
       } catch (error) {
           const res = JSON.stringify( 
               {
                   error: {
                    msg: "you don't have access to acess user  info"
                }
               }
           );
        callback(null, {
            statusCode: 400,
            body: res
        });
           
       }

    }).on('error', function(error){
        callback(null, {
            statusCode: 400,
            body:'something wrong'
        });
    });
  
 } catch (error) {
    console.log(error);

    callback(null, {
        statusCode:500,
        body: error.message
    });
 }
}