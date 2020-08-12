import React, { Component } from 'react';
import select from '../variables/select.js'

const List = (props) => {

    const display = props.searchResults.filter((el) => {
        if (props.searchText === '') {
            return false
        }
        if (props.selectText === select.COUNTRY) {
            return el.address.toLowerCase().includes(props.searchText.toLowerCase()) || el.country.toLowerCase().includes(props.searchText.toLowerCase())
        }
        if (props.selectText === select.NAME) {
            return el.name.toLowerCase().includes(props.searchText.toLowerCase())
        }

        return false
    })

    return <div onMouseOver = {
            {} } > {
            display.map((item, id) => {
                return <div id = "itemList"
                key = { id }
                onClick = {
                        () => {
                            props.setObject(item)
                        }
                    } >
                    <
                    h5 > { item.name } < /h5> <
                    h6 > { item.address } < /h6> <
                    /div>
            })
        } <
        /div>
}

export default List;