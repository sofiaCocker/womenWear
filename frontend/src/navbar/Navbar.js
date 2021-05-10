import React, {useState, useEffect} from 'react';
import axios from "axios";
import ReactDOM from "react-dom"
import "./Navbar.css";
import {
  Link
} from "react-router-dom";

import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from "react-bootstrap"
function Navbar_() {
	const dropdownTitle = (<i className='fas fa-bars'></i>);
	const [headers, setHeaders] = useState([]);
	useEffect(() => {
		async function fetch() { 
			const data = await axios({url: "http://localhost:5001/navbar", method: "GET"})
			setHeaders(data.data);
		}
		fetch();
	})
	return (
		<Navbar bg="light" expand="md" fixed="top" className="navbar">
		<Nav className="mr-auto">
		<NavDropdown title={dropdownTitle} id="basic-nav-dropdown">
		{ 
	headers.map(header => <NavDropdown.Item> <Link to={"/" + header.name}>{header.name}<NavDropdown.Divider></NavDropdown.Divider></Link></NavDropdown.Item>
						)
					
				}
      </NavDropdown>
      </Nav>
      <Nav className="mr-auto">
      <Link to="/home"><Button className="mr-sm-2"><i class="fas fa-home"></i></Button></Link>
      </Nav>
      <Nav className="mr-auto">
      	<Form inline>
    <FormControl type="text" placeholder="Search" className=" mr-sm-2" />
    <Button type="submit">Submit</Button>
  </Form>
  </Nav>
  <Nav className="mr-auto">
  <Button className="mr-sm-2"><i className="fas fa-shopping-cart"></i></Button>
  <Navbar.Brand>WomenWear</Navbar.Brand>
      </Nav>	

      
    </Navbar>
	)
}

export default Navbar_