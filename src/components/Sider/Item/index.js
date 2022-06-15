import React from 'react'
import styles from './index.module.scss'

export default function Item({index,status,content,setClick}) {
  return (
    <div className={styles.Item} onClick={()=>setClick(index-1)}>
        <div className={styles.Status + (status?(" "+styles.Active):" ")}>
            {!status && index}
        </div>
        <div className={styles.Content}>
            {content}
        </div>
    </div>
  )
}
