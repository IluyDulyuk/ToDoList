import React from 'react';
import './app-header.css';

const AppHeader = ({liked, allPost}) => {

    return (
        <div className="app-header d-flex">
            <h1>Iluy Dulyuk</h1>
            <h2>{allPost} записи, из них понравилось {liked}</h2>
        </div>
    )
}

export default AppHeader;