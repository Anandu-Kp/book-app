import React from "react";



const BookInfo = ({ book }) => {

    console.log((book));
    return (
        <div className="book-info">
            <div className="book-details">
                <img src={book.volumeInfo.imageLinks.thumbnail}></img>
                <div className="book">
                    <span className="title">{book.volumeInfo.title}</span>
                    <span className="auther">{book.volumeInfo.authors.join(",")}</span>
                    <p >{book.searchInfo.textSnippet}</p>
                    <div className="rating">
                        <span>Avg Rating : {book.volumeInfo.averageRating}</span>
                        <span>Rating Count : {book.volumeInfo.ratingsCount}</span>
                        <span>Publisher : {book.volumeInfo.publisher}</span>
                        <span>Language : {book.volumeInfo.language}</span>
                    </div>
                    <div className="buttons">
                        <button className="read" onClick={() => window.location.href = book.volumeInfo.previewLink}>NOW READ</button>
                        <button className="read" onClick={() => window.location.href = book.volumeInfo.infoLink}>More Info</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default BookInfo;