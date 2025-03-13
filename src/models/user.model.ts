export interface UserModel {
    email: string
    password: string
    orders: {
        orderId: number
        movieId: number
        count: number
        pricePerCard: string
        status: 'reserved' | 'paid' | 'canceled'
        rating: null | boolean
    }[]
}