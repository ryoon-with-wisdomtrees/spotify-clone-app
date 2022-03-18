import React, { useEffect } from "react";
import "./App.css";
import Login from "./Login";
import Player from "./Player";
import { getTokenFromResponse } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();
// 백앤 프론트 커뮤니케이션 가능하게 인스턴스만들어 놈.
// https://account.spotify.com/authorize?client_id=98d19661064040c48f233b593b86965b&redirect_uri=http://localhost:3000/&scope=user-read-currently-playing%20user-read-recently-played%20user-read-playback-state%20user-top-read%20user-modify-playback-state&response_type=token&show_dialog=true
//dispatch  슛 건 to datalayer
function App() {
  //const [token, setToken] = useState(null);

  const [{ token }, dispatch] = useDataLayerValue();
  // state 대신 user라고 씀. 스포티파이에서 가져온 데이터들 담는 거임

  //useEffect는 Run code based on a given condition
  // 뭔코드가 있던 항상 코드를 실행함.
  // 이거 왜하냐면 어떤 change든 바로 감지할수있게 설정한 값이 변경되면 바로 이 코드가 실행되게하기 위함.
  useEffect(() => {
    //set token
    const hash = getTokenFromResponse();
    window.location.hash = "";
    const _token = hash.access_token;
    // _붙이는거는 임시토큰이라는 표식.

    if (_token) {
      spotify.setAccessToken(_token);
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        }); //action은 type을 가짐. datalayer에 슛팅하고,
      }); // 스포티파이와 리액트가 연결되게 하는 작업 중 하나.

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      spotify.getPlaylist("37wcE0iklI2HKl9vS9T1xf").then((response) =>
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        })
      );
    }

    console.log(" token 💚", token);
  }, [token, dispatch]);

  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  ); // 로그인성공하면 플레이어 페이지로
}

export default App;
