
import Head from "next/head";
import Comment from "../../component/Comment";
import Sidebar from "../../component/Sidebar";
import Widget from "../../component/Widget";
import Post from "../../component/Post";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {collection,doc, onSnapshot,orderBy, query,} from "firebase/firestore";
import { db } from "../../firebase";
import styles from '../../styles/Home.module.css';
import GetComments from "../../component/GetComments";


export default function PostPage({feeds , News , users}) {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState();
  const [comments, setComments] = useState([]);
 
        
  useEffect(()=>{
    onSnapshot(
     (query(collection(db, "posts" , id , "comment"),orderBy("time" , "desc"))),
   (snapshot)=> {setComments(snapshot.docs);}
    )},[])
  useEffect(
    () => onSnapshot(doc(db, "posts", id), (snapshot) => setPost(snapshot)),
    [db, id]
  );

 

  

  return (
    <div className={styles.container} >
      <Head>
        <title>Twitter page</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
        <div className='row'>
       <div className='col-4' id={styles.Sidebar}><Sidebar /></div> 
       <div className='col-5' id={styles.Feeds}><div className="">
          <div className="">
            <div>
            </div>
            <h5 className={styles.tweet}>
                 <span > <i className="bi bi-arrow-left" id={styles.arrow}  onClick={() => router.push("/")}></i> </span>
              Tweet
            </h5>
            <hr/>
          </div>
            
          <Post id={id} feed={post} />
          {comments.length > 0 && (
            <div className="">
              {comments.map((comment) => (
                <div key={comment.id}>
                <GetComments key={comment.id} id={comment.id} originalId={id} comment={comment.data()} />
                </div>
              ))}
               
              
            </div>
          )}
         </div>
        </div>
       <div className='col-3' id={styles.Widget}><Widget articles={News?.articles} profiles={users?.results} /></div>
       <Comment />
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
      users: users,
    }
  })
}
   
       

        

        

        
  


