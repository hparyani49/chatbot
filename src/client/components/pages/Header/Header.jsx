import React from "react";
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
                    {props.tabs.map((cur, index) => {
                        return (
                            <div className={`tab ${props.activeTab == index ? "active" : ""}`} onClick={() => props.onTabClick(index)}>
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