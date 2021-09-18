import './card.css'
import UserAvatar from './userAvatar/index'
import Main from './userMain';

function Card() {
    return (
        <article className='userCard'>
            <UserAvatar />
            <Main /> 
        </article>
    )
}

export default Card;