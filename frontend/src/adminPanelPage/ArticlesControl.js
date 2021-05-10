import React, {useState, useEffect} from 'react'
import Add from './articles/AddArticles.js'
import Edit from './articles/EditArticles.js'
import Delete from "./articles/DeleteArticles.js"
import {Link, Route} from "react-router-dom"
import {Button, Navbar} from "react-bootstrap"

function ArticlesControl() {
  return (
    <div>
    <hr/>
  <Navbar bg="light"><Link to="/adminPanel/articles/add"><Button variant="outline-primary">Add articles</Button></Link>
    
    <Link to="/adminPanel/articles/edit"><Button variant="outline-primary">Edit articles</Button></Link>
    
    <Link to="/adminPanel/articles/delete"><Button variant="outline-primary">Delete articles</Button></Link>
      </Navbar>

    <Route path="/adminPanel/articles/add"><Add/></Route>
    <Route path="/adminPanel/articles/edit"><Edit/></Route>
    <Route path="/adminPanel/articles/delete"><Delete/></Route>
    </div>
  )
}

export default ArticlesControl