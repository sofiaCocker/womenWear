import React from 'react';
import ArticleControl from "./ArticlesControl.js";
import HeadersControl from "./HeadersControl.js";
import ProductsControl from "./ProductsControl.js";
import AdminPanelNavbar from "./AdminPanelNavbar.js"

import {Route} from "react-router-dom";

const homeComp = <AdminPanelNavbar/>;

function AdminPanel() {
	return (
		<div>
		<Route path="/adminPanel">
		<AdminPanelNavbar/>
		</Route>
		<Route path="/adminPanel/home">
			<h1>Hello, Moderator</h1>
		</Route>
		<Route path="/adminPanel/articles">
			<ArticleControl/>
		</Route>
		<Route path="/adminPanel/headers">
			<HeadersControl/>
		</Route>
		<Route path="/adminPanel/products">
			<ProductsControl/>
		</Route>
		</div>
	)
}

export default AdminPanel