import Tweet from "./Tweet";
import { useSelector } from "react-redux";
import styles from '../styles/Feeds.module.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import {useSession } from 'next-auth/react'
export default function Feeds({feeds}) {
  const {data:session} = useSession();
    var {profileImgInput , username , email , time} = useSelector(state => state.info)
    const feedss  = feeds.map((feed)=> (
        <div key={feed.title} className={styles.feed}> 
           <div className={styles.profile}>
            <span className={styles.postProfile}>{profileImgInput}</span>
                <div className={styles.text}>
                    <p className={styles.username}>{username}</p>
                    <p className={styles.emaill}>{email} -{ time >= 24? ( <span>{1} day ago</span> ) :(<span>{time +=1} hours ago</span>)}  </p>

                </div>
           </div >
              <div className={styles.image}>
            <img src={feed.urlToImage} alt='' className={styles.postImg} />
            <div className={styles.row}>
                <span id={styles.comments}><i  className="bi bi-chat-dots"></i></span>
                <span id={styles.comments} ><i  className="bi bi-trash3"></i></span>
                <span id={styles.comments}> <i  className="bi bi-heart"></i></span>
                <span id={styles.comments}><i  className="bi bi-share"></i></span>
            </div>
            <hr />
            </div>
            
        </div>
      )
        
        );
  return (
    <div className={styles.conatinerr}>
     <div className="row" id={styles.tweet}> <Tweet /> </div>
      <div className={styles.container}>
     
        <div className="row" id={styles.feed}>
            {feedss}
        </div> 
      </div>
    </div>
  )
}

