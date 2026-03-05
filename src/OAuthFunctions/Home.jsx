import { useState } from 'react'
import reactLogo from './../assets/react.svg'
import viteLogo from './../../public/vite.svg'
import './../App.css'
import { useMsal } from "@azure/msal-react";

function Home() {

  const [microsoftRefreshToken, setMicrosoftRefreshToken] = useState();
  const [googleRefreshToken, setGoogleRefreshToken] = useState();

  const { instance } = useMsal();

  const loginRequest = {
    scopes: [
      "offline_access",
      "Calendars.ReadWrite",
      "Calendars.ReadWrite.Shared",
      "OnlineMeetings.ReadWrite"
    ]
  };

  const microsoftLogin = () => {
    instance.loginRedirect(loginRequest);
  };

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

        <button onClick={() => setGoogleRefreshToken(googleOAuth())}>
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