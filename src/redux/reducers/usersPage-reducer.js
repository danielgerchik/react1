const TOGGLEFOLLOW = 'TOGGLE-FOLLOW'
const SETUSERS = 'SET-USERS'
const SETTOTALCOUNT = 'SET-TOTAL-COUNT'
const SETCURRENTPAGE = 'SET-CURRENT-PAGE'

const users = [
    {id: 1, follow: true, name: 'Vasiliy', age: 27, citi: 'Novosibirsk',
        photoUrl: 'https://wac-cdn.atlassian.com/ru/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=225' },
    {id: 2, follow: false, name: 'Dmitry', age: 23, citi: 'Kazan',
        photoUrl: 'https://wac-cdn.atlassian.com/ru/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=225' },
    {id: 3, follow: false, name: 'Aleksey', age: 31, citi: 'Samara',
        photoUrl: 'https://wac-cdn.atlassian.com/ru/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=225' },
]
const stateInit = {
    users: [],
    usersCount: 5,
    usersTotalCount: 0,
    usersPage: 1

}

const usersPageReducer = (state = stateInit, action) => {

    switch (action.type) {
        case TOGGLEFOLLOW:
            return {
                ...state,
                users: state.users.map(e => {
                    if(e.id === action.userID) {
                       return {
                           ...e,
                           followed: !e.followed,
                       }
                    }
                    return e
                })
            }
        case SETUSERS:
            return {
                ...state,
                users:  [...action.users]
            }
        case SETTOTALCOUNT:
            return {
                ...state,
                usersTotalCount:  action.totalCount
            }
        case SETCURRENTPAGE:
            return {
                ...state,
                usersPage:  action.currentPage
            }

        default:
            return state

    }
}

export const toggleFollowAC = userID => ({type: TOGGLEFOLLOW, userID: userID})
export const setUsersAC = users => ({type: SETUSERS, users: users})
export const setTotalCountAC = totalCount => ({type: SETTOTALCOUNT, totalCount})
export const setCurrentPageAC = currentPage => ({type: SETCURRENTPAGE, currentPage})

export default usersPageReducer