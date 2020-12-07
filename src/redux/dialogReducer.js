const ADD_MESSAGE = 'ADD_MESSAGE'
const UPDATE_MESSAGE_VALUE = 'UPDATE_MESSAGE_VALUE'

let initialState = {
    inputValue: {
        messageValue: ''
    },
    friendData: [
        {
            name: 'Petr',
            id: 1,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBoOxv-DbMlA1aiqJ0-xnHSL8sPh8JH2rp3w&usqp=CAU'
        },
        {
            name: 'Vadman',
            id: 2,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjW5FEN8CzVwaFZVtoEWBESeiux8Bhe4_aYQ&usqp=CAU'
        },
        {
            name: 'Mimimishka',
            id: 3,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZbRF9k7M6T4obdeM6921Hkok9wAuuwx56_Q&usqp=CAU'
        },
        {
            name: 'Bat man',
            id: 4,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_uC8SZrYWsKIpVQRd1M5sa9WdQ5jewb1aFQ&usqp=CAU'
        }
    ],
    mesData: [
        {
            name: 'Petr',
            id: 1,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBoOxv-DbMlA1aiqJ0-xnHSL8sPh8JH2rp3w&usqp=CAU',
            mes: 'Hi'
        },
        {
            name: 'Petr',
            id: 1,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBoOxv-DbMlA1aiqJ0-xnHSL8sPh8JH2rp3w&usqp=CAU',
            mes: 'Hei'
        },
        {
            name: 'Petr',
            id: 1,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBoOxv-DbMlA1aiqJ0-xnHSL8sPh8JH2rp3w&usqp=CAU',
            mes: 'Bonjour'
        }
    ]
}

const dialogReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE: {
            let message = {
                mes: state.inputValue.messageValue,
            }
            let stateCopy = {...state}
            stateCopy.mesData = [...state.mesData, message]
            stateCopy.inputValue.messageValue = ''
            return stateCopy
        }
        case UPDATE_MESSAGE_VALUE: {
            let stateCopy = {...state}
            stateCopy.inputValue = {...state.inputValue}
            stateCopy.inputValue.messageValue = action.messageValue
            return stateCopy
        }
        default:
            return state
    }
}

export const addMessage = () => {
    return {type: ADD_MESSAGE}
}

export const addMessageCreatorAction = (messageValue) => {
    return {type: UPDATE_MESSAGE_VALUE, messageValue: messageValue}
}

export default dialogReducer