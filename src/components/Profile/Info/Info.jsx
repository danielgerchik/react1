import s from "./Info.module.css";
import Preloader from "../../common/Preloader/Preloader";
import profileIMG from "../../../img/25.jpg"


const Info = (props) => {
if(!props.userProfile) {
    return <Preloader/>
}
    return (
        <div className={s.about}>
            <div className={s.img}>
                <img src={props.userProfile.photos.large || 'https://klike.net/uploads/posts/2019-03/1551511784_4.jpg'} alt=""/>
            </div>
            <div className={s.secription}>
                <div className={s.name}>{props.userProfile.fullName}</div>
                <div className={s.aboutMe}>{props.userProfile.aboutMe}
                </div>
            </div>
        </div>
    )
}
export default Info;