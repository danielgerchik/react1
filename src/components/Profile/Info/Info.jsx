import s from "./Info.module.css";
import Preloader from "../../common/Preloader/Preloader";
import profileIMG from "../../../img/25.jpg"
import React from "react";

class Info extends React.Component {

    state = {
        editMode: false,
    }
    enableEditMode = () => {
        this.setState(
            {
                editMode: true,
            }
        )
    }
    stopEditMode = () => {
        this.setState(
            {
                editMode: false,
            }
        )
    }

    render() {
        if (!this.props.userProfile) {
            return <Preloader/>
        }
        return (
            <div className={s.about}>
                <div className={s.img}>
                    <img
                        src={this.props.userProfile.photos.large || 'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg'}
                        alt=""/>
                </div>
                <div className={s.secription}>
                    <div className={s.status}>
                        {
                            this.state.editMode
                                ? <input autoFocus={true} onBlur={this.stopEditMode} value={this.props.status}/>
                                : <div onClick={this.enableEditMode}>{this.props.status}</div>
                        }
                    </div>

                    <div className={s.name}>{this.props.userProfile.fullName}</div>
                    <div className={s.aboutMe}>{this.props.userProfile.aboutMe}
                    </div>
                </div>
            </div>
        )
    }

}

export default Info;