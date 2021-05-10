import React, {useState, useEffect} from 'react'
import {Form, Button} from "react-bootstrap";
import axios from "axios"
import ImgSlider from "../../mainPage/ImageSlider.js";

function ArticlesControl() {
  const [chosenProducts, setChosenProducts] = useState([])
  const [count, setCount] = useState(0)
  const [products_, setProducts] = useState([]);
  const [countForArtNameFReqs, setCountForArtNameFReqs] = useState(0)
  async function handleBtnSubmition(e) {
    e.preventDefault();
    console.log(e)
    const formData = {
      name: document.querySelector("#headerNameForm").value,
      products: chosenProducts
    };
    console.log("Form data", formData)
    await axios({url: "http://localhost:5001/navbar", method: "POST", data: { item: { ...formData} } })
    console.log("req performed")
  }
  useEffect(() => {
    (async function () { 
      if (count >= 1) {
        return;
      }
      setCount(Number(count) + 1);
    const data =  await axios({url: "http://localhost:5001/products", method: "GET"});
    console.log(data)
    setProducts(data.data)
  })()
  })
  
  const [numOfChosenProducts, setNumOfChosenProducts] = useState(1)
  function handleNumOfChosenProductsIncrementation () {
    setNumOfChosenProducts(Number(numOfChosenProducts) + 1)
  }
  return (
    <div className="articlesAddControl">
    <h1>Headers Add Control:</h1>
      <Form>
  <Form.Group controlId="headerNameForm">
    <Form.Label>Header name</Form.Label>
    <Form.Control type="text" placeholder="Enter name" />
  </Form.Group>
    <Form.Group controlId="headerProductsForm">
    <Form.Label>Choose products</Form.Label>
    {
      products_.map(product => {
        return (<div>
          <Form.Check type="checkbox" id={product._id} onClick={ (e) => { if (!e.target.checked == true) { return; } handleNumOfChosenProductsIncrementation(); chosenProducts.push({name: product.name, imgs: product.imgs, price: product.price})} } label={(<div><h1>{product.name}</h1><h2>{product.price}</h2>
            <ImgSlider imgs={product.imgs}/></div>)}/>
        </div>)
      })
    }
  </Form.Group>
  <Button variant="primary" onClick={handleBtnSubmition}>
    Submit
  </Button>
</Form>
<p id="resCont"></p>
    </div>
  )
}

export default ArticlesControl