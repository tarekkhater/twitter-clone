import styles from '../styles/Home.module.css';
import Widget from '../component/Widget';
import Feeds from '../component/Feeds';
import Sidebar from '../component/Sidebar';

export default function index({feeds , News , users}) {
 
  return (
    <div className={styles.container} >
      <div className='row'>
       <div className='col-4' id={styles.Sidebar}><Sidebar /></div> 
       <div className='col-5' id={styles.Feeds}><Feeds feeds={feeds.articles} /></div>
       <div className='col-3' id={styles.Widget}><Widget articles={News.articles} profiles={users.results} /></div>
      </div>
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
