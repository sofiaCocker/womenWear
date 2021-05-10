import React, {useEffect} from 'react'
import ImageSlider from "./ImageSlider.js";
import "./Article.css"

function Article(props) {
	let ImgsCont;
	 if (props.data.imgs.length >= 1)  {
			ImgsCont = <ImageSlider imgs={props.data.imgs}/>;	
			}
			else {
				ImgsCont = "";
			}
	return (
		<div className="article">
		{
			ImgsCont
		}
			
			<h7>{props.data.description}</h7>
			<h1>{props.data.name}</h1>
			<p>{props.data.content}</p>
		</div>
	)
}

export default Article