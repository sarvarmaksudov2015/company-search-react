import React, { Component } from 'react';

const Modal = (props) => {
    if (props.object === null) {
        return <div > < /div>
    }
    return <div style = {
            { position: "fixed", top: 0, left: 0, margin: "20px", padding: "30px", width: "90%", height: "80%", backgroundColor: "lightgrey" } } >
        <
        p onClick = {
            () => {
                props.setObject(null)
            }
        }
    style = {
            { color: "red" } } > Close < /p> <
        h4 > Company Information < /h4><hr / >
        <
        h4 > { props.object.name } < /h4> <
        p > Company status: < span style = {
            { color: "green" } } > ACTIVE < /span></p >
        <
        h4 > COMPANY REGISTRATION NUMBER: { props.object.registrationNumber } < /h4>  <
        h4 > VAT NUMBER: { props.object.vatNumber } < /h4> <
        h4 > REGISTERED ADDRESS: { props.object.address } < /h4> <
        h4 > COUNTRY: { props.object.country } < /h4> <
        h4 > ADDITIONAL STATUS DETAILS: { props.object.additionalStatusDetails } < /h4> <
        h5 > Headquaters Expired < /h5> <
        h4 > COMPANY DESCRIPTION < /h4> <
        div > { props.object.description } < /div> <
        /div>
}
export default Modal;