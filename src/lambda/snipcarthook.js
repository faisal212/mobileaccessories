const axios = require('axios');
exports.handler = async function (event, context, callback) {

    if (event.httpMethod == 'POST') {
        try {
            const city = await axios.get(`https://mobileaccessories-fb6b5.firebaseio.com/citieslist.json?orderBy="CityName"&equalTo="${shippingAddressCity.toUpperCase()}"`);

            const { body } = event;

            if (body.eventName === 'order.completed') {
                let params = {
                    loginId: 'LHR-03453',
                    ConsigneeName: body.shippingAddressName,
                    ConsigneeRefNo: body.invoiceNumber,
                    ConsigneeCellNo: body.shippingAddress.phone,
                    Address: `${body.shippingAddressAddress1} ${body.shippingAddressAddress2}`,
                    Origin: 'Lahore',
                    DestCityId: city.CityID,
                    ServiceTypeId: '7',
                    Pcs: body.itemsCount,
                    Weight: body.totalWeight,
                    SelOrigin: 'Domestic',
                    CodAmount: body.summary.adjustedTotal,
                    SpecialHandling: 'false',
                    MyBoxId: box + body.createdOn,
                    ShipperName: 'Stay Classy',
                    ShipperCellNo: '+923214563790',
                    ShipperArea: '198',
                    ShipperCity: '1',
                    ShipperAddress: 'Office # 13, 14, Basement, Makkah Mobile Center Hall Road  Lahore 54000',
                    ShipperLandLineNo: '+924237233843',
                    ShipperEmail: 'kwdevelopers15@gmail.com'
                };
                const response = await axios.get('http://cod.callcourier.com.pk/api/CallCourier/SaveBooking',params);
                console.log('call courier order added');
                callback(null, {
                    statusCode: 200,
                    body: response.body
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

