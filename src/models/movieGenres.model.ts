import { GenreModel } from "./genre.model"

export interface MovieGenresModel {
    movieGenreId: number
    movieId: number
    genreId: number
    genre: {
        genreId: number
        name: string
        createdAt: string
    }
}