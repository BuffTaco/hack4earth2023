import axios from 'axios'
const baseUrl = '/food'


const retrieve = (choice) => {
    const request = axios.get(`${baseUrl}/${choice}`).catch(error => {
        console.log(error);
    })
    return request.then(response => (
        JSON.parse(response.data).foods.find(food => food.description.toUpperCase() == choice.toUpperCase())
        ||
        JSON.parse(response.data).foods.find(food => food.ingredients.toUpperCase() == choice.toUpperCase() + "." || food.ingredients.toUpperCase() == choice.toUpperCase())
        ||
        JSON.parse(response.data).foods[0]
        )
        
        )
    //const rval = request.then(response => JSON.parse(response))
    /*
    
        ||
        
        ||
        */
    
}


export default { retrieve }