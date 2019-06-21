const axios = require('axios');
const url = require('url');
const sgMail = require('@sendgrid/mail');

const imgUrl = "https://businessoverbroadway.com/wp-content/uploads/2011/10/MobileApp_Reviews.png";
const template = (body) => {
    return (
        `
     <form method="post" action="https://www.bulkpanda.pk/.netlify/functions/addreview" target="_blank"> 
    <p>Rating:</p>
    <div class="rating">
        <input  type="radio" id="star5" title="Awesome - 5 stars" style="margin-right:15px" name="rating" value="5">
        <label class"full" for="star5" style="margin-right:15px">
        <img src="${imgUrl}" width="15" height="15"  />
        <img src="${imgUrl}" width="15" height="15"  />
        <img src="${imgUrl}" width="15" height="15"  />
        <img src="${imgUrl}" width="15" height="15"  />
        <img src="${imgUrl}" width="15" height="15"  />
        </label>
        <input type="radio" id="star4" name="rating" value="4">
        <label class="full" for="star4" title="Pretty good - 4 stars" style="margin-right:15px">
        <img src="${imgUrl}" width="15" height="15"  />
        <img src="${imgUrl}" width="15" height="15"  />
        <img src="${imgUrl}" width="15" height="15"  />
        <img src="${imgUrl}" width="15" height="15"  />
    
        </label>
        <input type="radio" id="star3" name="rating" value="3">
        <label class="full" for="star3" title="Meh - 3 stars" style="margin-right:15px">
        <img src="${imgUrl}" width="15" height="15"  />
        <img src="${imgUrl}" width="15" height="15"  />
        <img src="${imgUrl}" width="15" height="15"  />
    
        </label>
        <input type="radio" id="star2" name="rating" value="2">
        <label class="full" for="star2" title="Kinda bad - 2 stars" style="margin-right:15px">
        <img src="${imgUrl}" width="15" height="15"  />
        <img src="${imgUrl}" width="15" height="15"  />
        </label>
        <input  type="radio" id="star1" name="rating" value="1">
        <label class="full" for="star1" title="Sucks big time - 1 star" style="margin-right:15px">
        <img src="${imgUrl}" width="15" height="15"  />
    
        </label>
        <div class=""></div>
    </div>
    <p>Title</p>
    <input type="title" name="title">
    <p>Description:</p>
    <textarea cols="50" name="description"></textarea>
    <input name="product_id" value="${body.items[0].id}" style="display:none" />
    <input name="user_email" value="${body.user.email}" style="display:none" />
    <input name="user_id" value="${body.user.id}" style="display:none" />
    <input name="user_name" value="${body.user.billingAddress.fullName}" style="display:none" />
    <div>
    <input type="submit" value="Submit">

    </div>
    </form>
    
                        `
    );
}


 
exports.handler = async function (event, context, callback) {
    
    if (event.httpMethod == 'POST') {
        try {

            let body = JSON.parse(event.body);
            
            const eventName = body.eventName;
              
       
            
            if (eventName === 'order.completed') {
                body = body.content;
                let city = await axios.get(`https://mobileaccessories-fb6b5.firebaseio.com/citieslist.json?orderBy="CityName"&equalTo="${body.shippingAddressCity.toUpperCase()}"`);
                city = city.data;
                
                let path = `http://cod.callcourier.com.pk/api/CallCourier/SaveBooking?loginId=LHR-03453&ConsigneeName=${body.shippingAddressName}&ConsigneeRefNo=${body.invoiceNumber}&ConsigneeCellNo=${body.shippingAddress.phone}&Address=${escape(body.shippingAddress.address1)}&Origin=Lahore&DestCityId=${city[Object.keys(city)[0]].CityID}&ServiceTypeId=7&Pcs=${body.itemsCount}&Weight=01&Description=Test%20Description&SelOrigin=Domestic&CodAmount=${body.summary.adjustedTotal}&SpecialHandling=false&MyBoxId=1%20My%20Box%20ID&Holiday=false&remarks=Test%20Remarks&ShipperName=StayClassy&ShipperCellNo=+923214563790&ShipperArea=198&ShipperCity=1&ShipperAddress=${escape('Office # 13, 14, Basement, Makkah Mobile Center Hall Road  Lahore 54000')}&ShipperLandLineNo=+924237233843&ShipperEmail=kwdevelopers15@gmail.com`
                const response = await axios.get(url.format(path));
                console.log('call courier order added'); 
                callback(null, {
                    statusCode: 200, 
                    body: 'successfull add to  call courier ' 
                }); 
            }else if(eventName === 'order.status.changed' && body.to === 'Delivered'){
                body = body.content;
                sgMail.setApiKey(process.env.SENDGRID_API_KEY);
                const msg = {
                    to: body.user.email,
                    fromname: 'Bulk Panda',
                    from: 'kwdevelopers15@example.com',
                    subject: 'Add Review',
                    text: `Add Review`,
                    html: template(body)
                };
                console.log(msg);
                   await sgMail.send(msg);
                  callback(null, {
                    statusCode: 201,
                    body: 'review Mail send'
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

