import axios from 'axios'
const baseUrl = 'https://www.data.gouv.fr/api/1/users'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}
export default {
    getAll}