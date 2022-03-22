import {createSelector} from "reselect";


const getUsersArraySimple = state => {
    return state.usersPage.users
}

export const getUsersArray = createSelector(getUsersArraySimple, users => {
    return users.filter(u => true)
})

export const getUsersCount = state => {
    return state.usersPage.usersCount
}
export const getUsersTotalCount = state => {
    return state.usersPage.usersTotalCount
}
export const getUserPage = state => {
    return state.usersPage.usersPage
}
export const getIsFetching = state => {
    return state.usersPage.isFetching
}
export const getDisabledButtons = state => {
    return state.usersPage.disabledButtons
}
