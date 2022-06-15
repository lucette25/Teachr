import React from 'react'
import styles from './index.module.scss'

export default function TeacherCard({teacher}) {
  return (
    <div className={styles.TeacherCard}>
      <div className={styles.Image}></div>

      <div className={styles.Infos} >
        <div className={styles.Content}>
            <h4><b> {teacher.first_name} { teacher.last_name}</b></h4> 
            <p>Architect & Engineer</p> 
        </div>
      </div>
    </div>

  )
}
