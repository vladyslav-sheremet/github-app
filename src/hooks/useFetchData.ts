import { useEffect, useState } from 'react'
import { AxiosError } from 'axios'

import { IUser } from '../models'
import axiosInstance from '../api'

interface useFetchDataProps {
    query: string
}

export const useFetchData = ({query}: useFetchDataProps) => {
    const [data, setData] = useState<IUser[]>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<string>('')

    const fetchData = async () => {
        if (query) {
            try {
                setError('')
                setLoading(true)
                const response = await axiosInstance.get<IUser>(`/users/${query}`)
                const {id} = response.data as IUser
                if (data.some(user => user.id === id)) {
                    return
                }
                setData([...data, response.data])
                const localUSersNew = localStorage.getItem('localUsers')
                let existingUsers = localUSersNew === null ? ([]) : JSON.parse(localUSersNew)
                const localUsers = [...existingUsers, response.data]
                localStorage.setItem('localUsers', JSON.stringify(localUsers))
                setLoading(false)
            } catch (e: unknown) {
                const error = e as AxiosError
                setLoading(false)
                setError(error.message)
            }
        } else {
            const localUSersNew = localStorage.getItem('localUsers')
            let existingUsers2 = localUSersNew === null ? ([]) : JSON.parse(localUSersNew)
            setData(existingUsers2)
        }
    }

    useEffect(() => {
        fetchData()
    }, [query])

    return { data, loading, error }
}