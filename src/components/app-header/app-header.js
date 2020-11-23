import React from 'react';

const AppHeader = ({liked, allPosts}) =>{
    return (
        <div className="app-header d-flex">
            <h1>Oleh Bohdan</h1>
    <h2>{allPosts} records, and liked {liked}</h2>
        </div>
    )
}

export default AppHeader;