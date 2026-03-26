import { useState, useEffect } from 'react'
import reactLogo from './../assets/react.svg'
import viteLogo from './../../public/vite.svg'
import './../App.css'
import { useMsal } from "@azure/msal-react";

function Home() {

  const [microsoftRefreshToken, setMicrosoftRefreshToken] = useState();
  const [googleRefreshToken, setGoogleRefreshToken] = useState();

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
    instance.loginRedirect(loginRequest);
  };

  // 👇 AQUI É O PONTO CHAVE
  useEffect(() => {
    if (accounts.length > 0) {
      instance.acquireTokenSilent({
        scopes: loginRequest.scopes,
        account: accounts[0],
      })
      .then((response) => {
        console.log("Response completo:", response);

        // ⚠️ aqui você NÃO tem refresh_token
        // mas pode salvar o access_token
        setMicrosoftRefreshToken(response.accessToken);
      })
      .catch((err) => {
        console.error("Erro ao pegar token:", err);
      });
    }
  }, [accounts]);

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