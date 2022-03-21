import axios from "axios";

const instanse = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '258464ba-87e1-40fc-aa23-32d1f0b13fe8'
    }
})

export const usersAPI = {
    getUsers(userPage, userCount) {
        return instanse.get(`users?page=${userPage}&count=${userCount}`).then(response => response = response.data)
    },
    createFollow(ID) {
        return  instanse.post(`follow/${ID}`).then(response => response = response.data)
    },
    deleteFollow(ID) {
        return  instanse.delete(`follow/${ID}`).then(response => response = response.data)
    }
}

export const authAPI = {
    getAuth() {
        return instanse.get(`auth/me`).then(response => response = response.data)
    },
    login(email, password, rememberMe) {
        return instanse.post(`auth/login`, {email, password, rememberMe}).then(response => response = response.data)
    },
    logout() {
        return instanse.delete(`auth/login`).then(response => response = response.data)
    }
}
export const profileAPI = {
    getProfile(ID) {
        return instanse.get(`profile/${ID}`).then(response => response = response.data)
    }
}

export const statusAPI = {
    getStatus(ID) {
        return instanse.get(`profile/status/${ID}`).then(response => response = response.data)
    },
    setStatus(status) {
        return instanse.put(`profile/status`, {status: status})
    }
}
