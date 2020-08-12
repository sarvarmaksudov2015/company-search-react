import React, { Component } from 'react';

const Modal = (props) => {
    if (props.object === null) {
        return <div > < /div>
    }
    return <div style = {
            { position: "fixed", top: 0, left: 0 } } >
        <
        div onClick = {
            () => {
                props.setObject(null)
            }
        } > Close < /div> <
        div > { props.object.name } < /div> <
        /div>
}
export default Modal;