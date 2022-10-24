const initialstate = {
    users: [
        {
            name: 'WOOJIN BAEK',
            id: 'bwj0509',
            pw: 'dnwls0509~',
            email: 'email'
        }
    ]
}

export default function userReducer(state = initialstate, action) {
    switch (action.type) {
        case "TEST":
            console.log('test')
            return state
        default:
            return state
    }
}