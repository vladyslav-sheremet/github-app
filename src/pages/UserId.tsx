import {  useState } from 'react'

import { UserMainInfo } from '../components/UserMainInfo/UserMainInfo'
import { useFetchUser } from '../hooks/useFetchUser'
import { useFetchUserRepos } from '../hooks/useFetchUserRepos'
import { Repo } from '../components/Repo/Repo'
import { Search } from '../components/Search/Search'

export const UserId = () => {
    const { user } = useFetchUser()
    const { repos } = useFetchUserRepos()

    const [query, setQuery] = useState<string>('')

    const handleSeach = (event: React.KeyboardEvent<HTMLInputElement>): void => {
        const {target: {value}} = event
        setQuery(value)
    }

    const filteredRepos = repos.filter(repo => repo.name.includes(query))
    return (
        <div className='container'>
            <h1>GitHub Searcher</h1>
            <UserMainInfo
                imgSrc={user.avatar_url}
                name={user.name}
                email={user.email}
                location={user.location}
                created_at={user.created_at}
                followers={user.followers}
                following={user.following}
                bio={user.bio}
            />
            <Search handleChange={handleSeach} placeholder="Search for User's Repositories" />
            <ul>
                {filteredRepos.map(repo => (
                    <Repo
                        key={repo.id}
                        name={repo.name}
                        forks={repo.forks}
                        stars={repo.id}
                        clone_url={repo.clone_url}
                    />
                ))}
            </ul>
        </div>
    )
}