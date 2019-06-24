const request = require('request');
const shortid = require('shortid');
const axios = require('axios');
exports.handler = function (event, context, callback) {


    if (event.httpMethod == 'POST') {

        try {
            let price = 0;
            const session = JSON.parse(event.body).session;
            console.log(session);
            axios.get(`${process.env.ENV === 'development' ? "http://localhost:9000/" : "https://www.bulkpanda.pk/.netlify/functions"}/getdiscount?session=${session}`).then(response => {
                const user = response;   
                 if (response.status === 200) {
                    price = response.data.user.wallet.price;
                }
                const d = new Date();
                const body = JSON.parse(event.body);
                const email = body.email;
                const discount = {
                    name: `${price + 100} rupees discount`,
                    code: shortid.generate(),
                    maxNumberOfUsages: 1,
                    trigger: 'Code',
                    type: 'FixedAmount',
                    amount: (parseInt(price) + 100).toString()
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
                            axios.post('https://us-central1-mobileaccessories-fb6b5.cloudfunctions.net/bulkpanda/adddiscount                        ',{
                                "appkey": "MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDkRlRcxsftQa+H\nL7CQdmTVqVMUZ9SP/QWCTA/ZWVJTi5pPz30s+M/Sxn6HNuQ0JUrdtun0jUlGsOeq\na/x7zo8Lnm4NAOAG8baiIu7SwiV4Y7fGulJqtZ6PfxND2tEPA5rskLZnlPol6/i3\nGvCuD5yItnVV5PiPG78a9++5fQpO+8ak/XeD1Qg9rowBrVi0xZuYUBAm/rC0+XDM\nbVbONkDtEg3tuOuIEGoqe26s7CkYsPo/EjBHmMpTdASwpFRtxdBL4vI/PjrqlqU0\nkodSoXFdbffkuBoo08rFjkO+NMVGY/LapAiUUXGnRklVdP+KFauG45+MztS3zIT9\nlI1YQNPpAgMBAAECggEAFeLmWMTYS1emaCw63gbz8QZciFLSLwH/4re/N0QYoBj8\n8RUAN+0dI+TTIcyyAYvnyy0r7j4Tnfr9IzpaSVaLIX6Np6KDWDcZnx8BTeS+afYJ\nmzynBUMnkjOJWdKjg7CBTJgtXO4MM9GVlZy4IcAubm8r/dHHwRTUdFX8PokOEXdk\n/7jwp2i6vFP1TUoJiAqMbA5baSYAm4LLcOoCZn/Rd+ooqXJHb8OPoc2JNmdB+8FB\nPnCTHbW9kODZmcJQjNsmWrN4cksLFqmNH+JbYp3udbihR+sklxwu61YxGvQ8uNjF\nu0YIHCiv31hGpM67eFpjW4zjpSiRR9h/dDw5+9/SQQKBgQDyxWABI7A/dPn1x0p2\n5fxiIgT6xHmY2jcbk/SXi7KRqxV32jti4wrU2jfMrIcoFnsy83PFCysouiIQNr43\napSonbikyxrxWlVSY5ITn7EZI3/TM7QyxF6xVZmzmubYbUA5WlXV9yMZKFHL2+FJ\ne1PC1c2mQhMyPsYzSbvFGoxpUQKBgQDwtru9DE1baSiNdWL9wNlhSGLwaV43GlHt\nv6y9sN/iW8/JppclB5Nt8To9wl3bv/mP+w9FWuio4wZw9S+9wGiI4CRZJ/jHPjdZ\nuYkMMil7THGTYm2BfL+nxHLs8P6yKA5p3qw2uJvBjAG2FP2wbov6lG812jdelJM2\nO7FA/r8bGQKBgHwO5JpwdFZZHoq8Ro8vw6MaI1VKJaE4kcSj/O+cUaoitRvEB2jn\nANf4k18iIwcXRempgtWEeY+cXl/OubFz43eu8XY03BXNxaAOhc1FY6im/WEeIM14\nj7MrPRoM5D5gxdsJEKgAXI00j2gPerakMQ91VlvJlCmu7nWzDiMRCAOhAoGAQwcP\nJegsDj0s/p7mTrSJk249pqYghwV8NNC/wB5laTmZlZQe2D/QzLd0OUhLLGq7il0l\ndnGHAagd3gxYG+Vc9mg7ltvriUeI0CI6yDubk2rI4Xpx9bGQCJ5KRjIhKei/grlv\niNlE/dMHkvUrYxqVPdRhV0SJUHvctihPBkMpYdkCgYEA5bE/mx441829ieE8pRBF\nSveJGQ2w8RQk4L4fVWsrwcDjAe9qbFJr4dEuIS3AF0hEdt5pkJZmAGNEMxCXZAwp\nfEcZOLbh2cfLm9tQjN177cV/Yz7YpalFtEgjyboUF6YNKGPhWfA+LjOgoNo3q0ld\nvo71ZAs/so8JC+JeUD8F72w",
                                "user": {
                                    "id": user.data.user.id ,
                                    "price": body.code,
                                    "email": user.data.user.email,
                                    "code": body.code
                                }
                            }).then(res => {
                                console.log(body);

                                callback(null, {
                                    statusCode: 200,
                                    body: 'discount added succesfully'
                                });
                            }).catch(error => {
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
            console.error(error);
            return {
                statusCode: 500,
                body: error.message
            };
        }
    }



}