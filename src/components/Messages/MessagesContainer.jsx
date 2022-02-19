import {createActionaddMessage, createActionchangeMessageText} from "../../redux/reducers/messagePage-reducer";
import Messages from "./Messages";
import {connect} from "react-redux";


// const MessagesContainer = props => {
//     return <contextStore.Consumer>
//         { (store) => {const interlocutorsArray = store.getState().messagesPage.interlocutorsArray
//             const dialogsArray = store.getState().messagesPage.dialogsArray
//             const newMessageText = store.getState().messagesPage.newMessageText
//             const sendMassage = ()=> {
//             store.dispatch(createActionaddMessage())
//         }
//             const changeText = value => {
//             store.dispatch(createActionchangeMessageText(value))
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
        newMessageText: state.messagesPage.newMessageText
    }
}
const mapDispatchToProps = dispatch => {
    return {
        sendMassage: ()=> {
            dispatch(createActionaddMessage())
        },
        changeText: value => {
            dispatch(createActionchangeMessageText(value))
        }
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);



export default MessagesContainer;



