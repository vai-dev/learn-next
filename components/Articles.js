import React from 'react';
import articleStyle from '../styles/Articles.module.css'
import ArticleItem from './ArticleItem';
const Articles = ({articles}) => {
    return (
        <div className={ articleStyle.grid}>
            {articles.map((art) => (
                <ArticleItem article={art}/>
            ))}
        </div>
  )
};

export default Articles;
