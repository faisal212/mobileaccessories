// const request = require('request');
// const shortid = require('shortid');
const axios = require('axios');
const db = require('./server');

let conn = require('./databaseconnection');
const UserSchema = require('./models/user');

exports.handler = async function (event, context) {
    context.callbackWaitsForEmptyEventLoop = false


    if (event.httpMethod == 'POST') {


        try {
            // const bodyValues = JSON.parse(event.body);
            // let price = 0;
            const session = JSON.parse(event.body).session;
            const amount = JSON.parse(event.body).amount;
            const userSnipcart = await axios.get(`${process.env.ENV === 'development' ? "http://localhost:9000/" : "https://www.bulkpanda.pk/.netlify/functions"}/getuser?session=${session}`)

            if (conn == null) {
                conn = await db();
                conn.model('User', UserSchema);
            }
            const User = conn.model('User');
            const isUser = await User.findOne({ email: userSnipcart.data.email });
            const doc = await User.findOneAndUpdate({email:userSnipcart.data.email},{email:isUser.email,wallet: isUser.wallet - amount});
            return {
                statusCode: 200,
                body: JSON.stringify(doc)
            };
        } catch (error) {


            console.log(error);
            return {
                statusCode: 500,
                body: error.message
            };
        }
    }



}

