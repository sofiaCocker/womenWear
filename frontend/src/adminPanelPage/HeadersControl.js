import React, {useState, useEffect} from 'react'
import Add from './headers/AddHeaders.js'
import Edit from './headers/EditHeaders.js'
import Delete from "./headers/DeleteHeaders.js"
import {Link, Route} from "react-router-dom"
import {Button, Navbar} from "react-bootstrap"

function ArticlesControl() {
  return (
    <div>
    <hr/>
  <Navbar bg="light"><Link to="/adminPanel/headers/add"><Button variant="outline-primary">Add headers</Button></Link>
    
    <Link to="/adminPanel/headers/edit"><Button variant="outline-primary">Edit headers</Button></Link>
    
    <Link to="/adminPanel/headers/delete"><Button variant="outline-primary">Delete headers</Button></Link>
      </Navbar>

    <Route path="/adminPanel/headers/add"><Add/></Route>
    <Route path="/adminPanel/headers/edit"><Edit/></Route>
    <Route path="/adminPanel/headers/delete"><Delete/></Route>
    </div>
  )
}

export default ArticlesControl