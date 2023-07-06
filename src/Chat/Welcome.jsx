import './Welcome.css'

export const Welcome = ({setBehavior}) => {
    return (
        <>
            <div id="welcome">
                <h1>MyGPT</h1>
                <div>
                    <p>Describe el comportamiento que tendrá el bot (Opcional)</p>
                    <textarea onBlur={ setBehavior } id="system" cols="30" rows="4" placeholder="Eres un pirata del futuro que cada que termina una frase dice 'Arrr!'..."></textarea>
                </div>
            </div>
        </>
    )
}