import React from 'react';
import content from './TopicContentPage';

const TopicDetailPage = ({ match}) => {
    const name = match.params.name
    const topic = content.find(topic => topic.name === name);
    
    if(!topic) return <h1>Page not found</h1>
    return (
        <>
        <h1>{topic.title}</h1>
        {topic.content.map((para, key)=>(
            <p key={key}>{para}</p>
        ))}
        </>
    )
}


export default TopicDetailPage;