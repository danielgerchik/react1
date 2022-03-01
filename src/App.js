import './fonts.css'
import './reset.css';
import './App.css';
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route, Routes, Switch} from "react-router-dom";
import MessagesContainer from "./components/Messages/MessagesContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


const App = props => {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <HeaderContainer/>
                <div className="main-row">
                    <Menu/>

                    <main className="content">
                        <Switch>
                            {/*<Route path="/profile/*" element={<ProfileContainer/>}/>*/}
                            {/*<Route path="/profile" component={ProfileContainer}/>*/}
                            <Route path="/profile/:userID?" component={ProfileContainer}/>
                            {/*<Route path="/messages" element={<MessagesContainer/>}/>*/}
                            <Route path="/messages" component={MessagesContainer}/>
                            {/*<Route path="/users" element={<UsersContainer/>}/>*/}
                            <Route path="/users" component={UsersContainer}/>
                            {/*<Route path="/news" element={<News/>}/>*/}
                            <Route path="/news" component={News}/>
                            {/*<Route path="/music" element={<Music/>}/>*/}
                            <Route path="/music" component={Music}/>
                            {/*<Route path="/settings" element={<Settings/>}/>*/}
                            <Route path="/settings" component={Settings}/>
                        </Switch>
                    </main>


                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
