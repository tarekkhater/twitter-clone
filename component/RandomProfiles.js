import styles from '../styles/RandomProfiles.module.css';
import { useState } from 'react';
 function RandomProfiles({profiles}) {
    const [slices , setSlices] =  useState(3);
  return (
    <div className={styles.container}>
        <br />
        <div className={styles.Div}>
        <h3>Who to follow</h3>
      {profiles?.slice(0,slices).map((profile)=>(
        <div key={profile.login.username} className={styles.user}>
           <button className={styles.followBtn} >Follow</button>
           <img src={profile.picture.thumbnail} width='' height='' className={styles.imgProfile} />
                <div className={styles.text}>
                    <h4>{profile.name.first + " " +profile.name.last}</h4>
                    <h6>@{profile.login.username}</h6>
                </div>
        
        </div>
        
      ))}
        <button type='button'  className={styles.show} onClick={()=> setSlices( slices +3)}>show more</button >
      </div>
    </div>
  )
}
export default RandomProfiles;