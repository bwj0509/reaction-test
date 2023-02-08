const initialstate = {
  score: [],
  avgRank: [],
};

export default function scoreReducer(state = initialstate, action) {
  switch (action.type) {
    case "ADDSCORE":
      const score = action.data;
      return { score: [...state.score, score], avgRank: [...state.avgRank] };
    case "RESETSCORE":
      const avg = Math.floor(
        (state.score[0] + state.score[1] + state.score[2]) / 3
      );
      const userName = localStorage.getItem("userName");
      console.log("게임 스코어를 저장했습니다.", avg);
      return {
        score: [],
        avgRank: [
          ...state.avgRank,
          [
            avg,
            userName,
            `${new Date().getFullYear()}-${
              new Date().getMonth() + 1
            }-${new Date().getDate()}`,
          ],
        ],
      };
    case "SAVESCORE":
      return state;
    default:
      return state;
  }
}
