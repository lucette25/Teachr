import React from 'react'
import styles from './index.module.scss'
import Input from './Input'

export default function Form() {
  return (
    <form className={styles.Form}>

    <table>
      <tbody>
        <tr>
          <td>
            <Input name={'Prénom'} placeholder={'Ex. John'}/>
          </td>
          <td>
            <Input name={'Nom'} placeholder={'Ex. DUPONT'}/>
          </td>
        </tr>

        <tr>
          <td>
            <Input name={'E-mail'} placeholder={'mail@gmail.com'}/>
          </td>
          <td>
            <Input name={'No. Téléphone portable'} placeholder={'Ex. 06 xx xx xx xx'}/>
          </td>
        </tr>

        <tr>
          <td>
            <Input name={'Mot de passe'} placeholder={'XXXXXX'}/>
          </td>
          <td>
            <Input name={'Confirmation mot de passe'} placeholder={'XXXXXX'}/>
          </td>
        </tr>
      </tbody>
    </table>
    <button className={styles.Button}type="submit" id='create-button'>SOUMETTRE</button>
  </form>
)
}