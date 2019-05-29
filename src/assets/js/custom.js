if(typeof window !== 'undefined'){
    console.log('yes now window is availaible')
    window.Snipcart.subscribe('shippingaddress.changed', function (address) {
        console.log(address);
    });
}