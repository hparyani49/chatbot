import React, { useState } from "react";
import "./footer.scss";

const Header = (props) => {
    return (
        <>
            <div className='footer'>
                <div className='input-container'>
                    <input className='input' onChange={props.onChange} value={props.inputVal} />
                </div>
                <div className='send-button' onClick={props.onSend}>
                    <i className='fa fa-arrow-circle-right'></i>
                </div>
            </div>
            <div className='fake-footer'></div>
        </>
    )
}

export default Header;