import usersPageReducer, {setUsers} from "./usersPage-reducer";

const stateInit = {
    users: [],
    usersCount: 5,
    usersTotalCount: 0,
    usersPage: 1,
    isFetching: false,
    disabledButtons: []
}

test('users should be added', ()=> {
    const action = setUsers([{name: 'Alexander'}, {name: 'Nikita'}])
    const newState = usersPageReducer(stateInit, action)
    expect(newState.users.length).toBe(2)
})