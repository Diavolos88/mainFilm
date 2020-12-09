import * as axios from "axios"

const instans = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {"API-KEY": '8590e90d-01e0-4847-847c-db8ee78fb5fe'}
});


export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 4) {
        return instans.get(`users?page=${currentPage}&count=${pageSize}`
        ).then(response => response.data)
    },
    follow(id) {
        return instans.post(`follow/${id}`).then(response => response.data)
    },
    unfollow(id) {
        return instans.delete(`follow/${id}`).then(response => response.data)
    },
    author() {
        return instans.get(`auth/me/`).then(response => response.data)
    },
    getOneUser(id) {
        return instans.get(`profile/${id}`).then(response => response.data)
    }
}
