import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";

const spotify = new SpotifyWebApi();
//백앤 프론트 커뮤니케이션 가능하게 인스턴스만들어 놈.

function App() {
  const [token, setToken] = useState(null);

  //useEffect는 Run code based on a given condition
  // 뭔코드가 있던 항상 코드를 실행함.
  // 이거 왜하냐면 어떤 change든 바로 감지할수있게 설정한 값이 변경되면 바로 이 코드가 실행되게하기 위함.
  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    // _붙이는거는 임시토큰이라는 표식.

    if (_token) {
      setToken(_token); //메모리에 토근 적재
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        console.log("💥", user); // 사용자정보 들고온거 뿌려서 확인해보장
      }); // 스포티파이와 리액트가 연결되게 하는 작업 중 하나.
    }

    console.log(" token 💚", token);
  });

  return (
    <div className="app">{token ? <h1> 로그인 성공 </h1> : <Login />}</div>
  );
}

export default App;
