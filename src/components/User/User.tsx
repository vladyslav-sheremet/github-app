import { Link } from 'react-router-dom'

import { IUser } from '../../models'

import './User.scss'


interface UserProps {
    user: IUser
}

export const User = ({ user }: UserProps) => (
    <Link to={`${user.login}`}>
        <div className='user'>
            <div className="user__inner-wrapper">
                <img className="user-img" src={user.avatar_url} alt={user.login} />
                <p className="user-name">{user.login}</p>
            </div>
            <p className="user-repo">Repo: {user.public_repos}</p>
        </div>
    </Link>

)