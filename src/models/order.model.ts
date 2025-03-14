import { MovieActorModel } from "./movieActor.model"

export interface OrderModel {
    orderId: number
    movieId: number
    movieActors: MovieActorModel
    count: number
    pricePerCard: string
    status: 'reserved' | 'paid' | 'canceled'
    rating: null | boolean
}