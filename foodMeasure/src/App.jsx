import { useState, useEffect } from 'react'
import './App.css'
import services from './services/service'



/*const handleSearch = (event) => {
  
}*/


//main app, displays the banner, title, and one of the components
function App() {
  //changes based on banner button clicked, determines the component shown
  const [show, setShow] = useState("about")
  const [food, setFood] = useState(null)
  const [info, setInfo] = useState([])
  const [infoUnit, setInfoUnit] = useState([])
  const [nutri, setNutri] = useState([])
  const [nutriUnit, setNutriUnit] = useState([])
  /*const hook = () => {
    services.retrieve()
    .then(response => console.log(response))
    .catch(error => {console.log(error)})
  }
  useEffect(hook, [])*/
  //components that are called in App depending on the button clicked
const Calc = () => {
  const [foodSearch, setFoodSearch] = useState('')

  const searchNutrients = (nList, val) => {
    return nList.map(obj => obj.nutrientName).indexOf(val)
  }
  const handleSearch = (event) => {
  event.preventDefault()
  
  services.retrieve(foodSearch)
  .then(response => 
    {
      setFood(response)
      const nutVal = response.foodNutrients
      const calInd = searchNutrients(nutVal, "Energy")
      const proInd = searchNutrients(nutVal, "Protein")
      const fibInd = searchNutrients(nutVal, "Fiber, total dietary")
      const foundCal = nutVal[calInd]
      const foundPro = nutVal[proInd]
      const foundFib = nutVal[fibInd]

      let name = response.description
      name = name.charAt(0) + name.slice(1).toLowerCase();

      setInfo([response.servingSize, foundCal.value, name])
      setInfoUnit([response.servingSizeUnit, foundCal.unitName.toLowerCase()])
      setNutri([foundPro.value, foundFib.value])
      setNutriUnit([foundPro.unitName.toLowerCase(), foundFib.unitName.toLowerCase()])
      

    })
  .catch(error => console.log(error))


}
    const handleFoodChange = (event) => {
      setFoodSearch(event.target.value)
    }
  

  return (
    <>

      <h1>Nutrition Calculator</h1>

      <div className="segregation">
        <form onSubmit={handleSearch} className="foodSearch">
        <input type="text" placeholder="Enter food" value={foodSearch} onChange={handleFoodChange}/>
          <button>Search</button>
        </form>
        <div className="data">
          <h2>Food: {info[2] || ""}</h2>
          <h2>Serving Size: { (info[0] != undefined)
          ? (info[0] + " " + infoUnit[0]) 
          : ""}</h2>
          <h2>Calories: {(info[1] != undefined)
          ? (info[1] + " " + infoUnit[1]) 
          : ""}</h2>
          <h2>Nutritional Value:</h2>
          <h4>Protein: { (nutri[0] != undefined)
          ?(nutri[0] + " " + nutriUnit[0])
          : ""}</h4>
          <h4>Fiber: { (nutri[1] != undefined)
          ? (nutri[1] + " " + nutriUnit[1])
          : ""}</h4>
          <h4>Vitamins: </h4>


        </div>

      </div>


    </>
  )
}
const About = () => {
  return (
    <>
      <h1> FOOD TRACKER </h1>
      <div className="card">

      </div>

    </>
  )
}
const Compare = () => {
  return (
    <>
      <h1>Compare</h1>
    </>
  )
}
const Rec = () => {
  
  return (
    <>
      <h1>Reccomended Foods</h1>
      <h2>Eggs</h2>
      <p>This delectable product is not only one of the world’s most nutrient-packed foods, but it also comes at a very affordable price of an average of only $4 a dozen! One egg contains around 6 grams of protein, 11% of vitamin D, 5% of vitamin B6, and plenty of minerals and healthy fats. </p>
      <br></br>
      <p>We would highly recommend adding eggs to your breakfast due to their high protein value, their ability to reduce ghrelin (a type of hunger hormone), stabilize blood pressure, improve muscle health, etc.</p>
      <br></br>
      <h2>Edamame</h2>
      <p>This refreshing product is low in calories and high in nutrients. It comes at a cheap price too! For $2, you can buy 340-grams worth of edamame beans. Around 160 grams of cooked edamame beans would provide 18.4 grams of protein (~37% of the daily value for adults), 8 grams of fiber, 97.6 mg of calcium (~10% of the DV for adults), 40 mg of vitamin A, etc.</p>
      <br></br>
      <p>We would strongly suggest eating these beans as snacks and adding them to your main dishes. Not only is this an easy vegetable to prepare (you only need to boil it), but it also has a low glycemic index, meaning it doesn’t greatly raise blood sugar levels. Also, due to edamame being a soy product, it can help with menopause and bone strength.</p>
      <h2>Milk</h2>
      <p>Milk is a delicious, affordable, and a high-protein, high-calcium product! The half-gallon of the typical milk you see costs around $2.50, and the organic kind costs around $4. One cup of whole milk contains around 8 grams of protein and 314 mg of calcium (24% of the DV for adults). Milk also contains plenty of vitamin B2, vitamin B12, and phosphorus.</p>
      <br></br>
      <p>Milk is a great thing to add to your breakfast. For people who are lactose intolerant, you can always blend milk with other foods such as smoothies.</p>
      <br></br>
      <p>Some types of milk do have quite a lot of fat, but there are many types of milk with varying fats. So, those who cannot consume too much fat for health reasons can always choose low-fat or skim milk. For example, many children would find milk with high-fat more healthful due to its high-calcium benefit. However, some adults might not need as much calcium and can go for the low-fat option. You can choose whatever fits best for you.</p>
      <br></br>
      <h2>Ground turkey</h2>
      <p>Ground turkey is highly nutritious, juicy, and affordable, especially compared to some other meats. One pound of ground turkey would usually only cost around $7! In a 28-gram serving, this meat consists of 23 grams of protein and only 195 calories. Turkey is also a great source of vitamin B and selenium (which helps decrease inflammation).</p>
      <br></br>
      <p>Turkey is very versatile and can be used in many meals. It’s delicious too! Just don’t overcook it.</p>
    </>
  )
}

  

  return (
    <>
      <nav className="banner">
        <ul>

          <button className={(show == "about") ? "selected" : ""} onClick={() => setShow("about")}>About</button>
          <button className={(show == "calc") ? "selected" : ""} onClick={() => setShow("calc")}>Nutrition Calculator</button>
          <button className={(show == "compare") ? "selected" : ""} onClick={() => setShow("compare")}>Compare</button>
          <button className={(show == "rec") ? "selected" : ""} onClick={() => setShow("rec")}>Recc Food</button>
        </ul></nav>
      <div className="bg"></div>
      {
        (show === "calc") ?
          <Calc />
          :
          (show === "about") ?
            <About />
            :
            (show === "compare") ?
              <Compare />
              :
              (show === "rec") ?
                <Rec />
                :
                <About />
      }



    </>

  )


}

export default App
