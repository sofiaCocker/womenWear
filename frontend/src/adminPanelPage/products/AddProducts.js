import React, {useState, useEffect} from 'react'
import {Form, Button} from "react-bootstrap";
import axios from "axios"
import ImgSlider from "../../mainPage/ImageSlider.js";

function ArticlesControl() {
  const [count, setCount] = useState(0);
  const [tool] = useState([{data: ""}])
  async function handleBtnSubmition(e) {
    e.preventDefault();
    console.log(e)
    const imgs_ = [];
    imgs_.push(document.querySelector("#headerProductsForm").value)
    const formData = {
      imgs: imgs_,
      price: document.getElementById("articlesPriceForm").value,
      name: document.getElementById("articlesNameForm").value
    };
    console.log("Form data", formData)
    await axios({url: "http://localhost:5001/products", method: "POST", data: { item: { ...formData} } })
    console.log("req performed")
  }
  
  const [numOfChosenProducts, setNumOfChosenProducts] = useState(1)
  function handleNumOfChosenProductsIncrementation () {
    setNumOfChosenProducts(Number(numOfChosenProducts) + 1)
  }
  return (
    <div className="articlesAddControl">
    <h1>Products Add Control:</h1>
      <Form>
  <Form.Group controlId="articlesNameForm">
    <Form.Label>Product name</Form.Label>
    <Form.Control type="text" placeholder="Enter name" />
  </Form.Group>
    <Form.Group controlId="articlesPriceForm">
    <Form.Label>Product price</Form.Label>
    <Form.Control type="number"/>
  </Form.Group>
    <Form.Group controlId="headerProductsForm">
    <Form.Label>Add photos</Form.Label>
    {
      tool.map(i => {
        return (
          <Form.Control type="text"/>
        )
      })
    }
    <Button variant="outline-primary" onClick={ (e) => { setCount(Number(count) + 1); tool.push({data: ""}) } }>+</Button>
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