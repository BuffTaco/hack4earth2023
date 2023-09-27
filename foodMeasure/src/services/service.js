import axios from 'axios'


const retrieve = () => {
    const request = axios.get('/food/key')
    const rval = request.then(response => response.data)
    return rval;
}
/*const retrieve = async () => {
    const request = await axios.get(`/food/key`)
    console.log('updated')
    const rval = await request.data
    
    return rval
}*/

export default { retrieve }