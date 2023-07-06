import { useState, useEffect, useRef } from 'react';
import './GPTMsg.css';

export const GPTMsg = ( {content} ) => {
    const [text, setText] = useState('');
    const txaRef = useRef(null);
    const setHeight = (event) => {
        txaRef.current.style.height = '0px';
        txaRef.current.style.height = txaRef.current.scrollHeight + "px";
    };

    useEffect(() => setHeight(), [text]);

    const onChange = (event) => {
        setText(event.target.value);
    }

    return (
        <>
            <div className="gptContainer">
                <div className="gptMessage">
                <textarea ref={txaRef} name="text" onChange={ onChange } value={content}></textarea>
                </div>
            </div>
        </>
    )
}