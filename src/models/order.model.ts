import { MovieActorModel } from "./movieActor.model"

export interface OrderModel {
    id: any
    movieId: number
    title: string
    count: number
    pricePerCard: number
    status: 'reserved' | 'paid' | 'canceled'
    rating: null | boolean
}