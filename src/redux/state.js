import profilePageReducer from "./profilePage-reducer";
import messagePageReducer from "./messagePage-reducer";


const store = {
    _rerender() {
        console.log('1')
    },

    _state: {
        profilePage: {
            postsArray: [
                {number: "Post1"},
                {number: "Post2"},
                {number: "Post3"},
            ],
            newText: '',
        },
        messagesPage: {
            interlocutorsArray: [
                {path: 'vanya', name: 'Ваня'},
                {path: 'masha', name: 'Маша'},
                {path: 'tanya', name: 'Таня'},
                {path: 'sasha', name: 'Саша'},
            ],
            dialogsArray: [
                {dialogItem: 'Привет'},
                {dialogItem: 'Как дела ?'},
                {dialogItem: 'Че делаешь ?'},
                {dialogItem: 'Всё ок'},
            ],
            newMessageText: '',
        }
    },

    importRerenderFunction(rerenderFunction) {
        this._rerender = rerenderFunction
    },

    getState() {
        return this._state;
    },


    dispatch(action) {
        this._state.profilePage = profilePageReducer(this._state.profilePage,action)
        this._state.messagesPage = messagePageReducer(this._state.messagesPage,action)
        this._rerender(this)
    }
}

export default store;





