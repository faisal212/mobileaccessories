
const querystring = require('querystring');


const request = require('request');
const axios = require('axios');
exports.handler = function (event, context, callback) {
    try {
        let body = querystring.parse(event.body);
    console.log(body);
    const email = body.user_email;
    const rating = body.rating; 
    const title = body.title;
    const description = body.description;
    const name = body.user_name;
    request({ 
        url: `https://app.snipcart.com/api/products/${body.product_id}`,
        auth: {
            'user': process.env.SNIPCART_SECRET
        },
        method: "GET",
        json: true,
    }, function (error, response, body) {

        if (error !== null) {
            console.log(error);
            callback(null, {
                statusCode: 400,
                body: error
            });
        } else {

            console.log(body);
            if (typeof body.errors !== 'undefined') {
                const response = JSON.stringify(body);
                callback(null, {
                    statusCode: 400,
                    body: response
                });
            } else {
                axios.post('https://api.yotpo.com/v1/widget/reviews', {
                    "appkey": process.env.YOPTO_API_KEY,
                    "sku": body.userDefinedId,
                    "product_title": body.name,
                    "product_url": body.url,
                    "product_image_url": body.image,
                    "display_name": name,
                    "email": email,
                    "review_content": description,
                    "review_title": title,
                    "review_score": rating
                }).then(data => {
                    callback(null, {
                        statusCode: 200,
                        body: `${email} added a review to product ${body.title}`
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
    } catch (error) {
        console.log(error);

        callback(null, {
            statusCode: 500,
            body: error.message   
        });
        
    }


}