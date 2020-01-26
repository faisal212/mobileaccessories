// const request = require('request');
// const shortid = require('shortid');
const axios = require('axios');
const db = require('./server');
const shortid = require('shortid');

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
                //console.log(doc);
                return {
                    statusCode: 404,
                    body: 'user or discount not find'
                };
            }else{
                
                let discount = {
                    id: isUser.discountid,
                    name: `${userSnipcart.data.email} discount`,
                    code: shortid.generate(),
                    maxNumberOfUsages: 2 + 1,
                    trigger: 'Code',
                    type: 'FixedAmount',
                    amount: isUser.wallet
                };
                 await snipcart.api.discounts.update({urlParams : {id: isUser.discountid},data : discount});
                return {
                    statusCode: 200,
                    body: JSON.stringify({wallet: isUser.wallet, code: discount.code})
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

