import React, { useState } from "react";
import Header from '../Header/Header';
import "./chat-screen.scss";

const MessageHolder = (props) => {
    return (
        <div className={`message-holder ${props.source}`}>
            <div className='message'>
                {props.message}
            </div>
        </div>
    )
}

export default function App() {
    const [inputTxt, setInputTxt] = useState('');
    const [activeTab, setActiveTab] = useState(0);
    const [messages, setMessages] = useState([]);
    let tabs = [{ iconClass: 'fa-envelope', label: 'CHAT' }, { iconClass: 'fa-envelope', label: 'MY JOBS' }, { iconClass: 'fa-envelope', label: 'PROFILE' }, { iconClass: 'fa-envelope', label: 'LEARN' }];

    const onTabClick = (index) => {
        alert(tabs[index].label + ' Not Available');
    }

    const messageOnChange = (e) => {
        setInputTxt(e.target.value);
    }

    const onMessageSend = () => {
        let newMessages = [...messages];
        let newMsg = { message: inputTxt, source: 'user' };
        newMessages.push(newMsg);
        onMessage(inputTxt).then((res) => {
            let botMsg = { message: res.data.botMessage, source: 'bot' };
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
                <Header heading={'Job Finder'} tabs={tabs} activeTab={0} onTabClick={onTabClick} />
                <div className='chat-scroll-holder'>
                    <div className='chat-holder'>
                        {messages.map((cur, index) => {
                            return <MessageHolder {...cur} key={index} />
                        })}
                    </div>
                </div>
                <Footer onChange={messageOnChange} inputVal={inputTxt} onSend={onMessageSend} />
            </div>
        </div>
    );
}
