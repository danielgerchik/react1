import React, {Suspense} from "react";
import './fonts.css'
import './reset.css';
import './App.css';
import Menu from "./components/Menu/Menu";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, HashRouter, Route, Switch} from "react-router-dom";
import MessagesContainer from "./components/Messages/MessagesContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
// import login from "./components/Login/Login";
import {Component} from "react";
import Preloader from "./components/common/Preloader/Preloader";
import {connect, Provider} from "react-redux";
import {initalization} from "./redux/reducers/app-reducer";
import store from "./redux/redux-store";

const login = React.lazy(() => import("./components/Login/Login"))

class App extends Component {

    componentDidMount() {
        this.props.initalization()
    }

    render() {
        if (!this.props.isInitalizated) {
            return <Preloader/>
        }
        return (


            <div className="wrapper">
                <HeaderContainer/>
                <div className="main-row">
                    <Menu/>

                    <main className="content">
                        <Suspense fallback={<Preloader/>}>
                            <Switch>
                                <Route path="/login" component={login}/>
                                <Route path="/profile/:userID?" component={ProfileContainer}/>
                                <Route path="/messages" component={MessagesContainer}/>
                                <Route path="/users" component={UsersContainer}/>
                                <Route path="/news" component={News}/>
                                <Route path="/music" component={Music}/>
                                <Route path="/settings" component={Settings}/>

                            </Switch>
                        </Suspense>
                    </main>


                </div>
            </div>


        );
    }
}

const mapStateToProps = state => {
    return {
        isInitalizated: state.app.isInitalization
    }
}

const AppContainer = connect(mapStateToProps, {initalization})(App);

const AppContainerWith = () => {
    return <HashRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </HashRouter>
}
export default AppContainerWith
