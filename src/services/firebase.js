import app from 'firebase/app'
import 'firebase/auth';
import React from "react";

const config = {
    apiKey: "AIzaSyAlJVfj1NdlCwat_x5r9vyPzBi1Q-Z-n68",
    authDomain: "mobileaccessories-fb6b5.firebaseapp.com",
    databaseURL: "https://mobileaccessories-fb6b5.firebaseio.com",
    projectId: "mobileaccessories-fb6b5",
    storageBucket: "mobileaccessories-fb6b5.appspot.com",
    messagingSenderId: "261199886686",
    appId: "1:261199886686:web:4ef87fdfb8b8f6cb"
}


class Firebase {
    constructor(){
        if(typeof window !== 'undefined') {
        app.initializeApp(config);
        this.auth= app.auth();
        this.uiConfig = {
            //configure FirebaseUI
            signInFlow: 'popup',
            signInOptions:[
                {
                  provider: app.auth.PhoneAuthProvider.PROVIDER_ID,
                  recaptchaParameters: {
                    type: 'image', // 'audio'
                    size: 'normal', // 'invisible' or 'compact'
                    badge: 'bottomleft' //' bottomright' or 'inline' applies to invisible.
                  },
                  defaultCountry: 'PK', // Set default country to the United Kingdom (+44).
                  // For prefilling the national number, set defaultNationNumber.
                  // This will only be observed if only phone Auth provider is used since
                  // for multiple providers, the NASCAR screen will always render first
                  // with a 'sign in with phone number' button.
                  defaultNationalNumber: '1234567890',
                  // You can also pass the full phone number string instead of the
                  // 'defaultCountry' and 'defaultNationalNumber'. However, in this case,
                  // the first country ID that matches the country code will be used to
                  // populate the country selector. So for countries that share the same
                  // country code, the selected country may not be the expected one.
                  // In that case, pass the 'defaultCountry' instead to ensure the exact
                  // country is selected. The 'defaultCountry' and 'defaultNationaNumber'
                  // will always have higher priority than 'loginHint' which will be ignored
                  // in their favor. In this case, the default country will be 'GB' even
                  // though 'loginHint' specified the country code as '+1'.
                  loginHint: '3484036426',
                  // You can provide a 'whitelistedCountries' or 'blacklistedCountries' for
                  // countries to select. It takes an array of either ISO (alpha-2) or
                  // E164 (prefix with '+') formatted country codes. If 'defaultCountry' is
                  // not whitelisted or is blacklisted, the default country will be set to the
                  // first country available (alphabetical order). Notice that
                  // 'whitelistedCountries' and 'blacklistedCountries' cannot be specified
                  // at the same time.
                  whitelistedCountries: ['PK', '+92']
                }
              ]
          }
        }
    }
}

export default Firebase;

const FirebaseContext = React.createContext(null);
export {FirebaseContext};