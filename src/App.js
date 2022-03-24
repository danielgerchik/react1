import './fonts.css'
import './reset.css';
import './App.css';
import Menu from "./components/Menu/Menu";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import MessagesContainer from "./components/Messages/MessagesContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import login from "./components/Login/Login";
import {Component} from "react";
import Preloader from "./components/common/Preloader/Preloader";
import {connect} from "react-redux";
import {initalization} from "./redux/reducers/app-reducer";


class App extends Component {

    componentDidMount() {
        this.props.initalization()
    }

    render() {
        if(!this.props.isInitalizated) {
            return <Preloader/>
        }
        return (
            <BrowserRouter>

                <div className="wrapper">
                    <HeaderContainer/>
                    <div className="main-row">
                        <Menu/>

                        <main className="content">
                            <Switch>
                                <Route path="/login" component={login}/>
                                <Route path="/profile/:userID?" component={ProfileContainer}/>
                                <Route path="/messages" component={MessagesContainer}/>
                                <Route path="/users" component={UsersContainer}/>
                                <Route path="/news" component={News}/>
                                <Route path="/music" component={Music}/>
                                <Route path="/settings" component={Settings}/>
                            </Switch>
                        </main>


                    </div>
                </div>

            </BrowserRouter>
        );
    }
}

const mapStateToProps = state => {
    return {
        isInitalizated: state.app.isInitalization
    }
}

export default connect(mapStateToProps, {initalization})(App);
