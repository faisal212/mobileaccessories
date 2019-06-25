const axios = require('axios');


exports.handler = async function (event, context) {

    if (event.httpMethod == 'GET') {
        try {
            if (event.httpMethod == 'GET') {
                const values = event.queryStringParameters;
                const user = await axios.get(`${process.env.ENV === 'development' ? "http://localhost:9000/" : "https://www.bulkpanda.pk/.netlify/functions"}/getuser?session=${values.session}`);

                if (user.status !== 200) {
                    return {
                        statusCode: 401,
                        body:JSON.stringify( {
                            error: {
                                msg: "you don't have access to do this"
                            }
                        })
                    }
                } else {
                    const discount = await axios.post('https://us-central1-mobileaccessories-fb6b5.cloudfunctions.net/bulkpanda/getdiscount', {
                        appkey: "86(B-3Du2Wya)n59tk;s",
                        userid: user.data.id
                    });
                    if (discount.status !== 200) {
                        return {
                            statusCode: 404,
                            body:JSON.stringify( {
                                error: {
                                    message: 'no discount found for you'
                                }
                            })
                        }
                    } else {
                        const res = JSON.stringify(discount.data);
                        return {
                            statusCode: 200,
                            body: res
                        };
                    }
                }
            }

        } catch (error) {
            console.log(error);

            return {
                statusCode: error.response.status,
                body: error.message
            };
            
        }
    }

}  