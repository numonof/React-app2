import './UserIntroduction.css'

function UserIntroduction({userName, userEmail}) {
const mailto =  `mailto:${userEmail}`
    return(
        <div className="userIntroduction">
            <h2 className='userName'>{userName}</h2>
            <a href={mailto} className='userEmail'>{userName}</a>
        </div>
    );
}
export default UserIntroduction;