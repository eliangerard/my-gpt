import { Prompt } from "./Prompt";
import './Chat.css';
import { useEffect, useState } from "react";
import { PromptDalle } from "./PromptDalle";
import { fetchSD } from "./helpers/fetchSD";
import { WelcomeSD } from "./Chat/WelcomeSD";
export const Dalle = ({ chat, actualChat, sendMessage, setBehavior }) => {
    const [images, setImages] = useState([])
    const [prompt, setPrompt] = useState("");
    const isEmpty = chat === undefined || chat.length <= 1;

    const sendQuery = async (prompt) => {

        const results = await fetchSD(prompt);
        setPrompt(prompt);
        setImages(results.data);
    }
    return (
        <>
            <div id="chat">
                <WelcomeSD prompt={prompt} />
                <div id='imageContainer'>
                    {images.map((image,i) => <img key={'image'+i} src={image.url} alt={prompt}/>)}
                </div>
                <PromptDalle sendQuery={sendQuery} />
                { images.length > 0 && <i>¡Guarda tus imagenes! Solo estarán disponibles por 5 minutos</i>}
            </div>
        </>
    );
}