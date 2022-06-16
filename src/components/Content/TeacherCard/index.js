import React from 'react'
import styles from './index.module.scss'
import { FaGraduationCap,FaComments,FaMapMarkerAlt,FaCheckCircle} from 'react-icons/fa';

export default function TeacherCard({teacher}) {
  return (
    <div className={styles.TeacherCard}>
      <div className={styles.Image}></div>

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
