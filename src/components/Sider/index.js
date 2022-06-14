import React from 'react'
import styles from './index.module.scss'
import Item from './Item'

export default function Sider({nav}) {
  return (
    <div className={styles.Sider}>
        <div className={styles.Logo}></div>
        <div className={styles.Nav}>
            {nav && nav.map((item,index)=>{
                return(
                    <Item 
                        key={index}
                        index={index +1} 
                        status={item.status}
                        content={item.content}
                    />
                )
            })}
        </div>
        <div className={styles.Book}></div>
    </div>
  )
}
