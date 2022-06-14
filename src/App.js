

import React from 'react'
import Content from './components/Content'
import Sider from './components/Sider'
import styles from './index.module.scss'
import { useState,useEffect } from 'react'
import userService from './services/users'

const App = () => {
  const [cours,setCours]=useState('')
   const [users, setUsers] = useState([])
  useEffect(() => {
    userService.getAll().then(users =>
      setUsers( users.data )
     )
   }, [])
  const nav=[{status:true,content:'Votre demande'},
  {status:false,content:'Nos propositions'},
  {status:false,content:'Paiement'}]
  return (
    <div className={styles.App}>
            <Sider nav={nav}/>
            <Content/>
    </div>
  )
}

export default App