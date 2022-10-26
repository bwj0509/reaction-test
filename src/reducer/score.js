const initialstate = {
    score: [

    ],
    avgRank: [

    ]
}

export default function scoreReducer(state = initialstate, action) {
    switch (action.type) {
        case "ADDSCORE":
            const score = action.data
            console.log('스코어 저장합시다!')
            return { score: [...state.score, score], avgRank: [...state.avgRank] }
        case "RESETSCORE":
            const avg = Math.floor((state.score[0] + state.score[1] + state.score[2]) / 3)
            const name = localStorage.getItem('name')
            console.log('게임 스코어를 저장했습니다.', avg)
            return { score: [], avgRank: [...state.avgRank, [avg, name]] }
        case "SAVESCORE":
            return state
        default:
            return state
    }
}