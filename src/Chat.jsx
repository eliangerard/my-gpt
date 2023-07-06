import { Prompt } from "./Prompt";
import './Chat.css';
import { Welcome } from "./Chat/Welcome";
import { useEffect, useState } from "react";
import { MyMsg } from "./Messages/MyMsg";
import { GPTMsg } from "./Messages/GPTMsg";

export const Chat = ({ chat, actualChat, sendMessage, setBehavior }) => {

    const isEmpty = chat === undefined || chat.length <= 1;

    return (
        <>
            <div id="chat">
                {isEmpty && <Welcome setBehavior={setBehavior} />}
                {!isEmpty && 
                    chat.map((message, i) => {
                        if (message.role == 'system')
                            return;
                        if (message.role == 'user')
                            return (<MyMsg key={i} content={message.content} />);
                        if (message.role == 'assistant')
                            return (<GPTMsg key={i} content={message.content} />);
                    })
                }
                <Prompt sendMessage={sendMessage} />
            </div>
        </>
    );
}