import './Repo.scss'

interface RepoProps {
    name: string
    forks: number
    stars: number
}

export const Repo = ({ name, forks, stars }: RepoProps) => {
    return (
        <div className='repo'>
            <p className='repo__name'>{name}</p>
            <div className='repo__info'>
                <p>{forks}</p>
                <p>{stars}</p>
            </div>
        </div>
    )
}