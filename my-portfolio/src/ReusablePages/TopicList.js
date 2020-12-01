import React from 'react'
import { Link } from 'react-router-dom';
const TopicList = ({topics}) => (
    <>
    {topics.map((topic , key) => (
        <Link key={key} to={`/topic-detail/${topic.name}`}>
          <h3>{topic.title}</h3>
          <p>{topic.content}</p>
        </Link>
       
      ))}
      </>
)

export default TopicList