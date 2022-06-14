import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FaSearch } from 'react-icons/fa';
const Search = ({ value, handleChange }) => {
  return <div className='container' >
      <h5>En quelle matière avez vous besoin d'aide ?</h5>
      <InputGroup value={value} onChange={handleChange}>
        <Form.Control placeholder="SVT,Anglais, Piano,Math" />
        <InputGroup.Text> <FaSearch/>
        </InputGroup.Text>
       
      </InputGroup>

     
     
   
    </div>
  
}

export default Search