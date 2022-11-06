import './ProfileCard.css';
import Avatar from '../Avatar/Avatar';
import UserIntroduction from '../UserIntroduction/UserIntroduction';
function ProfileCard({user}){
    return (
        <div className="wrapper" id={user.id} >
        <Avatar src={user.avatar} alt={user.first_name} />
        <UserIntroduction userName={`${user.first_name}, ${user.last_name}` } userEmail = {user.email} />
      </div>
    );
}
export default ProfileCard;