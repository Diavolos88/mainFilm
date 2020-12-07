const ADD_POSTS_CARD = 'ADD_POSTS_CARD'

let initialState = {
    cards: [
        {
            name: 'Petr',
            id: 1,
            ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBoOxv-DbMlA1aiqJ0-xnHSL8sPh8JH2rp3w&usqp=CAU',
            title: 'about 1917',
            mes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborumLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim ',
            likes: 8300
        },
        {
            name: 'Mimimishka',
            id: 2,
            ava: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZbRF9k7M6T4obdeM6921Hkok9wAuuwx56_Q&usqp=CAU',
            title: 'Lord of the ring',
            mes: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis t laborum',
            likes: 123456
        }
    ],
    inputValue: {
        name: '',
        id: 0,
        ava: '',
        title: '',
        mes: '',
        likes: 0
    }
}

const postsReducer = (state = initialState, action) => {
    if (action.type === ADD_POSTS_CARD) {
        let post = {
            name: state.inputValue.nameValue,
            ava: state.inputValue.avaValue,
            title: state.inputValue.titleValue,
            mes: state.inputValue.mesValue,
            likes: state.inputValue.likesValue,
        }
        state.cards.push(post)
        state.inputValue.nameValue = ''
        state.inputValue.avaValue = ''
        state.inputValue.titleValue = ''
        state.inputValue.mesValue = ''
        state.inputValue.likesValue = 0
    }
    return state
}

export const addPostsActionCreator = () => {
    return {type: ADD_POSTS_CARD}
}

export default postsReducer

