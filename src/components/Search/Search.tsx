import {debounce} from 'lodash'

import './Search.scss'

interface SearchProps {
    handleChange: (event: React.KeyboardEvent<HTMLInputElement>) => void
    placeholder: string
}

export const Search = ({ handleChange, placeholder }: SearchProps) => {
    return (
        <input
            className='input'
            type="text"
            placeholder={placeholder}
            onChange={debounce(handleChange, 2000)}
        />
    )
}