import { useEffect, useState } from "react";
import { Dalle } from "./Dalle";
import { Chat } from "./Chat";
import { Menu } from "./Menu";
import { fetchGPT } from "./helpers/fetchGPT";

export const App = () => {
    const [chats, setChats] = useState([[]]);
    const [actualChat, setActualChat] = useState(0);
    const [image, setImage] = useState(false);

    const setChat = (chat) => {
        setImage(false);
        setActualChat(chat)
    }
    const newChat = () => {
        setImage(false);
        if(chats[actualChat].length <=1) return;
        setActualChat(actualChat + 1);
        const newChats = [...chats, []];
        setChats(newChats);
    }
    const deleteChat = (id) => {
        setActualChat(0);
        const newChats = [...chats.slice(0, id), ...chats.slice(id + 1)];
        setChats(newChats);
    }
    const deleteAll = () => {
        setActualChat(0);
        setChats([[]]);
    }
      
    const addBehavior = (chats, behavior) => {
        const newChats = [...chats];
        newChats[actualChat] = [{
            role: 'system',
            content: behavior
        }];
        return newChats;
    };
        
    const addMessage = (chats, role, message) => {
        let newChats;
        if (chats[actualChat] === undefined || chats[actualChat].length == 0)
            newChats = addBehavior(chats, "You are an AI assistant named GPT, you will answer and saludate in the user's language so pay attention to his messages!");
        else newChats = [...chats];
        console.log("nC", newChats);
        console.log("ac", actualChat);
        newChats[actualChat].push({
            role,
            content: message
        });
        
        console.log("nC", newChats);
        return newChats;
    };

    const sendMessage = async (message) => {
        console.log(message);
        let newChats = addMessage(chats, 'user', message);
        setChats(newChats);
        const response = await fetchGPT(newChats[actualChat]).catch(err => false);

        newChats = addMessage(newChats, 'assistant', response.choices[0].message.content);
        setChats(newChats);
        console.log(response);
        return response;
    }

    const setBehavior = ({ target }) => {
        const behavior = target.value;
        setChats((chats) => addBehavior(chats, behavior));
    };

    return <>
        <Menu chats={chats} newChat = {newChat} setActualChat={setChat} deleteChat = {deleteChat} deleteAll = {deleteAll} setImage = {setImage}/>
        { image && <Dalle/> }
        { !image && <Chat chat = {chats[actualChat]} actualChat={actualChat} sendMessage={sendMessage} setBehavior={setBehavior}/>}
    </>;
}

export default App;