import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { IUserRepo } from '../models'

export const useFetchUserRepos =() => {
    let { userName } = useParams()
    const [repos, setRepos] = useState<IUserRepo[]>([])
    const fetchData = async () => {
        const response = await axios.get<IUserRepo[]>(`https://api.github.com/users/${userName}/repos`)
        setRepos(response.data)
        console.log(response)
    }

    useEffect(() => {
        fetchData()
    }, [])

    return { repos }
}