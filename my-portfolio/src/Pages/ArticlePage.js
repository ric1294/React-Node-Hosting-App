import React from 'react';

const ArticlePage = ({ match}) => {
    const name = match.params.name
    return (
        <>
        <title>Article</title>
        <p>This is Artcile  Page</p>
        <h1>This is an {name} article</h1>
        </>
    )
}


export default ArticlePage;