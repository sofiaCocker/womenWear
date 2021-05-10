import React, {useState} from 'react'
import {Form, Button} from "react-bootstrap";
import axios from "axios"

function ArticlesControl() {
  const [imgsNum, setImgsNum] = useState(1)
  const [imgsNumTool, setImgsNumTool] = useState([{data: imgsNum}])
  function handleImgsNumIncrementation() {
    setImgsNum(Number(imgsNum)+1);
    imgsNumTool.push({data: Number(imgsNum)+1})
  }
  async function handleBtnSubmit(e) {
    console.log("req")
    const i = [];
    document.querySelectorAll("#articleImgsForm").forEach(iii => i.push(iii.value))
    const res = await axios({url: "http://localhost:5001/articles", data: {item: { name: document.querySelector("#articleNameForm").value, imgs: i, 
      description: document.querySelector("#articleDescrForm").value,
      content: document.querySelector("#articleContentForm").value,
  } }, method: "POST"})
    console.log(res)
  }
  return (
    <div className="articlesControl">
    <h1>Articles Control:</h1>
      <Form>
  <Form.Group controlId="articleNameForm">
    <Form.Label>Article name</Form.Label>
    <Form.Control type="text" placeholder="Enter name" />
  </Form.Group>
    <Form.Group controlId="articleDescrForm">
    <Form.Label>Article description</Form.Label>
    <Form.Control type="text" placeholder="Enter name" />
  </Form.Group>
    <Form.Group controlId="articleContentForm">
    <Form.Label>Article content</Form.Label>
    <Form.Control type="text" placeholder="Enter name" />
  </Form.Group>
  <Form.Group controlId="articleImgsForm">
    {
      imgsNumTool.map(num => {
        return (<div><Form.Control type="text"/></div>)
      })
    }
    <Button variant="primary"onClick={handleImgsNumIncrementation}>+</Button>
  </Form.Group>
  <Button variant="primary" onClick={handleBtnSubmit}>
    Submit
  </Button>
</Form>
    </div>
  )
}

export default ArticlesControl