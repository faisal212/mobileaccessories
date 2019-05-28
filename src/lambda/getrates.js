
const axios = require('axios');
exports.handler = function(event,context,callback){
    console.log(event.queryStringParameters);
 
    if(event.httpMethod == 'Post'){
        //
        const body = {
            "rates": [{
              "cost": 100,
              "description": "100 rupees shipping"
              }, {
              "cost": 20,
              "description": "100 rupees shipping",
              "guaranteedDaysToDelivery": 5
              },
              
            ]
          };          
        callback(null, {
            statusCode:200,
            body: JSON.stringify(body)
        });
    }
}