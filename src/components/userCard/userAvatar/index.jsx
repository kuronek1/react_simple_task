import userPhoto from '../../../img/profileIcon.jpg'
import './avatar.css'



function UserAvatar(props) {
    const {firstName, lastName} = props.info
    return (
        <article className='userInfo'>
            <img src={userPhoto} alt={'logo'} />
            <h2 className='userName'>{firstName} {lastName}</h2>
        </article>
    )
}

export default UserAvatar