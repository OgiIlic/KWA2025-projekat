import axios from "axios"

const client = axios.create({
    baseURL: 'https://movie.pequla.com/api',
    headers: {
        'Accept': 'application/json'
    },
    validateStatus: (status: number) => {
        return status === 200
    }
})

export class ActorService{
    static async getActors() {
            return client.request({
                url: '/actor',
                method: 'GET',
        })
    }
}