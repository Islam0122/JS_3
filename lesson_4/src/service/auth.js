import {api_url} from "../constansts/constansts.js";


class AuthService {
    getUser() {

    }
    deleteUser(id) {

    }
    updateUser(id, data) {

    }
    async  createUser(data) {
        const response = await fetch(api_url,{
            method: 'POST',
            body:   JSON.stringify(data),
            headers: {'Accept': 'application/json'},
        })
        return await response.json()
    }
}

export default new AuthService();