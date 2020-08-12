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

    return <div > {
            display.map((item, id) => {
                return <div key = { id }
                onClick = {
                        () => {
                            props.setObject(item)
                        }
                    } >
                    <
                    h3 > { item.name } < /h3> <
                    h4 > { item.address } < /h4> <
                    /div>
            })
        } <
        /div>
}

export default List;