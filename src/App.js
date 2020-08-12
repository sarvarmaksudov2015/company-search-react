import React, { useState } from 'react';
import './App.css';
import Header from './components/Header.js';
import Select from './components/Select';
import Search from './components/Search';
import List from './components/List';
import data from './data/countries.json'
import searchResults from './data/searchResults.json'
import Modal from './components/Modal'

function App() {
    const [selectText, setSelectText] = useState("");
    const [searchText, setSearchText] = useState("");
    const [list, setList] = useState(searchResults);
    const [object, setObject] = useState(null);

    return ( < div className = "App" >
        <
        Header / >
        <
        Modal object = { object }
        setObject = { setObject }
        /> <
        div id = "search" >
        <
        Select setSelectText = { setSelectText }
        /> <
        Search setSearchText = { setSearchText }
        /> <
        /div> <
        List searchResults = { list }
        selectText = { selectText }
        setObject = { setObject }
        searchText = { searchText }
        /> <
        /div>
    )
}

export default App;