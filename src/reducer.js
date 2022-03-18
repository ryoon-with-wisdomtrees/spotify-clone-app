export const initialState = {
  user: null,
  playLists: [],
  playing: false,
  item: null,
  //remove after developing
};

const reducer = (state, action) => {
  console.log(action); // debug

  //Action -> type, [payload]
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        disvcover_weekly: action.disvcover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
