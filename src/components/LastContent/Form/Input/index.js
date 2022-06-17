import React from 'react'
import styles from './index.module.scss'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import IconButton from '@mui/material/IconButton'


import InputAdornment from "@mui/material/InputAdornment"

export default function Input({name, type,placeholder,value,setChange,showPassword,handleClickShowPassword,valideEmail,validePhoneNumber}) {
  return (
    <div className={styles.Col}>
        <p>{name}</p>
        <input
            style={{ "backgroundColor":"#F3F5FB"}}
            className={ (valideEmail===false)||(validePhoneNumber===false)?styles.Error:""}
   
            type={"text" && type }
            name="first_name"
            value={value}
            onChange={({ target }) =>  setChange(target.value)}

            placeholder={placeholder} />
            <InputAdornment position="end" className={ (name==='Mot de passe')||(name==='Confirmation mot de passe')?(" "+styles.Hide):(" "+styles.None)}>
            <IconButton  onClick={()=>handleClickShowPassword()}>
              {type==="password"? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
      </div>

)
}