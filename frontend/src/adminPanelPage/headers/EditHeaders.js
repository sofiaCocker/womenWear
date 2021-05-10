import React, {useState, useEffect} from 'react'
import {Form, Button} from "react-bootstrap";
import axios from "axios"
import ImgSlider from "../../mainPage/ImageSlider.js";

function ArticlesControl() {
  const [chosenProducts, setChosenProducts] = useState([])
  const [headers, setHeaders] = useState([]);
  const [count2, setCount2] = useState(0)
  const [chosenToUpd, setChosenToUpd] = useState(null)
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
    console.log(chosenToUpd)
    console.log(chosenToUpd)
    await axios({url: `http://localhost:5001/navbar?id=${chosenToUpd.id}`, method: "PUT", data: { item: { ...formData} } })
    console.log("req performed")
  }
  useEffect(() => {
    (async function () { 
      if (count2 >= 1) {
        return;
      }
      setCount2(Number(count2) + 1);
    const data =  await axios({url: "http://localhost:5001/navbar", method: "GET"});
    console.log(data)
    setHeaders(data.data)
  })()
  })
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
    <div className="articlesEditControl">
    <h1>Headers Edit Control:</h1>
      <Form>
      <h3>Existing headers:</h3>
        {

          headers.map(header => {
            return (
            <div><Form.Group controlId={header._id}><Form.Check controlId={header._id} type="checkbox" onClick={(e) => {
              console.log(e)
              setChosenToUpd(document.getElementById(e.target.id))
            }} 
             label={<div><h1>{header.name}</h1>
             {header.products.map(el => { return (

              <div><h1>{el.name}</h1><h2>{el.price}</h2>
              <ImgSlider imgs={el.imgs}/></div>


              ) })}
            </div>}/></Form.Group></div>
            )
          })
        }
  <Form.Group controlId="headerNameForm">
  <h3>Modify header</h3>
    <Form.Label>Header name</Form.Label>
    <Form.Control type="text" placeholder={"Enter name:"} />
  </Form.Group>
    <Form.Group controlId="headerProductsForm">
    <Form.Label>Choose products</Form.Label>
    {
      products_.map(product => {
        return (<div>
          <Form.Check type="checkbox" id={product._id} onClick={ (e) => { if (!e.target.checked == true) { setNumOfChosenProducts(numOfChosenProducts - 1); 
            chosenProducts.splice(chosenProducts.indexOf({name: product.name, imgs: product.imgs, price: product.price}), 1); return; } handleNumOfChosenProductsIncrementation();  chosenProducts.push({name: product.name, imgs: product.imgs, price: product.price})} } label={(<div><h1>{product.name}</h1><h2>{product.price}</h2>
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