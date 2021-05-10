import React, {useState, useEffect} from 'react';
import axios from "axios";
import Article from "./Article.js";
import "./Content.css"

function Content() {
	const [articles, setArticles] = useState([]);
	useEffect(() => {
		async function fetch() { 
			const data = await axios({url: "http://localhost:5001/articles", method: "GET"})
			setArticles(data.data);
		}
		fetch();
	})
	return (
		<div className="content container">
		{
			
			articles.map(article => <Article key={article.name} data={article}/>)
		}
		</div>
	)
}

export default Content