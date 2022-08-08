import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import { IUser } from '../models'

export const useFetchUser = () => {
    let { userName } = useParams()
    const [user, setUser] = useState<IUser>({} as IUser)

    const fetchUser = async () => {
        const response = await axios.get(`https://api.github.com/users/${userName}`)
        setUser(response.data)
    }

    useEffect(() => {
        fetchUser()
    }, [userName])

    return { user }
}