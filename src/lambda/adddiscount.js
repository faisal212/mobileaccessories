const request = require('request');
const shortid = require('shortid');
const sgMail = require('@sendgrid/mail');

exports.handler = function (event, context, callback) {


    if (event.httpMethod == 'POST') {
        try {
            sgMail.setApiKey(process.env.SENDGRID_API_KEY);

            const d = new Date();
            const body = JSON.parse(event.body);
            const email = body.email;
            const discount = { 

                name: '100 rupees discount',
                code: shortid.generate(),
                maxNumberOfUsages: 1,
                trigger: 'Code',
                type: 'FixedAmount',
                amount: '100'
            };


            request({
                url: "http://app.snipcart.com/api/discounts",
                auth: {
                    'user': 'ST_MzdlOTM4ODgtYmVkMy00NjUwLWE2NjItZWUzNDU0YmI4ZGRlNjM2OTYxNjI3NjY3NDM5MDcy'
                },
                method: "POST",
                json: true,
                body: discount
            }, function (error, response, body) {

                if(error !== null){
                    console.log(error);
                    callback(null, {
                        statusCode: 400,
                        body: error
                    });
                }else{
                
                    console.log(body);
                    if(typeof body.errors !== 'undefined'){
                        const response = JSON.stringify(body);
                        callback(null, {
                            statusCode: 400,
                            body: response
                        });
                    }else{
                    
                        const msg = {
                            to: email,
                            from: 'kwdevelopers15@example.com',
                            subject: '100 rupees discount',
                            text: `To get 100 rupees discount at new order write this code ${body.code} on shopping card`,
                            html: `To get 100 rupees discount at new order write this code ${body.code} on shopping card`,
                          };
                          sgMail.send(msg).then(data =>  callback(null, {
                            statusCode: 200,
                            body: 'everything good'
                        })).catch(error => {
                            callback(null, {
                                statusCode: 500,
                                body: error.message
                            });
                        } );
                       
                    }
                    
                }
               
            });


        } catch (error) {
            console.error(error);
            callback(null, {
                statusCode: 500,
                body: error.message
            });
        }
    }



}