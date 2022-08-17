import React from 'react'
import styles from '../styles/Widget.module.css';
import Article from './Article'
import RandomProfiles from './RandomProfiles'
export default function Widget({articles , profiles}) {
   

  return (
    <div className={styles.container}>
      <div className="row">
        <div className="col">
            <Article  articles={articles} />
        </div>
      </div>
      <div className="row">
        <div className="col">
            <RandomProfiles profiles ={profiles} />
        </div>
      </div>
    </div>
  )
}
