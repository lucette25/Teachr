import React, { useState } from 'react'
import styles from './index.module.scss'
import Input from './Input'
import validator from 'validator'



export default function Form() {
  const [email,setEmail]=useState('')
  const [passwordType,setPasswordType]=useState('password')
  const [lastName,setLastName]=useState('')
  const [password,setPassword]=useState('')
  const [firstName,setFirstName]=useState('')
  const [phoneNumber,setPhoneNumer]=useState('')
  const [passwordConfirmation,setPasswordConfirmation]=useState('')
  const [cpasswordType,setCPasswordType]=useState('password')
  const [valideEmail,setValideEmail]=useState(true)
  const [validePhoneNumber,setvalidePhoneNumber]=useState(true)
  
  const handleChange=(event)=>{
    event.preventDefault()

    if (validator.isEmail(email)) {
      setValideEmail(true)
    } else {
      setValideEmail(false)

    }
    if (validator.isMobilePhone(phoneNumber,'fr-FR')) {
      setvalidePhoneNumber(true)
    } else {
      setvalidePhoneNumber(false)


    }
  }
  const handleClickShowPassword=()=>{
    setPasswordType(passwordType==="password"?"text":"password")
  }

  const handleClickShowCPassword=()=>{
    setCPasswordType(cpasswordType==="password"?"text":"password")
  }


  return (
    <>
      <form className={styles.Form} onSubmit={handleChange}>

      <table>
        <tbody>
          <tr>
            <td>
            
      
       
          
              <Input 
                name={'Prénom'} 
                placeholder={'Ex. John'}
                value={firstName} 
                setChange={setFirstName} 
              />
            </td>
            <td>
              <Input 
                name={'Nom'} 
                placeholder={'Ex. DUPONT'}
                value={lastName} 
                setChange={setLastName} 
              />
            </td>
          </tr>

          <tr>
            <td>
              <Input 
                name={'E-mail'} 
                placeholder={'mail@gmail.com'}
                value={email} 
                setChange={setEmail} 
                valideEmail={valideEmail}
                />
            </td>
            <td>
              <Input 
                name={'No. Téléphone portable'}
                placeholder={'Ex. 06 xx xx xx xx'}
                value={phoneNumber} 
                setChange={setPhoneNumer}
                validePhoneNumber={validePhoneNumber}
              />
            </td>
          </tr>

          <tr>
            <td>
              <Input 
                name={'Mot de passe'} 
                placeholder={'XXXXXX'}
                value={password} 
                setChange={setPassword}
                type={passwordType}
                handleClickShowPassword={handleClickShowPassword}

              />
            </td>
            <td>
              <Input 
                name={'Confirmation mot de passe'} 
                placeholder={'XXXXXX'}
                value={passwordConfirmation} 
                setChange={setPasswordConfirmation}
                type={cpasswordType}
                handleClickShowPassword={handleClickShowCPassword}


              />
            </td>
          </tr>
        </tbody>
      </table>
      <button  className={styles.Button}  >SOUMETTRE</button>

    </form>
  </>
)
}