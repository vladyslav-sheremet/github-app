export interface IUserRepo {
    readonly id: number
    readonly name: string
    readonly forks: number
}

export interface IUser {
    readonly id: number
    readonly login: string
    readonly avatar_url: string
    readonly name: string
    readonly public_repos: number
    readonly email: string
    readonly location: string
    readonly created_at: string
    readonly followers: number
    readonly following: number
    readonly bio: string
}