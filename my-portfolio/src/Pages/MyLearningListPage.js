import React from 'react';
import Content from './TopicContentPage';
import { Link } from 'react-router-dom';


const MyLearningListPage = () => (
        <>
        <title>My Learnig Items</title>
        {Content.map((topic , key) => (
          <Link key={key} to={`/topic-detail/${topic.name}`}>
            <h3>{topic.title}</h3>
            <p>{topic.content}</p>
          </Link>
         
        ))}
        </>
    );

export default MyLearningListPage;