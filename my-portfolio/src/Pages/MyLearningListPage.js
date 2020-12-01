import React from 'react';
import Content from './TopicContentPage';
import TopicList from '../ReusablePages/TopicList'


const MyLearningListPage = () => (
        <>
        <title>My Learnig Items</title>
        <TopicList topics={Content}/>
        </>
    );

export default MyLearningListPage;