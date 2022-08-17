import 'bootstrap/dist/css/bootstrap.css';
import {  useState } from 'react';
import styles from '../styles/Sidebar.module.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import { useEffect } from 'react';

function Sidebar() {
  const [show , setShow] = useState(true);
  useEffect(()=>{
    import("bootstrap/dist/js/bootstrap");
},[])
    const {profileImg , username , email } = useSelector(state => state.info)
    const [profile , setProfile] = useState(<div>
        {profileImg}
        <span className={styles.username}>{username}</span>
        <h6 className={styles.emaill}>{email}</h6>
        
    </div>);

  return (
    <div className={styles.container}>
      {show? (<div> <button className="btn btn-info" id={styles.tweet} onClick={() => setShow(false)} >Sign in</button> </div>) : 
      (<div><img className={styles.logo} src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png' alt='logo'  />
      <div className="nav flex-column nav-pills me-3" id="v-pills-tab" role="tablist" aria-orientation="vertical">
          <p className="nav-link  " id={styles.home} data-bs-toggle="pill"  type="button"   ><i className="bi bi-house-door-fill"></i>&nbsp; Home</p>
          <p className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill"  type="button"   ><i className="bi bi-hash"></i>&nbsp; Explore</p>
          <p className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill"  type="button"   ><i className="bi bi-bell"></i>&nbsp; Notification</p>
          <p className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill"  type="button"   ><i className="bi bi-envelope"></i>&nbsp; Messages</p>
          <p className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill"  type="button"   ><i className="bi bi-bookmark"></i>&nbsp; Bookmarks</p>
          <p className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill"  type="button"   ><i className="bi bi-person"></i>&nbsp; Profile</p>
          <p className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill"  type=" button" ><i className="bi bi-gear"></i>&nbsp; Settings</p>
          <button className="btn btn-info" id={styles.tweet} >Tweet</button>
      </div>
      <div className={styles.prof}> {profile}</div></div>)}
        
        
    </div>
  )
}
export default Sidebar;