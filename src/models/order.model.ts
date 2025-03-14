export interface OrderModel {
    orderId: number
    movieId: number
    count: number
    pricePerCard: string
    status: 'reserved' | 'paid' | 'canceled'
    rating: null | boolean
}