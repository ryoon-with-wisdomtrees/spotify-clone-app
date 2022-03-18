/**
 *  컴포넌트가 아니니까 capital안씀.
 *  역할: 로직처리
 *  https://developer.spotify.com/
 *
 *
 *
 * 1. click Login button
 * 2. Redirect to Spotify login page
 * 3. Redifect to home page once authorized
 *
 */
//https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#
// 스포티파이애덜에게 처리하라고 던지는 엔드포인트.
export const authEndpoint = "https://account.spotify.com/authorize"; // login 버튼 누르면 여기로
const redirectUri = "http://localhost:3000/"; // 인증완료되면 여기로
const clientId = "c1928ba76f3c4906a3b2e2b925b31cf4";
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];
// correct permission.

export const getTokenFromResponse = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
  // access_token을 pull out하려구
  // reduce는 엄청 강력해서 사용하는데 조심하긴 해야하는데 정확한 사용법을 알고나면, 사용할 것을 권함.
};
export const accessUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
console.log("accessUrl : ", accessUrl);
