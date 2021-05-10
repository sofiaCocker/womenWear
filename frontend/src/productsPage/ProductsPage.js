import React from 'react'
import "./ProductsPage.css"
import ProductPage from "../productPage/ProductPage.js"

function ProductsPage(props) {
	return (
		<div className="productsPage container">
			{
				props.data.map(product => {
					return (<div><ProductPage product={product}/></div>)
				})
			}
		</div>
	)
}

export default ProductsPage