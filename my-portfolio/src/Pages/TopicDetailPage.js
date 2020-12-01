import React from 'react';
import content from './TopicContentPage';
import TopicList from '../ReusablePages/TopicList';
import PageNotFoundPage from './PageNotFoundPage';

const TopicDetailPage = ({ match}) => {
    const name = match.params.name
    const topic = content.find(topic => topic.name === name);

    const remainigTopicList = content.filter(topic => topic.name != name)
    
    if(!topic) return <PageNotFoundPage/>
    return (
        <>
        <h1>{topic.title}</h1>
        {topic.content.map((para, key)=>(
            <p key={key}>{para}</p>
        ))}
        <TopicList topics={remainigTopicList}/>
        </>
    )
}


export default TopicDetailPage;