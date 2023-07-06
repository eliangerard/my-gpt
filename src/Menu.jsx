import { useEffect, useRef } from 'react';
import './Menu.css';
import { MenuChat } from './Chat/MenuChat';
export const Menu = ({chats, setActualChat, setImage, newChat, deleteChat, deleteAll }) => {
    const asideMenu = useRef(null);
    const btnAside = useRef(null);
    const opaquer = useRef(null);

    const openAside = () => {
        asideMenu.current.style.display = "flex";
        asideMenu.current.classList.toggle('asideDeployed');
        opaquer.current.style.display = "block";
        setTimeout(function () {
            opaquer.current.style.backgroundColor = "#00000041";
            asideMenu.current.style.width = "15rem";
        }, 5);
    }
    const closeAside = () => {
        asideMenu.current.classList.toggle('asideDeployed');
        asideMenu.current.style.width = "0rem";
        opaquer.current.style.backgroundColor = "#00000000";
        setTimeout(function () {
            asideMenu.current.style.display = "none";
            opaquer.current.style.display = "none";
        }, 150);
    }
    useEffect(() => {
        const handleClickOutside = (event) => {
          if (asideMenu.current){
            // El clic fue fuera del elemento aside, realiza la acción deseada aquí
            let isClickInside = asideMenu.current.contains(event.target);
            let isButtonClick = btnAside.current.contains(event.target);
            let mobile = asideMenu.current.classList.contains("asideDeployed");
            if (!isClickInside && !isButtonClick && mobile)
                closeAside();
          }
        }
    
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
      }, []);

    return <>
        <div id="opaquer" ref={opaquer}></div>
        <header>
            <div id="btnAside" ref={btnAside} className="headerChat" onClick={openAside}>
                <svg id="btnSvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48px" height="48px"><path d="M20,14H4c-1.105,0-2-0.895-2-2v0c0-1.105,0.895-2,2-2h16c1.105,0,2,0.895,2,2v0	C22,13.105,21.105,14,20,14z" opacity=".35" /><path d="M20,7H4C2.895,7,2,6.105,2,5v0c0-1.105,0.895-2,2-2h16c1.105,0,2,0.895,2,2v0C22,6.105,21.105,7,20,7z" /><path d="M20,21H4c-1.105,0-2-0.895-2-2v0c0-1.105,0.895-2,2-2h16c1.105,0,2,0.895,2,2v0C22,20.105,21.105,21,20,21z" /></ svg>
            </div>
            <h2>MyAI</h2>
            <div className="flex">
                <div className="headerChat">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48px" height="48px"><path d="M18,21H6c-1.657,0-3-1.343-3-3V6c0-1.657,1.343-3,3-3h12c1.657,0,3,1.343,3,3v12	C21,19.657,19.657,21,18,21z" opacity=".35" /><circle cx="16" cy="8" r="2" /><path d="M6,17c0,0.548,0.448,1,1,1h10c0.552,0,1-0.444,1-1c0-1.364-1.188-3-2-3c-0.812,0-1.491,1-2.5,1c-2.442,0-2.5-5-4.5-5	S6,14.362,6,17z" /></ svg>
                </div>
                <div className="headerChat">
                    <svg onClick={newChat} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48px" height="48px"><circle cx="12" cy="12" r="10" opacity=".35" /><path d="M17,11h-3c-0.552,0-1-0.448-1-1V7c0-0.552-0.448-1-1-1s-1,0.448-1,1v3c0,0.552-0.448,1-1,1H7c-0.552,0-1,0.448-1,1	s0.448,1,1,1h3c0.552,0,1,0.448,1,1v3c0,0.552,0.448,1,1,1s1-0.448,1-1v-3c0-0.552,0.448-1,1-1h3c0.552,0,1-0.448,1-1	S17.552,11,17,11z" /></ svg>
                </div>
            </div>
        </header>
        <aside id="chats" ref={asideMenu}>
            <h1>MyGPT</h1>
            <div className="asideChat newChat" onClick={() => setImage(true)}>
                <p>Imagenes por IA</p>
            </div>
            <div className="asideChat newChat" onClick={newChat}>
                <p> Nuevo chat</p>
            </div>
            <hr></hr>
            <p id="eraseAll" onClick={deleteAll}>Borrar todos</p>
            <div id="allChats">
                {chats.map((chat, i) => {
                    if(chat.length > 1)
                        return <MenuChat key={i} id={i} setActualChat={setActualChat} deleteChat= {deleteChat}/>
                    return;
                })}
            </div>
        </aside>
    </>
}