import { useState } from 'react'
import reactLogo from './../assets/react.svg'
import viteLogo from './../../public/vite.svg'
import './../App.css'
import { useMsal } from "@azure/msal-react";
import { useGoogleLogin } from '@react-oauth/google';

function Home() {

  const [microsoftRefreshToken, setMicrosoftRefreshToken] = useState();
  const [googleRefreshToken, setGoogleRefreshToken] = useState();
  /*
  const [loading, setLoading] = useState(false);

  const { instance, accounts } = useMsal();

  const loginRequest = {
    scopes: [
      "offline_access",
      "Calendars.ReadWrite",
      "Calendars.ReadWrite.Shared",
      "OnlineMeetings.ReadWrite"
    ]
  };

  const microsoftLogin = () => {
    const params = new URLSearchParams({
      client_id: "111ff3c6-c3d0-4e0e-a67d-4e102c3c023a",
      response_type: "code",
      redirect_uri: "https://o-auth2-teste.vercel.app",
      response_mode: "query",
      scope: "offline_access Calendars.ReadWrite Calendars.ReadWrite.Shared OnlineMeetings.ReadWrite"
    });

    window.location.href =`https://login.microsoftonline.com/common/oauth2/v2.0/authorize?${params}`;
  };
  */
  
  const googlelogin = useGoogleLogin({
    flow: 'auth-code',
    scope: 'openid email profile https://www.googleapis.com/auth/calendar',
    onSuccess: async (codeResponse) => {

      const res = await axios.post(
        'https://nodejs-serverless-function-express-ashy-nine-70.vercel.app/api/hello',
        {
          code: codeResponse.code,
        }
      );

      console.log("REFRESH TOKEN:", res);
    },
    onError: (err) => console.log(err)
  });

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>

        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>

      <h1>João e Lucas Resolvendo o Desafio de OAuth Do Google e Microsoft</h1>

      <div className="card">

        <button onClick={microsoftLogin}>
          Login com Microsoft
        </button>

        <button onClick={googlelogin}>
          Via Google
        </button>

        <p>{googleRefreshToken}</p>
        <p>{microsoftRefreshToken}</p>

      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default Home