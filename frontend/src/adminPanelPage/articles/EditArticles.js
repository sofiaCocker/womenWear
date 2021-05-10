import React, {useState, useEffect} from 'react'
import {Form, Button} from "react-bootstrap";
import axios from "axios"
import ImgSlider from "../../mainPage/ImageSlider.js";

function ArticlesControl() {
  const [headers, setHeaders] = useState([]);
  const [count3, setCount3] = useState(1)
  const [tool, setTool] = useState([{data: ""}])
  const [count2, setCount2] = useState(0)
  const [chosenToUpd, setChosenToUpd] = useState(null)
  const [count, setCount] = useState(0)
  const [products_, setProducts] = useState([]);
  const [countForArtNameFReqs, setCountForArtNameFReqs] = useState(0)
  async function handleBtnSubmition(e) {
    e.preventDefault();
    console.log(e)
    const i = [];
    document.querySelectorAll("#picsForm").forEach(a => i.push(a.value))
    const formData = {
      name: document.querySelector("#artNameForm").value,
      description: document.querySelector("#artDescrForm").value,
      content: document.querySelector("#artContentForm").value,
      imgs: i
    };
    console.log("Form data", formData)
    console.log(chosenToUpd)
    console.log(chosenToUpd)
    await axios({url: `http://localhost:5001/articles?id=${chosenToUpd.id}`, method: "PUT", data: { item: { ...formData} } })
    console.log("req performed")
  }
  useEffect(() => {
    (async function () { 
      if (count2 >= 1) {
        return;
      }
      setCount2(Number(count2) + 1);
    const data =  await axios({url: "http://localhost:5001/articles", method: "GET"});
    console.log(data)
    setHeaders(data.data)
  })()
  })
  
  return (
    <div className="articlesEditControl">
    <h1>Articles Edit Control:</h1>
      <Form>
      <h3>Existing articles:</h3>
        {

          headers.map(header => {
            return (
            <div><Form.Group controlId={header._id}><Form.Check controlId={header._id} type="checkbox" onClick={(e) => {
              console.log(e)
              setChosenToUpd(document.getElementById(e.target.id))
            }} 
            label={<div><h1>{header.name}</h1><h2>{header.description}</h2><p>{header.content}</p>
            </div>}/></Form.Group></div>
            )
          })
        }
  <Form.Group controlId="artNameForm">
  <h3>Modify article</h3>
    <Form.Label>Article name</Form.Label>
    <Form.Control type="text" placeholder={"Enter name:"} />
  </Form.Group>
  <Form.Group controlId="artDescrForm">
    <Form.Label>Article description</Form.Label>
    <Form.Control type="text"/>
  </Form.Group>
  <Form.Group controlId="artContentForm">
    <Form.Label>Article content</Form.Label>
    <Form.Control type="text"/>
  </Form.Group>
    <Form.Group controlId="picsForm">
    <Form.Label>Choose pics</Form.Label>
    {
      tool.map(product => {
        return (<div>
          <Form.Control type="text"/>
        </div>)
      })
    }
    <Button variant="outline-primary" onClick={() => {
      tool.push({});
      setCount3(Number(count3) + 1)
    }}>+</Button>
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