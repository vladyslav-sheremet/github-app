import './Repo.scss'

interface RepoProps {
    name: string
    forks: number
    stars: number
    clone_url: string
}

export const Repo = ({ name, forks, stars, clone_url }: RepoProps) => {
    console.log(clone_url)
    return (
        <a target='_blank' href={clone_url}>
            <div className='repo'>
                <p className='repo__name'>{name}</p>
                <div className='repo__info'>
                    <p>{forks}</p>
                    <p>{stars}</p>
                </div>
            </div>
        </a>
    )
}