import { useState } from 'react'

import { Loader } from '../components/Loader/Loader'
import { ErrorMessage } from '../components/ErrorMessage/ErrorMessage'
import { User } from '../components/User/User'
import { Search } from '../components/Search/Search'
import {useFetchData} from '../hooks/useFetchData'


export const Home = () => {
    const [query, setQuery] = useState<string>('')

    const {data, loading, error} = useFetchData({query})

    const handleSeach = (event: React.KeyboardEvent<HTMLInputElement>): void => {
        const {target: {value}} = event
        setQuery(value)
    }

    return (
        <div className='container'>
            <h1>GitHub Searcher</h1>
            {loading && <Loader />}
            {error && <ErrorMessage error={error} />}
            <Search handleChange={handleSeach} placeholder='Search for Users' />
            {data.length ? data.map(user =>
                 <User key={user.id} user={user} />
            ) : <p>Users list is empty</p>}
        </div>
    )
}