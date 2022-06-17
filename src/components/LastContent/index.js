import React from 'react'
import styles from './index.module.scss'
import Form from './Form'

export default function LastContent({teachers}) {
  

  

  return (
    <div className={styles.LastContent}>
        <p style={{"textAlign":"right"}}> Vous retrouvez des difficltés? <span className={styles.Title}>Obtenez de l'aide</span></p>
        <h5 className={styles.Title}>Presque fini !</h5>
        <p>Une fois que des Teach'r auront répondu à votre annonce, vous 
          aurez besoin d'un compte pour y répondre <span style={{"fontWeight": "bolder"}}> Prenons de l'avance !</span>
        </p>
        <div className={styles.Form}>
          <Form />
        </div>
        <div >
        <button className={styles.Button} id='back' >PRECEDENT</button>

        <button  className={styles.Button} id='next'>SUIVANT</button>

        </div>

    </div>

  )
}
