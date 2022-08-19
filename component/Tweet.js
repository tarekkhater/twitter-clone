import { useSelector } from 'react-redux';
import styles from '../styles/Tweet.module.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {useSession } from 'next-auth/react'

function Tweet() {
  
    const profileImge = useSelector(state => state.info.profileImgInput)
  return (
    <div className={styles.container}>
       <div className="row">
            <div className="col">
                <h5>Home</h5>   
            </div>
       </div>
       <div className="row" id={styles.tweet}>
            <div className="col-1">
            <img src={profileImge} />     
            </div>
            <div className="col-11" >
                <textarea className={styles.post} placeholder=" What's happenning"></textarea>
                <div className={styles.emoji}>
                &nbsp;<i id={styles.emoji} className="bi bi-images"></i>&nbsp; &nbsp;<i id={styles.emoji} className="bi bi-emoji-smile"></i>
                <button type="button"id={styles.btn} className="btn btn-primary">Tweet</button>
                </div>
                <hr />
            </div>
       </div>
      
    </div>
  )
}
export default  Tweet;