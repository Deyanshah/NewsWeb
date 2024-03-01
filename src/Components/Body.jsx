import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";

const NewsBoard = ({ category }) => {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError(null);

      try {
        let url = "";
        url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=9f32da592658426dbb1fae2a289ee8fc`;

        const response = await fetch(url);
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Failed to fetch news");
        }

        if (data.articles.length === 0) {
          throw new Error("No news articles found");
        }

        setArticles(data.articles);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, [category]);

  if (loading) {
    return <p className="text-center">We will get you there...</p>;
  }

  if (error) {
    return <p className="text-center">Error: {error}</p>;
  }

  return (
    <div>
      {/* <h2 className="text-center text-5xl p-5 font-semibold">Latest News</h2> */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
        {articles.map((news, index) => (
          <NewsCard
            key={index}
            title={news.title}
            description={news.description}
            src={news.urlToImage}
            url={news.url}
            pubDate={news.publishedAt}
            source={news.source.name}
          />
        ))}
      </div>
    </div>
  );
};

export default NewsBoard;
