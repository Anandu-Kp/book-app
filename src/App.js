
import Navbar from "./Components/Navbar";
import InfoPanel from "./Components/InfoPanel";
import BookContainer from "./Components/BookContainer";
import BookInfo from "./Components/BookInfo";
import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

function App() {


  let [books, setBooks] = useState([]);
  let [currentBook, setCurrentBook] = useState({});
  console.log(currentBook);

  return (
    <div className="App">
      <Navbar setBooks={setBooks} />
      {Object.keys(currentBook).length === 0 ? (
        <InfoPanel />
      ) : (
        <BookInfo book={currentBook} />
      )}
      < BookContainer books={books} setCurrentBook={setCurrentBook} />
    </div>
  );
}

export default App;
