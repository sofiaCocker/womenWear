import React from 'react'
import Navbar from "../navbar/Navbar.js"
import ImageSlider from "../mainPage/ImageSlider.js"
import "./ProductPage.css"
import {Button} from "react-bootstrap"
import axios from "axios"

function ProductPage(props) {
	return (
		<div>
		<Navbar/>
		<div className="product">
		<h1>{props.product.name}</h1>
		<h2>${props.product.price}</h2>
		<Button id={props.product._id} variant="primary"><i className="fas fa-heart"></i></Button>
		<ImageSlider imgs={props.product.imgs}/>
		</div>
		</div>
	)
}

export default ProductPage