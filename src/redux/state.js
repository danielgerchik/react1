const store = {
    rerender () {
        console.log('1')
    },
     importRerenderFunction (rerenderFunction) {
        this.rerender = rerenderFunction
    },

    state : {
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




     addPost() {
        const newMessage = {number: this.state.profilePage.newText};
         this.state.profilePage.postsArray.push(newMessage)
         this.state.profilePage.newText = ''
        this.rerender(this)
    },

     changeNewTextValue(NewTextValue) {
         this.state.profilePage.newText = NewTextValue
         this.rerender(this)
    },
}

export default store;

window.store = store;