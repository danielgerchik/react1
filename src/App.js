import './fonts.css'
import './reset.css';
import './App.css';
import Header from "./components/Header/Header";
import Menu from "./components/Menu/Menu";
import Profile from "./components/Profile/Profile";
import Messages from "./components/Messages/Messages";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Routes, Route,  BrowserRouter as Router} from "react-router-dom";



const App = props => {
    return (
        <Router>
            <div className="wrapper">
                <Header/>
                <div className="main-row">
                    <Menu/>

                    <main className="content">
                        <Routes>
                            <Route path="/profile" element={<Profile dataPosts={props.store.getState().profilePage} dispatch={props.store.dispatch.bind(props.store)}/>}/>
                            <Route path="/messages" element={<Messages dataMessage={props.store.getState()} dispatch={props.store.dispatch.bind(props.store)}/>}/>
                            <Route path="/news" element={<News/>}/>
                            <Route path="/music" element={<Music/>}/>
                            <Route path="/settings" element={<Settings/>}/>
                        </Routes>
                    </main>


                </div>
            </div>
        </Router>
    );
}


export default App;
