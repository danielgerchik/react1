import style from './User.module.css'


const User = props => {
    return (
        <div className={style.user}>
            <div>{props.name}</div>
            <div>{props.age}</div>
            <div>{props.citi}</div>
            <div className={style.img}><img src={props.photo}/></div>
            <div> <button onClick={() => {props.toggleFollow(props.id)}}>{props.followStatus}</button></div>
        </div>
    )
}

export default User