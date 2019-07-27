// const request = require('request');
 const shortid = require('shortid');
const axios = require('axios');
const db = require('./server');

let conn = require('./databaseconnection');
const UserSchema = require('./models/user');
const snipcart = require('snipcart-api');

exports.handler = async function (event, context) {
    context.callbackWaitsForEmptyEventLoop = false


    if (event.httpMethod == 'POST') {


        try {
            // const bodyValues = JSON.parse(event.body);
            // let price = 0;
            const session = JSON.parse(event.body).session;
            const userSnipcart = await axios.get(`${process.env.ENV === 'development' ? "http://localhost:9000/" : "https://www.bulkpanda.pk/.netlify/functions"}/getuser?session=${session}`)

            if (conn == null) {
                conn = await db();
                conn.model('User', UserSchema);
            }
            
            const User = conn.model('User');
            const isUser = await User.findOne({ email: userSnipcart.data.email });
            snipcart.configure('SECRET_API_KEY', process.env.SNIPCART_SECRET);
            if (!isUser) {
                let discount = {
                    name: `${userSnipcart.data.email} discount`,
                    code: shortid.generate(),
                    maxNumberOfUsages: 1,
                    trigger: 'Code',
                    type: 'FixedAmount',
                    amount: 0
                };
                 discount = await snipcart.api.discounts.create({data : discount});
                
                 discount = discount.data;
                const UserData ={email: userSnipcart.data.email,wallet : 100,discountid: discount.id,discountcode: discount.code} 
                const doc = await User.create(UserData);
                
                return {
                    statusCode: 201,
                    body: 'wallet is created'
                };
            }else{
             
                isUser.wallet = isUser.wallet + 100;
                await isUser.save();
                return {
                    statusCode: 200,
                    body: 'wallet is updated'
                };
            }
        } catch (error) {


            console.log(error);
            return {
                statusCode: 500,
                body: error.message
            };
        }
    }



}

// function name(params) {

//     axios.get(`${process.env.ENV === 'development' ? "http://localhost:9000/" : "https://www.bulkpanda.pk/.netlify/functions"}/getuser?session=${session}`).then(response => {

//         // if (response.status === 200 && typeof response.data.user !== 'undefined') {
//         //     }
//             const d = new Date();
//             const body = JSON.parse(event.body);
//             const email = body.email;
//             const discount = {
//                 name: `100 rupees discount`,
//                 code: shortid.generate(),
//                 maxNumberOfUsages: 1,
//                 trigger: 'Code',
//                 type: 'FixedAmount',
//                 amount: 100
//             };
//             request({
//                 url: "http://app.snipcart.com/api/discounts",
//                 auth: {
//                     'user': process.env.SNIPCART_SECRET
//                 },
//                 method: "POST",
//                 json: true,
//                 body: discount

//             }, function (error, response, body) {

//                 if (error !== null) {
//                     console.log(error);

//                     callback(null, {
//                         statusCode: 500,
//                         body: error
//                     });
//                 } else {
//                     if (typeof body.errors !== 'undefined') {
//                         const response = JSON.stringify(body);
//                         callback(null, {
//                             statusCode: 401,
//                             body: response
//                         });
//                     } else {

//                         axios.post('https://us-central1-mobileaccessories-fb6b5.cloudfunctions.net/bulkpanda/adddiscount',{
//                             appkey: "86(B-3Du2Wya)n59tk;s",
//                             user: {
//                                 id: bodyValues.id ,
//                                 price: body.amount,
//                                 email: bodyValues.email,
//                                 code: body.code,
//                                 discountid: body.id
//                             } 
//                         }).then(res => {
//                             console.log(res);

//                             callback(null, {
//                                 statusCode: 200,
//                                 body: JSON.stringify(res.data)
//                             });
//                         }).catch(error => {
//                             console.log(error);
//                             callback(null, {
//                                 statusCode: 500,
//                                 body: error.message
//                             });
//                         })

//                     }
//                 }

//             });

//         }).catch(error => {
//             console.log(error);

//             callback(null, {
//                 statusCode: 500,
//                 body: error.message
//             });
//         })


// }