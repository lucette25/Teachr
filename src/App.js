import { useState, useEffect } from 'react'
import userService from './services/users'

  const App = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    userService.getAll().then(users =>
      setUsers( users.data )
    )
  }, [])
  
  

  

  return (
    <div>
      <h2>Teach’r </h2>
          {console.log('kkk',users)}
          { users.map(user =>
        <div key={user.id}>
          {user.first_name}
        </div>

      )}

    </div>
  )
}

export default App