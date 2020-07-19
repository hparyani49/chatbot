import React, { useState } from "react";
import "./header.scss";

const Header = (props) => {
    return (
        <>
            <div className="header">
                <div className='header-top'>
                    <i className='fa fa-wechat'></i>
                    {props.heading}
                </div>
                <div className="tabs">
                    {props.tab.map((cur, index) => {
                        return (
                            <div className={`tab ${props.activeTab == 0 ? "active" : ""}`}>
                                <i className={`fa ${cur.iconClass}`} />
                                <div>{cur.label}</div>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='fake-header'></div>
        </>
    )
}

export default Header;