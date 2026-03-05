export const microsoftOAuth = () => {

  const clientId = "168bff34-25c9-4335-bcf9-92879ef13f9c";

  const redirectUri = "http://localhost:5173/callback";

  const scope = "offline_access calendars.readwrite calendars.readwrite.shared onlinemeetings.readwrite";

  const url =
    "https://login.microsoftonline.com/common/oauth2/v2.0/authorize" +
    `?client_id=${clientId}` +
    "&response_type=code" +
    `&redirect_uri=${encodeURIComponent(redirectUri)}` +
    "&response_mode=query" +
    `&scope=${encodeURIComponent(scope)}`;

  window.location.href = url;
};
export const googleOAuth = () => {
    return "Deu Bom TBM";
}