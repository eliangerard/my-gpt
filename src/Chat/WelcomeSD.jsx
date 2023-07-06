import './Welcome.css'

export const WelcomeSD = ({ prompt }) => {
    return (
        <>
            <div id="welcome" className='welcomeSD'>
                <h1>MyStableDiffusion</h1>
                <div>
                { prompt == "" && <p className='sd'>Describe abajo la imagen que quieres generar</p> }
                { prompt != "" && <p className='sd'>{prompt}</p> }
                </div>
            </div>
        </>
    )
}