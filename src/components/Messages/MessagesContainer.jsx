import {addMessage, changeMessageText} from "../../redux/reducers/messagePage-reducer";
import Messages from "./Messages";
import {connect} from "react-redux";
import {WithRedirect} from "../../HOC/withRedirect";
import {compose} from "redux";



const mapStateToProps = state => {
    return {
        interlocutorsArray: state.messagesPage.interlocutorsArray,
        dialogsArray: state.messagesPage.dialogsArray,
        newMessageText: state.messagesPage.newMessageText,
    }
}



export default compose(
    WithRedirect,
    connect(mapStateToProps, {addMessage, changeMessageText})
)(Messages)


// WithRedirect(connect(mapStateToProps, {addMessage, changeMessageText})(Messages));







