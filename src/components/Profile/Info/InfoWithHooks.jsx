import s from "./Info.module.css";
import Preloader from "../../common/Preloader/Preloader";
import profileIMG from "../../../img/25.jpg"
import React, {useEffect, useState} from "react";
import userDefaultPhotoLarge from '../../../img/userDefaultLarge.png'

const InfoWithHooks = props => {
  const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(
        ()=> {
            setStatus(props.status)
        },
        [props.status]
    )

    const enableEditMode = ()=> {
        setEditMode(true)
    }
    const stopEditMode = (el)=> {
        setEditMode(false)
        props.setStatus({status: el.target.value})
    }
    const onChange = (el)=> {
        setStatus(el.target.value)
    }
    const onSelectedPhoto = event=> {
        props.setPhoto(event.target.files[0])
    }

        if (!props.userProfile) {
            return <Preloader/>
        }
        return (
            <div className={s.about}>
                <div className={s.img}>
                    <img
                        src={props.userProfile.photos.large || userDefaultPhotoLarge}
                        alt=""/>
                    {props.isMyProfile && <div className={s.addPhoto}><input onChange={onSelectedPhoto} type="file"/></div>}
                </div>

                <div className={s.secription}>
                    <div className={s.status}>
                        {
                            editMode
                                ? <input autoFocus={true} onBlur={stopEditMode} onChange={onChange} value={status}/>
                                : <div onClick={enableEditMode}>{props.status || 'no status'}</div>
                        }
                    </div>

                    <div className={s.name}>{props.userProfile.fullName}</div>
                    <div className={s.aboutMe}>{props.userProfile.aboutMe}
                    </div>
                </div>
            </div>
        )


}

export default InfoWithHooks;