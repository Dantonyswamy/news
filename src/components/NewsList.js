import React from 'react';
import './NewsList.css';
import NewsCard from './NewsCard';
const NewsList = props => {   
   const list = props.news.map((article) => {
        return <NewsCard key={article.publishedAt} article={article}></NewsCard>
    })
    return <div className="news-list">{ list }</div>
}

export default NewsList;