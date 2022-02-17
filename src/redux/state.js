const store = {
    _rerender () {
        console.log('1')
    },

    _state : {
        profilePage: {
            postsArray: [
                {number: "Post1"},
                {number: "Post2"},
                {number: "Post3"},
            ],
            newText: '',
        },
        messagesPage: {
            interlocutorsArray:  [
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
        }
    },

    importRerenderFunction (rerenderFunction) {
        this._rerender = rerenderFunction
    },

    getState() {
        return this._state;
    },
    

    dispatch(action) {
        if(action.type === 'ADD-POST') {
            const newMessage = {number: this._state.profilePage.newText};
            this._state.profilePage.postsArray.push(newMessage)
            this._state.profilePage.newText = ''
            this._rerender(this)
        } else if(action.type === 'CHANGE-TEXT-VALUE') {
            this._state.profilePage.newText = action.newText
            this._rerender(this)
        }
    }
}

export default store;

window.store = store;