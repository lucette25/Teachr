import { useState, useEffect } from 'react'
import userService from './services/users'
import Search from './components/Search'
import Formulaire from './components/Form'
import Teacher from './components/Teacher'
  const App = () => {

  const [cours,setCours]=useState('')
  const [users, setUsers] = useState([])
  useEffect(() => {
    userService.getAll().then(users =>
      setUsers( users.data )
    )
  }, [])
  
  

  

  return (
    <div>
      <h2>Teach’r </h2>
      <Search value={cours} handleChange={({ target }) => setCours(target.value)}/>
     
      <h5>Les Teach’rs {''? cours==='' : ` ${cours}`} qui pourraient vous correspondre</h5>

          {console.log('cours',cours)}
          { users.map(user =>
        <div key={user.id}>
         <Teacher teacher={user}/>
        </div>
      )}
            <Formulaire />


    </div>
  )
}

export default App