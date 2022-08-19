import { useState } from 'react'
import styles from '../styles/Article.module.css'
import Image from 'next/image';
import Link from 'next/link';
export default function Articles({articles}) {
    var [slices, setSlices] = useState(3);
  return (
    <div className={styles.container}>
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" id={styles.Search} />
      <div className={styles.articles}>
        <h5>What's happenning</h5>
       {articles.slice(0,slices).map((article)=> (
      <div key={article.title} className={styles.article}> 
        <a href={article.url} target="_blank">  
          <div className="row">
            <div className="col-10" id={styles.description}>
              <p>{article.title}</p>         
            </div>
            <div className="col-2" id={styles.image}>
               <img src={article.urlToImage} alt=''  />
            </div>
            
          </div> 
        </a>
      </div>))}
          <button type='button'  className={styles.show} onClick={()=> setSlices( slices +3)}>show more</button >
      </div>
    </div>
  )
}
