import React, {useState, useEffect} from 'react'
import Add from './products/AddProducts.js'
import Edit from './products/EditProducts.js'
import Delete from "./products/DeleteProducts.js"
import {Link, Route} from "react-router-dom"
import {Button, Navbar} from "react-bootstrap"

function ArticlesControl() {
  return (
    <div>
    <hr/>
  <Navbar bg="light"><Link to="/adminPanel/products/add"><Button variant="outline-primary">Add products</Button></Link>
    
    <Link to="/adminPanel/products/edit"><Button variant="outline-primary">Edit products</Button></Link>
    
    <Link to="/adminPanel/products/delete"><Button variant="outline-primary">Delete products</Button></Link>
      </Navbar>

    <Route path="/adminPanel/products/add"><Add/></Route>
    <Route path="/adminPanel/products/edit"><Edit/></Route>
    <Route path="/adminPanel/products/delete"><Delete/></Route>
    </div>
  )
}

export default ArticlesControl