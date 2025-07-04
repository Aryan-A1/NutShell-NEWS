import { useEffect, useState } from "react"
import NewsItem from "./NewsItem";

const NewsBoard = () => {
  const [articles, setArticles] = useState([]);
  
  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${import.meta.env.VITE_API_KEY}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles));
  }, [])

  return (
    <div className="container">
      <h2 className="text-center my-4">Latest <span className="badge bg-danger">News</span></h2>
      <div className="row">
        {articles.map((news, index) => (
          <div className="col-12 mb-4" key={index}>
            <NewsItem 
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
              author={news.author}
              publishedAt={news.publishedAt}
            />
          </div>
        ))}
      </div>
    </div>
  ) 
}

export default NewsBoard