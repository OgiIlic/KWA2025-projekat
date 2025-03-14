export interface MovieActorModel {
    movieActorId: number
    movieId: number
    actorId: number
    actor: {
        actorId: number
        name: string
        createdAt: string
    }
}