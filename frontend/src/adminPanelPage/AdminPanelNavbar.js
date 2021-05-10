import React from 'react'
import {Navbar, Button, Nav} from "react-bootstrap";
import {Link} from "react-router-dom";

function AdminPanelNavbar() {
	return (
		<div>
		<Navbar bg="light">
		<Nav>
		<Button variant="outline-primary"><Link to="/adminPanel/home">Home</Link></Button>
		<Button variant="outline-primary"><Link to="/adminPanel/articles">Articles</Link></Button>
		<Button variant="outline-primary"><Link to="/adminPanel/headers">Headers</Link></Button>
		<Button variant="outline-primary"><Link to="/adminPanel/products">Products</Link></Button>
		</Nav>
		</Navbar>
		</div>
	)
}

export default AdminPanelNavbar