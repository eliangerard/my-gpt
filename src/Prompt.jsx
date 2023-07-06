import { useRef } from 'react';
import './Prompt.css';

export const Prompt = ({ sendMessage }) => {
    const input = useRef(null);
    const submitMessage = async (event, isClick = false) => {
        if (event.key === 'Enter' || isClick) {
            const value = input.current.value.trim();
            if(value.length == 0) return;
            
            input.current.disabled = true;
            input.current.value = "";

            input.current.disabled = ! await sendMessage(value);
        }
    };

    return <>
        <div id="prompt">
            <input ref={input} type="text" onKeyDown={ submitMessage } placeholder="Escribe un mensaje..."></input>
            <button onClick={ (event) => submitMessage(event, true)}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48px" height="48px"><path d="M20.78,13.98L6.46,21.14C4.87,21.93,3,20.77,3,19v-4l12.42-2.33c0.75-0.14,0.75-1.2,0-1.34L3,9V5 c0-1.77,1.87-2.93,3.46-2.14l14.32,7.16C22.41,10.84,22.41,13.16,20.78,13.98z" /><polygon points="18.731,12 3,16.866 3,7.134" opacity=".35" /></svg></button>
        </div>
    </>
}