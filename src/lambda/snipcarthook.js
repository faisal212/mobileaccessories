const axios = require('axios');
const url = require('url');

exports.handler = async function (event, context, callback) {
    
    if (event.httpMethod == 'POST') {
        try {

            let body = JSON.parse(event.body);
            
            const eventName = body.eventName;
               body = body.content;
              let city = await axios.get(`https://mobileaccessories-fb6b5.firebaseio.com/citieslist.json?orderBy="CityName"&equalTo="${body.shippingAddressCity.toUpperCase()}"`);
              city = city.data;
       
            
            if (eventName === 'order.completed') {
               
                
                let path = `http://cod.callcourier.com.pk/api/CallCourier/SaveBooking?loginId=LHR-03453&ConsigneeName=${body.shippingAddressName}&ConsigneeRefNo=${body.invoiceNumber}&ConsigneeCellNo=${body.shippingAddress.phone}&Address=${escape(body.shippingAddress.address1)}&Origin=Lahore&DestCityId=${city[Object.keys(city)[0]].CityID}&ServiceTypeId=7&Pcs=${body.itemsCount}&Weight=01&Description=Test%20Description&SelOrigin=Domestic&CodAmount=${body.summary.adjustedTotal}&SpecialHandling=false&MyBoxId=1%20My%20Box%20ID&Holiday=false&remarks=Test%20Remarks&ShipperName=StayClassy&ShipperCellNo=+923214563790&ShipperArea=198&ShipperCity=1&ShipperAddress=${escape('Office # 13, 14, Basement, Makkah Mobile Center Hall Road  Lahore 54000')}&ShipperLandLineNo=+924237233843&ShipperEmail=kwdevelopers15@gmail.com`
                const response = await axios.get(url.format(path));
                console.log('call courier order added'); 
                callback(null, {
                    statusCode: 200, 
                    body: 'successfull add to courier' 
                }); 
            } 

        } catch (error) {
            console.log(error);
            callback(null, {
                statusCode: 500,
                body: error.message   
            });
        }
    }
}

