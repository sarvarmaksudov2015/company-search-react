import React, { Component } from 'react';

const Search = (props) => {
    return <div style = {
            { flex: 7 } } >
        <
        input onChange = { event => props.setSearchText(event.target.value) }
    style = {
        { width: "100%" } }
    type = "text" / >
        <
        /div>
}

export default Search;