
const axios = require('axios');
exports.handler = function(event,context,callback){
 
    if(event.httpMethod == 'GET'){
        const values = event.queryStringParameters;

        //
        const body = {
            "rates": [{
              "cost": 100,
              "description": "100 rupees shipping",
              "guaranteedDaysToDelivery": 5
              },
              
            ]
          };          
        callback(null, {
            statusCode:200,
            body: JSON.stringify(values)
        });
    }
} 