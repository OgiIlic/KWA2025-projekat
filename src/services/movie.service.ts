import { HttpClient } from "@angular/common/http";
import axios from "axios"
import { Observable } from "rxjs";

const client = axios.create({
    baseURL: 'https://movie.pequla.com/api',
    headers: {
        'Accept': 'application/json'
    },
    validateStatus: (status: number) => {
        return status === 200
    }
})

export class MovieService {
    static async getMovies(page: number = 0, size: number = 10) {
        return client.request({
            url: '/movie',
            method: 'GET',
            params: {
                'page': page,
                'size': size,
                'sort': 'startDate asc'
            }
        })
    }

    static async getMovieById(movieId: number) {
        return client.get(`/movie/${movieId}`)
    }

    static async getGenres() {
        return client.get('/genre')
    }
}