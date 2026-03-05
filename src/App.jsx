import './App.css'
import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import Home from './OAuthFunctions/Home';

function App() {

  const msalConfig = {
    auth: {
      clientId: "111ff3c6-c3d0-4e0e-a67d-4e102c3c023a", 
      authority: "https://login.microsoftonline.com/common", 
      redirectUri: "https://o-auth2-teste.vercel.app", 
    },
    cache: {
      cacheLocation: "sessionStorage", 
      storeAuthStateInCookie: false,
    }
  };
  
  const msalInstance = new PublicClientApplication(msalConfig);

  return (
     <MsalProvider instance={msalInstance}>
        <Home />
    </MsalProvider>
  )
}

export default App
