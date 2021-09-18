import userPhoto from '../../../img/profileIcon.jpg'
import './avatar.css'


function UserAvatar() {
    return (
        <article className='userInfo'>
            <img src={userPhoto} alt={'logo'} />
            <h2 className='userName'>Ivan Ivanov</h2>
        </article>
    )
}

export default UserAvatar