import s from "./Info.module.css";
import Preloader from "../../common/Preloader/Preloader";
import profileIMG from "../../../img/25.jpg"
import React from "react";

class Info extends React.Component {

    state = {
        editMode: false,
        status: this.props.status,
    }
    enableEditMode = () => {
        this.setState(
            {
                editMode: true,
            }
        )
    }
    stopEditMode = (el) => {
        this.setState(
            {
                editMode: false,
            }
        )
        this.props.setStatus({status: el.target.value})
    }
    onChange = el => {
        this.setState(
            {
                status: el.target.value
            }
        )
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(prevState.status);
        if(this.props.status !== prevState.status) {
            this.setState(
                {
                    status: this.props.status,
                }
            )
        }
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
                                ? <input autoFocus={true} onBlur={this.stopEditMode} onChange={this.onChange} value={this.state.status}/>
                                : <div onClick={this.enableEditMode}>{this.props.status || 'no status'}</div>
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