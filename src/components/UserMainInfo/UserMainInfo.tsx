import './UserMainInfo.scss'

interface UserMainInfoProps {
    imgSrc: string
    name: string
    email: string | null
    location: string
    created_at: string
    followers: number
    following: number
    bio: string | null
}

export const UserMainInfo = ({
    imgSrc,
    name,
    email,
    location,
    created_at,
    followers,
    following,
    bio,
}: UserMainInfoProps) => (
    <>
        <div className="user-main-info">
            <img className='user-main-info__img' src={imgSrc} alt={name} />
            <div className="user-main-info__text-wrapper">
                <p>{name}</p>
                {email ? <p>{email}</p> : <p>there isn't email</p>}
                <p>{location}</p>
                <p>{created_at}</p>
                <p>{followers} Followers</p>
                <p>Following {following}</p>
            </div>
        </div>
        {bio ? <p>{bio}</p> : <p>there isn't bio</p>}
    </>
)