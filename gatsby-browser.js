// import Firebase,{FirebaseContext} from "./src/services/firebase";
// import AuthContextProvider from './src/components/Globals/AuthContextProvider';

/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

export const onServiceWorkerUpdateReady = () => {
    const answer = window.confirm(
      `This application has been updated. ` +
        `Reload to display the latest version?`
    )
  
    if (answer === true) {
      window.location.reload()
    }
}

export const onInitialClientRender = () => {
  console.log("ReactDOM.render has executed");
  (function e (){
    var e = window.document.createElement("script");
    e.type = "text/javascript";
    e.async = true;
      e.src = "//staticw2.yotpo.com/T9ePqWQCe8w68TlRhQ8YAscz1u4nvNhOaCC9RHNr/widget.js";
    var t = window.document.getElementsByTagName("script")[0];
    t.parentNode.insertBefore(e, t);
  })();
}

// export const wrapRootElement = ({element}) => (
//   <FirebaseContext.Provider value={new Firebase()}>
//     <AuthContextProvider >{element}</AuthContextProvider>
//   </FirebaseContext.Provider>
// );

