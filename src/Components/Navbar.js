import React, { useEffect, useState } from "react";
import logo from "../Resources/logo.png"
import heart from "../Resources/heart.png"
import notification from "../Resources/notification.png"
import premium from "../Resources/premium.png"
import profile from "../Resources/profile.png"
import search from "../Resources/search.png"
import axios from "axios"

const Navbar = ({ setBooks }) => {


    let [searchItem, setSearchItem] = useState("");

    function getImages() {
        let q = searchItem || "harrypotter";
        axios.get(`https://www.googleapis.com/books/v1/volumes?q=${q}`)
            .then((response) => {
                setBooks(response.data.items);
            })
            .catch((error) => console.log(error))
    }
    useEffect(
        () => {
            getImages();
        }, []
    )


    return (
        <div className="navbar">
            <div className="left">
                <img src={logo}></img>
                <span>KeazoN<span>BOOKS</span></span>
            </div>
            <div className="center">
                <div className="search">
                    <img src={search}></img>
                    <input className="search" onChange={(e) => setSearchItem(e.target.value)} placeholder="Search for the book you want and read it now... Sherlock Holmes, Harry Pot..." id="search"></input>
                </div>
                <button className="search-btn" onClick={getImages}>Search</button>
            </div>
            <div className="right">
                <img src={heart} alt=""></img>
                <img src={notification} alt=""></img>
                <img src={premium} alt=""></img>
                <img src={profile} alt=""></img>
            </div>
        </div >

    );
}
export default Navbar;