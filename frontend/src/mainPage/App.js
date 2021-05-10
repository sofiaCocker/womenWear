import React, {useState, useEffect} from 'react'
import Navbar from "../navbar/Navbar.js";
import Content from "./Content.js"
import ProductsPage from "../productsPage/ProductsPage.js";
import axios from "axios"
import AdminPanel from "../adminPanelPage/AdminPanel.js"
import {
  BrowserRouter as HashRouter, Route
} from "react-router-dom";
import "./App.css"

const whenHomePage = <div><Navbar/> <Content/></div>;

function App() {
	const [headers, setHeaders] = useState([]); 
	const [count, setCount] = useState(0);
	useEffect(() => {
		async function fetch() { 
			if (count >= 1) {
				return;
			}
			setCount(Number(count)+1);
			const data = await axios({url: "http://localhost:5001/navbar", method: "GET"})
			console.log(data)
			setHeaders(data.data);
		}
		fetch();
	})
	return (
		<div>
		<HashRouter>
		<Route path="/home">{whenHomePage}</Route>
		{ 
			headers.map(header => <Route key={header.name} path={"/" + header.name}><div> <ProductsPage data={header.products}/></div></Route>
						)
					
				}
				<Route path="/adminPanel"><AdminPanel/></Route>
			</HashRouter>
		</div>
	)
}

export default App