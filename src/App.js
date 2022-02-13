import './fonts.css'
import './reset.css';
import './App.css';
import Header from "./components/Header";
import Menu from "./components/Menu";
import Profile from "./components/Profile";


const App = () => {
    return (
        <div className="wrapper">
            <Header/>
            <div className="main-row">
                <Menu/>
                <main className="content">
                    <Profile/>
                </main>
            </div>
        </div>

    );
}


export default App;
