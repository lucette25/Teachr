import React from 'react'
import Content from './components/Content'
import LastContent from './components/LastContent'
import Sider from './components/Sider'
import styles from './index.module.scss'
import { useState,useEffect } from 'react'
import userService from './services/users'

const App = () => {
   const [users, setUsers] = useState([])
  useEffect(() => {
    userService.getAll().then(users =>
      setUsers( users.data )
     )
   }, [])

   const menueItemNumber=6
   const [selected, setSelected] = useState(Array(menueItemNumber).fill(false))
  
  const nav=[{status:true,content:'Votre demande'},
  {status:false,content:'Nos propositions'},
  {status:false,content:'Paiement'},
  {status:true,content:'Domicile ou distance'},
  {status:false,content:'Quel type de cours'},
  {status:false,content:'Presque finit!'}]
  for(let i=0;i<menueItemNumber-1;i++){
    nav[i].status=selected[i]
  }
  const onClick = newValue => { 
    const copy = [...selected]
    copy[newValue] = true
   setSelected(copy)
 }

  return (
    <div className={styles.App}>
        {nav[menueItemNumber-2].status === true ?
          <>
            <Sider nav={nav} onClick={onClick}/>
            <LastContent teachers={users}/>
          </>:
          <>
            <Sider nav={nav} onClick={onClick}/>
            <Content teachers={users}/>
        </>
        }
           
    </div>
  )
}

export default App