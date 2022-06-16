import React from 'react'
import { useState } from 'react'
import styles from './index.module.scss'
import TeacherCard from './TeacherCard'

export default function Content({teachers}) {
  const [cours,setCours]=useState('')
  const [from,setFrom]=useState(0)

  const teacherToShow=teachers.slice(from,from+3)

  

  return (
    <div className={styles.Content}>
          <h5 className={styles.Title}>En quelle matière avez vous besoin d'aide ?</h5>
          <input   
            className={styles.Search}
            type="text"
            value={cours}
            placeholder='SVT, Anglais, piano...'
            onChange={({ target }) =>  setCours(target.value)} />
        <h5 className={styles.Title}>Les Teach’rs {''? cours==='' : ` ${cours}`} qui pourraient vous correspondre</h5>
        <div className={styles.Teachers}>
            {teacherToShow && teacherToShow.map((teacher,index)=>{
                return(
                    <TeacherCard 
                        key={index}
                        teacher={teacher}
                    />
                )
            })}
        </div>
        <div >
        <button  id='next' className={styles.Button}  onClick={()=>setFrom(from===0?from:(from-1))}>PRECEDENT</button>

        <button  id='next' className={styles.Button} onClick={()=>setFrom(from===teachers.length-3?from:from+1)}>SUIVANT</button>

        </div>

    </div>

  )
}
