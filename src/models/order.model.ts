import { MovieActorModel } from "./movieActor.model"

export interface OrderModel {
    movieId: number
    title: string
    count: number
    pricePerCard: number
    status: 'reserved' | 'paid' | 'canceled'
    rating: null | boolean
}