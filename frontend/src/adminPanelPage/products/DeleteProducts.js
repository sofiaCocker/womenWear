import React, {useState, useEffect} from 'react'
import {Form, Button} from "react-bootstrap";
import axios from "axios"
import ImgSlider from "../../mainPage/ImageSlider.js";

function ArticlesControl() {
  const [count, setCount] = useState(0)
  const [headers, setHeaders] = useState([]);
  const [toDel, setToDel] = useState([])
  useEffect(() => {
    (async function () { 
      if (count >= 1) {
        return;
      }
      setCount(Number(count) + 1);
    const data =  await axios({url: "http://localhost:5001/products", method: "GET"});
    console.log(data)
    setHeaders(data.data)
  })()
  })
  
  return (
    <div className="productsDelControl">
    <h1>Products Delete Control:</h1>
      <Form>
    
    {
      headers.map(header => {
        return (
          <div>
          <Form.Group controlId={header._id}>
           <Form.Check type="checkbox"  
          onClick={ (e) => { 
              if (document.getElementById(e.target.id).checked == true) {
                toDel.push(e.target.id);
              }
              
           } } 
            label={(<h1>{header.name}</h1>)}/>
            </Form.Group>
        </div>)
      })
    }
    <Button variant="outline-primary" onClick={(e) => {
      toDel.forEach(id => {
        console.log(id)
        axios.delete(`http://localhost:5001/products?id=${id}`).then(res => console.log(res))
      })
    }}>Submit</Button>
</Form>
    </div>
  )
}

export default ArticlesControl