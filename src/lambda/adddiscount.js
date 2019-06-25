const request = require('request');
const shortid = require('shortid');
const axios = require('axios');
exports.handler = function (event, context, callback) {


    if (event.httpMethod == 'POST') {
    
        try {
            const bodyValues = JSON.parse(event.body);
            let price = 0;
            const session = JSON.parse(event.body).session;
            console.log(session);
            axios.get(`${process.env.ENV === 'development' ? "http://localhost:9000/" : "https://www.bulkpanda.pk/.netlify/functions"}/getuser?session=${session}`).then(response => {
                
            // if (response.status === 200 && typeof response.data.user !== 'undefined') {
            //     }
                const d = new Date();
                const body = JSON.parse(event.body);
                const email = body.email;
                const discount = {
                    name: `100 rupees discount`,
                    code: shortid.generate(),
                    maxNumberOfUsages: 1,
                    trigger: 'Code',
                    type: 'FixedAmount',
                    amount: 100
                };
                request({
                    url: "http://app.snipcart.com/api/discounts",
                    auth: {
                        'user': process.env.SNIPCART_SECRET
                    },
                    method: "POST",
                    json: true,
                    body: discount

                }, function (error, response, body) {

                    if (error !== null) {
                        console.log(error);

                        callback(null, {
                            statusCode: 500,
                            body: error
                        });
                    } else {
                        if (typeof body.errors !== 'undefined') {
                            const response = JSON.stringify(body);
                            callback(null, {
                                statusCode: 401,
                                body: response
                            });
                        } else {
                            
                            axios.post('https://us-central1-mobileaccessories-fb6b5.cloudfunctions.net/bulkpanda/adddiscount',{
                                appkey: "86(B-3Du2Wya)n59tk;s",
                                user: {
                                    id: bodyValues.id ,
                                    price: body.amount,
                                    email: bodyValues.email,
                                    code: body.code,
                                    discountid: body.id
                                } 
                            }).then(res => {
                                console.log(res);

                                callback(null, {
                                    statusCode: 200,
                                    body: JSON.stringify(res.data)
                                });
                            }).catch(error => {
                                console.log(error);
                                callback(null, {
                                    statusCode: 500,
                                    body: error.message
                                });
                            })
                           
                        }
                    }

                });

            }).catch(error => {
                console.log(error);
               
                callback(null, {
                    statusCode: 500,
                    body: error.message
                });
            })


        } catch (error) {
           
            
            console.log(error);
            return {
                statusCode: 500,
                body: error.message
            };
        }
    }



}