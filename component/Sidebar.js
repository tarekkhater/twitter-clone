import 'bootstrap/dist/css/bootstrap.css';
import {  useState } from 'react';
import styles from '../styles/Sidebar.module.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useSelector } from 'react-redux';
import {useSession , signOut} from 'next-auth/react'
import { useEffect } from 'react';
function Sidebar() {
  const {data : session} = useSession();
  console.log(session)
  
  
  useEffect(()=>{
    import("bootstrap/dist/js/bootstrap");
},[])
    const {profileImg , username , email } = useSelector(state => state.info)
   
    const [profile , setProfile] = useState();

  return (
    <div className={styles.container}>
      {session ? 
      (<div><img className={styles.logo} src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png' alt='logo'  />
      <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <p className="nav-link  " id={styles.home} data-bs-toggle="pill"  type="button"   ><i className="bi bi-house-door-fill"></i>&nbsp; Home</p>
          <p className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill"  type="button"   ><i className="bi bi-hash"></i>&nbsp; Explore</p>
          <p className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill"  type="button"   ><i className="bi bi-bell"></i>&nbsp; Notification</p>
          <p className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill"  type="button"   ><i className="bi bi-envelope"></i>&nbsp; Messages</p>
          <p className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill"  type="button"   ><i className="bi bi-bookmark"></i>&nbsp; Bookmarks</p>
          <p className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill"  type="button"   ><i className="bi bi-person"></i>&nbsp; Profile</p>
          <p className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill"  type=" button" onClick={()=>signOut()} ><i className="bi bi-gear" ></i>&nbsp; Sign out</p>
          <button className="btn btn-info" id={styles.tweet} >Tweet</button>
      </div>
      <div className={styles.prof}> 
        <img src={session.user.image} alt='' className={styles.imge}  />
        <h4 className={styles.username}>{session.user.name}</h4>
        <h6 className={styles.emaill}>{session.user.email}</h6>
        
    </div></div>):
     (<div>
      <img className={styles.logo} src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png' alt='logo'  />
      <p className="nav-link  " id={styles.home} data-bs-toggle="pill"  type="button"   ><i className="bi bi-house-door-fill"></i>&nbsp; Home</p>
       <p className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill"  type="button"   ><i className="bi bi-hash"></i>&nbsp; Explore</p>
      </div>) 
    }
        
        
    </div>
  )
}
export default Sidebar;