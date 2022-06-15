import React from 'react'
import styles from './index.module.scss'

export default function Input({name, placeholder}) {
  return (
    <div className={styles.Col}>
        <p>{name}</p>
        <input
            style={{ "backgroundColor":"#F3F5FB"}}
            className={ (name==='Mot de passe')||(name==='Confirmation mot de passe')?(" "+styles.Hide):" "}
            type="text"
            name="first_namee"
            placeholder={placeholder}/>
      </div>

)
}