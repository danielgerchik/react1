import {usersAPI} from "../../API/api";

const TOGGLEFOLLOW = 'USERSPAGE-REDUCER/TOGGLE-FOLLOW'
const SETUSERS = 'USERSPAGE-REDUCER/SET-USERS'
const SETTOTALCOUNT = 'USERSPAGE-REDUCER/SET-TOTAL-COUNT'
const SETCURRENTPAGE = 'USERSPAGE-REDUCER/SET-CURRENT-PAGE'
const CHANGEFETCHING = 'USERSPAGE-REDUCER/CHANGE-FETCHING'
const TOGGLEDISABLEDBATTONS = 'USERSPAGE-REDUCER/TOGGLE-DISABLED-BATTONS'

const users = [
    {
        id: 1, follow: true, name: 'Vasiliy', age: 27, citi: 'Novosibirsk',
        photoUrl: 'https://wac-cdn.atlassian.com/ru/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=225'
    },
    {
        id: 2, follow: false, name: 'Dmitry', age: 23, citi: 'Kazan',
        photoUrl: 'https://wac-cdn.atlassian.com/ru/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=225'
    },
    {
        id: 3, follow: false, name: 'Aleksey', age: 31, citi: 'Samara',
        photoUrl: 'https://wac-cdn.atlassian.com/ru/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=225'
    },
]
const stateInit = {
    users: [],
    usersCount: 5,
    usersTotalCount: 0,
    usersPage: 1,
    isFetching: false,
    disabledButtons: []
}

const usersPageReducer = (state = stateInit, action) => {
    switch (action.type) {
        case TOGGLEFOLLOW:
            return {
                ...state,
                users: state.users.map(e => {
                    if (e.id === action.userID) {
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
                users: [...action.users]
            }
        case SETTOTALCOUNT:
            return {
                ...state,
                usersTotalCount: action.totalCount
            }
        case SETCURRENTPAGE:
            return {
                ...state,
                usersPage: action.currentPage
            }
        case CHANGEFETCHING:
            return {
                ...state,
                isFetching: action.fetchingValue
            }
        case TOGGLEDISABLEDBATTONS:
            return {
                ...state,
                disabledButtons: action.disableStatus
                    ? [...state.disabledButtons, action.newButt]
                    : state.disabledButtons.filter(el => el != action.newButt)
            }

        default:
            return state

    }
}

export const toggleFollow = userID => ({type: TOGGLEFOLLOW, userID})
export const setUsers = users => ({type: SETUSERS, users})
export const setTotalCount = totalCount => ({type: SETTOTALCOUNT, totalCount})
export const setCurrentPage = currentPage => ({type: SETCURRENTPAGE, currentPage})
export const changeFetching = fetchingValue => ({type: CHANGEFETCHING, fetchingValue})
export const toggleDisabledButtons = (disableStatus, newButt) => ({type: TOGGLEDISABLEDBATTONS, disableStatus, newButt})

export const getUsers = (page, count) => {
    return async dispatch => {
       dispatch(setCurrentPage(page))
        dispatch(changeFetching(true))
      const data = await usersAPI.getUsers(page, count)
                dispatch(setUsers(data.items))
                dispatch(setTotalCount(data.totalCount))
                dispatch(changeFetching(false))
    }
}

export const deleteFollow = (ID) => {
    return async dispatch => {
        dispatch(toggleDisabledButtons(true, ID))
        const data = await usersAPI.deleteFollow(ID)
                if (data.resultCode === 0) {
                    dispatch(toggleFollow(ID))
                }
                dispatch(toggleDisabledButtons(false,ID))
    }
}
export const addFollow = (ID) => {
    return async dispatch => {
        dispatch(toggleDisabledButtons(true, ID))
      const data = await usersAPI.createFollow(ID)
                if (data.resultCode === 0) {
                    dispatch(toggleFollow(ID))
                }
                dispatch(toggleDisabledButtons(false,ID))
    }
}

export default usersPageReducer