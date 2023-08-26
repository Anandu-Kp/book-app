import React from "react";

import book from "../Resources/book.png";


const InfoPanel = () => {

    return (
        <div className="info-panel">
            <div className="first">
                <img src={book}></img>
                <div className="book-info">
                    <span>Title</span>
                    <p>Lorem ipsum dolor,  veniam eligendi totam quisquam aspernatur omnis eius nostrum aliquid vitae. Quia qui libero at.
                    </p>
                    <button className="read">NOW READ</button>
                </div>

            </div>

            <div className="first">
                <img src={book}></img>
                <div className="book-info">
                    <span>Title</span>
                    <p>Lorem ipsum dolor,   veniam eligendi totam quisquam aspernatur omnis eius nostrum aliquid vitae. Quia qui libero at.
                    </p>
                    <button className="read">NOW READ</button>
                </div>

            </div>
        </div>
    );
}

export default InfoPanel;