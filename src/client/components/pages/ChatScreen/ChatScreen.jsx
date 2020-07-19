import React, { useState } from "react";
import "./chat-screen.scss";

export default function App() {
    const [inputTxt, setInputTxt] = useState('');
    const [activeTab, setActiveTab] = useState(0);
    const [messages, setMessages] = useState([
        {
            source: "user",
            message: "Hi"
        },
        {
            source: "bot",
            message: "Hi there"
        }
    ]);

    const messageOnChange = (e) => {
        setInputTxt(e.target.value);
    }

    const onMessageSend = () => {
        let newMessages = [...messages];
        let newMsg = {message: inputTxt, source: 'user'};
        newMessages.push(newMsg);
        onMessage(inputTxt).then((res) => {
            let botMsg = {message: res.data.botMessage, source: 'bot'};
            newMessages.push(botMsg);
            setMessages(newMessages);
            setInputTxt('');
        })
    }

    const onMessage = (userMessage) => {
        return Promise.resolve({
            data: {
                botMessage: 'Pardon my ignorance, I am just a dummy.'
            }
        });
    }

    return (
        <div className="App">
            <div className="chat-container">
                <div className="header">
                    <div className='header-top'>
                        <i className='fa fa-wechat'></i>
                        Job Finder
                    </div>
                    <div className="tabs">
                        <div className={`tab ${activeTab == 0 ? "active" : ""}`}>
                            <i className="fa fa-envelope" />
                            <div>CHAT</div>
                        </div>
                        <div className={`tab ${activeTab == 1 ? "active" : ""}`} onClick={() => alert('Not Available')}>
                            <i className="fa fa-envelope" />
                            <div>MY JOBS</div>
                        </div>
                        <div className={`tab ${activeTab == 2 ? "active" : ""}`} onClick={() => alert('Not Available')}>
                            <i className="fa fa-envelope" />
                            <div>PROFILE</div>
                        </div>
                        <div className={`tab ${activeTab == 3 ? "active" : ""}`} onClick={() => alert('Not Available')}>
                            <i className="fa fa-envelope" />
                            <div>LEARN</div>
                        </div>
                    </div>
                </div>
                <div className='fake-header'></div>
                <div className='chat-scroll-holder'>
                    <div className='chat-holder'>
                        {messages.map((cur, index) => {
                            return <div className={`message-holder ${cur.source}`}>
                                <div className='message'>
                                    {cur.message}
                                </div>
                            </div>
                        })}
                    </div>
                </div>
                <div className='footer'>
                    <div className='input-container'>
                        <input className='input' onChange={messageOnChange} value={inputTxt} />
                    </div>
                    <div className='send-button' onClick={onMessageSend}>
                        <i className='fa fa-arrow-circle-right'></i>
                    </div>
                </div>
                <div className='fake-footer'></div>
            </div>
        </div>
    );
}
