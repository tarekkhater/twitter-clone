import styles from '../styles/Home.module.css';
import Widget from '../component/Widget';
import Feeds from '../component/Feeds';
import Sidebar from '../component/Sidebar';
import {useSession} from 'next-auth/react'
import Link from 'next/link';

  
  
export default function index({feeds , News , users}) {
  const {data:session} = useSession();
  return (
    <div className={styles.container} >
      {session ? (
        <div className='row'>
       <div className='col-4' id={styles.Sidebar}><Sidebar /></div> 
       <div className='col-5' id={styles.Feeds}><Feeds feeds={feeds.articles} /></div>
       <div className='col-3' id={styles.Widget}><Widget articles={News.articles} profiles={users.results} /></div>
      </div>
      ) 
      : (
         <div  id={styles.contain}>
        <img className={styles.logo} src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/2491px-Twitter-logo.svg.png' alt='logo'  />
          <button className="btn btn-primary" id={styles.sign} ><Link href="/signin" > Please sign in to go to your account </Link></button>
      </div>
      )}
     
    </div>
  )
}

export async function getServerSideProps(){
  const feeds = await fetch("https://saurav.tech/NewsAPI/top-headlines/category/health/in.json").then(res => res.json())
  const News = await fetch("https://saurav.tech/NewsAPI/everything/cnn.json").then(res => res.json())
  const users = await fetch("https://randomuser.me/api/?results=5000").then(res => res.json())
  return({
    props:{
      feeds : feeds,
      News : News,
      users:users,
    }
  })
}
