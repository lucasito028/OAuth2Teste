export const microsoftOAuth = () => {

  const clientId = "111ff3c6-c3d0-4e0e-a67d-4e102c3c023a";

  const redirectUri = "https://o-auth2-teste.vercel.app";

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