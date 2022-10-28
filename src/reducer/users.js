const initialstate = {
    users: [
        {
            name: 'WOOJIN BAEK',
            password: 'dnwls0509~',
            email: 'bwj59@naver.com'
        },
        {
            name: 'PARK YO DO',
            password: 'test123',
            email: 'bwj59@naver.com'
        }
    ]
}

export default function userReducer(state = initialstate, action) {
    switch (action.type) {
        case "ADDUSER":
            const email = action.data.email
            const password = action.data.password
            const name = action.data.name
            console.log('user add ok!')
            return { ...state, users: [...state.users, { name: name, password: password, email: email }] }
        default:
            return state
    }
}