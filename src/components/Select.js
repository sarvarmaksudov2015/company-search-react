import React, { Component } from 'react';
import select from '../variables/select'

const Select = (props) => {
    return <div style = {
            { flex: 2 } } >
        <
        select onChange = { event => props.setSelectText(event.target.value) }
    name = ""
    id = "" >
        <
        option > Please Select < /option> <
        option value = { select.COUNTRY } > Country < /option> <
        option value = { select.NAME } > Name < /option> <
        /select> <
        /div>
}

export default Select;