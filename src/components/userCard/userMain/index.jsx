import './userMain.css'



function Main(props) {
    const {facebook, twitter, googlePlus, linkedIn} = props.svg
    return(
        <div>
            <article className='textContent'>
                <p>
                    {props.info.description}
                </p>
            </article>
            <article className='links'>
                <div className='buttons'>
                    <a href='#'>Message</a>
                    <a href='#'>Following</a>
                </div>
                <div className='netsLinks'>
                    <a href="https://www.facebook.com/">{facebook}</a>
                    <a href="https://twitter.com/">{twitter}</a>
                    <a href="https://myaccount.google.com">{googlePlus}</a>
                    <a href="https://www.linkedin.com/">{linkedIn}</a>
                </div>
            </article>
        </div>
    )
}

export default Main