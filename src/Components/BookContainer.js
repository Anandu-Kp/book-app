import React from "react";
import book from "../Resources/book.png"
import axios from "axios";


const BookContainer = ({ books, setCurrentBook }) => {



    return (
        <div className="book-container">
            {
                books.map((book, index) => {
                    return (
                        <div onClick={() => setCurrentBook(book)}>
                            <img src={book.volumeInfo.imageLinks.thumbnail}></img>
                        </div>
                    )

                })
            }


        </div>
    )

}

export default BookContainer;