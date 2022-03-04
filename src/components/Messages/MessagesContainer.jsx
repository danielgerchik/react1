import {addMessage, changeMessageText} from "../../redux/reducers/messagePage-reducer";
import Messages from "./Messages";
import {connect} from "react-redux";


// const MessagesContainer = props => {
//     return <contextStore.Consumer>
//         { (store) => {const interlocutorsArray = store.getState().messagesPage.interlocutorsArray
//             const dialogsArray = store.getState().messagesPage.dialogsArray
//             const newMessageText = store.getState().messagesPage.newMessageText
//             const sendMassage = ()=> {
//             store.dispatch(addMessage())
//         }
//             const changeText = value => {
//             store.dispatch(changeMessageText(value))
//         }
//             return <Messages interlocutorsArray={interlocutorsArray} dialogsArray={dialogsArray} sendMessage={sendMassage}
//             changeText={changeText} newMessageText={newMessageText}/>
//
//             }}
//     </contextStore.Consumer>
// }

const mapStateToProps = state => {
    return {
        interlocutorsArray: state.messagesPage.interlocutorsArray,
        dialogsArray: state.messagesPage.dialogsArray,
        newMessageText: state.messagesPage.newMessageText,
        authData: state.auth.authData
    }
}
// const mapDispatchToProps = dispatch => {
//     return {
//         sendMessage: ()=> {
//             dispatch(addMessage())
//         },
//         changeText: value => {
//             dispatch(changeMessageText(value))
//         }
//     }
// }

const MessagesContainer = connect(mapStateToProps, {addMessage, changeMessageText})(Messages);



export default MessagesContainer;



