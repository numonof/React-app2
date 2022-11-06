import './UserProfiles.css'
import ProfileCard from '../ProfileCard/ProfileCard'
function UserProflies({users}) {
      const UserProfiles = users.map(user =>{
        return(
          <ProfileCard user = {user} />
        )
       })
       return UserProfiles;
}
export default UserProflies;