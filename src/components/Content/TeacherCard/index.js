import React from 'react'
import styles from './index.module.scss'
import { FaGraduationCap,FaComments,FaMapMarkerAlt,FaCheckCircle} from 'react-icons/fa';

export default function TeacherCard({teacher,index}) {
  return (
    <div className={styles.TeacherCard}>
      <div className={index%2===0?styles.Image:styles.ImageMan}></div>

        <div className={styles.Content}>
        <h4 style={{"textAlign":"center"}}><b> {teacher.first_name} { teacher.last_name}</b></h4> 
            <div className={styles.Start}></div>
            <p><FaGraduationCap/> HEC, 1ère année</p>
            <p><FaComments/> Bilingue</p> 
            <p><FaCheckCircle/> Diplôme vérifié</p> 
            <p><FaMapMarkerAlt/> Paris</p> 

      </div >
      <div className={styles.B}>
      <button  className={styles.Button} id='next'>CHOISIR</button>

      </div>
      </div>

  )
}
