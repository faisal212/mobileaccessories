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

// export const wrapRootElement = ({element}) => (
//   <FirebaseContext.Provider value={new Firebase()}>
//     <AuthContextProvider >{element}</AuthContextProvider>
//   </FirebaseContext.Provider>
// );

