import './MyMsg.css';

export const MyMsg = ( {content} ) => {
    return (
        <>
            <div className="mmContainer">
                <div className="myMessage">
                    <p>{content}</p>
                </div>
            </div>
        </>
    )
}