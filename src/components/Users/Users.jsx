import User from "./User/User";

const Users = props => {
    if(props.usersArray == 0) {
        props.setUsers([
            {id: 1, follow: true, name: 'Vasiliy', age: 27, citi: 'Novosibirsk',
                photoUrl: 'https://wac-cdn.atlassian.com/ru/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=225' },
            {id: 2, follow: false, name: 'Dmitry', age: 23, citi: 'Kazan',
                photoUrl: 'https://wac-cdn.atlassian.com/ru/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=225' },
            {id: 3, follow: false, name: 'Aleksey', age: 31, citi: 'Samara',
                photoUrl: 'https://wac-cdn.atlassian.com/ru/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=225' },
            {id: 4, follow: true, name: 'Alexander', age: 40, citi: 'Tomsk',
                photoUrl: 'https://wac-cdn.atlassian.com/ru/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=225' },
        ])
    }
    const user = props.usersArray.map(e => <User name={e.name} age={e.age} citi={e.citi} photo={e.photoUrl}
                                                 followStatus={e.follow === true ? 'unfollow' : 'follow'} toggleFollow={props.toggleFollow} id={e.id}/>)
    return (
        <div>
            {user}
        </div>
    )
}

export default Users